import React, { Component } from 'react';
import { throttle } from "lodash";

type Pos = { x: number; y: number; };

const clamp = (min: number, value: number, max: number) =>
  Math.max(min, Math.min(value, max));

const distance = (p1: Pos, p2: Pos) =>
  Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));

const midpoint = (p1: Pos, p2: Pos) => ({
  x: (p1.x + p2.x) / 2,
  y: (p1.y + p2.y) / 2
});

const touchPt = (touch: Touch) => ({
  x: touch.clientX,
  y: touch.clientY
});

const touchDistance = (t0: Touch, t1: Touch) =>
  distance(touchPt(t0), touchPt(t1));

// The amount that a value of a dimension will change given a new scale
const coordChange = (coordinate: number, scaleRatio: number) =>
  (scaleRatio * coordinate) - coordinate;


let passiveSupported = false;
try {
  const options = {
    get passive() {
      passiveSupported = true;
      return false;
    }
  };
  // @ts-expect-error test is unknown
  window.addEventListener("test", options, options);
  // @ts-expect-error test is unknown
  window.removeEventListener("test", options, options);
} catch {
  passiveSupported = false;
}

const makePassiveEventOption = (passive: boolean) => passiveSupported ? { passive } : passive;

/*
  This contains logic for providing a map-like interaction to any DOM node.
  It allows a user to pinch, zoom, translate, etc, as they would an interactive map.
  It renders its children with the current state of the translation and does not do any scaling
  or translating on its own. This works on both desktop, and mobile.
*/
export class MapInteractionControlled extends Component<any, any> {
  startPointerInfo: any;
  containerNode: any;

  static get defaultProps() {
    return {
      minScale: 0.05,
      maxScale: 3,
      showControls: false,
      translationBounds: {},
      disableZoom: false,
      disablePan: false
    };
  }

  constructor(props: any) {
    super(props);

    this.state = {
      shouldPreventTouchEndDefault: false
    };

    this.startPointerInfo = undefined;

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);

    this.onMouseUp = this.onMouseUp.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);

    this.onWheel = this.onWheel.bind(this);
  }

  componentDidMount() {
    const passiveOption = makePassiveEventOption(false);

    this.getContainerNode().addEventListener('wheel', this.onWheel, passiveOption);
    /*
      Setup events for the gesture lifecycle: start, move, end touch
    */

    // start gesture
    this.getContainerNode().addEventListener('touchstart', this.onTouchStart, passiveOption);
    this.getContainerNode().addEventListener('mousedown', this.onMouseDown, passiveOption);

    // move gesture
    window.addEventListener('touchmove', this.onTouchMove, passiveOption);
    window.addEventListener('mousemove', this.onMouseMove, passiveOption);

    // end gesture
    if (typeof passiveOption == "boolean") return;
    const touchAndMouseEndOptions = { capture: true, ...passiveOption };
    window.addEventListener('touchend', this.onTouchEnd, touchAndMouseEndOptions);
    window.addEventListener('mouseup', this.onMouseUp, touchAndMouseEndOptions);
  }

  componentWillUnmount() {
    this.getContainerNode().removeEventListener('wheel', this.onWheel);

    // Remove touch events
    this.getContainerNode().removeEventListener('touchstart', this.onTouchStart);
    window.removeEventListener('touchmove', this.onTouchMove);
    window.removeEventListener('touchend', this.onTouchEnd);

    // Remove mouse events
    this.getContainerNode().removeEventListener('mousedown', this.onMouseDown);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);
  }

  onMouseDown(e: MouseEvent) {
    e.preventDefault();
    this.setPointerState([e]);
  }

  onTouchStart(e: TouchEvent) {
    e.preventDefault();
    this.setPointerState(e.touches);
  }

  onMouseUp() {
    this.setPointerState();
  }

  onTouchEnd(e: TouchEvent) {
    this.setPointerState(e.touches);
  }

  onMouseMove(e: MouseEvent) {
    if (!this.startPointerInfo || this.props.disablePan) return;
    e.preventDefault();
    this.onDrag(e);
  }

  onTouchMove(e: TouchEvent) {
    if (!this.startPointerInfo) return;
    e.preventDefault();

    const { disablePan, disableZoom } = this.props;
    const isPinchAction = e.touches.length == 2 && this.startPointerInfo.pointers.length > 1;
    if (isPinchAction && !disableZoom) {
      this.scaleFromMultiTouch(e);
    } else if ((e.touches.length === 1) && this.startPointerInfo && !disablePan) {
      this.onDrag(e.touches[0]);
    }
  }

  // handles both touch and mouse drags
  onDrag = throttle(this.realOnDrag, 6.9);
  realOnDrag(pointer: MouseEvent | Touch) {
    if (!this.startPointerInfo) return;
    const { translation, pointers } = this.startPointerInfo;
    const startPointer = pointers[0];
    const dragX = pointer.clientX - startPointer.clientX;
    const dragY = pointer.clientY - startPointer.clientY;
    const newTranslation = {
      x: translation.x + dragX,
      y: translation.y + dragY
    };

    const shouldPreventTouchEndDefault = Math.abs(dragX) > 1 || Math.abs(dragY) > 1;
    this.setState({
      shouldPreventTouchEndDefault
    }, () => {
      this.props.onChange({
        scale: this.props.value.scale,
        translation: this.clampTranslation(newTranslation)
      });
    });
  }

  onWheel = throttle(this.realOnWheel, 6.9);
  realOnWheel(e: React.WheelEvent<HTMLElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (this.props.disableZoom) return;

    const scaleChange = 2 ** (e.deltaY * 0.002);
    const newScale = clamp(
      this.props.minScale,
      this.props.value.scale + (1 - scaleChange),
      this.props.maxScale
    );

    const mousePos = this.clientPosToTranslatedPos({ x: e.clientX, y: e.clientY });
    this.scaleFromPoint(newScale, mousePos);
  }

  setPointerState(pointers?: string | any[] | globalThis.TouchList) {
    if (!pointers || pointers.length === 0) {
      this.startPointerInfo = undefined;
      return;
    }

    this.startPointerInfo = {
      pointers,
      scale: this.props.value.scale,
      translation: this.props.value.translation,
    };
  }

  clampTranslation(desiredTranslation: { x: number; y: number; }, props = this.props) {
    const { x, y } = desiredTranslation;
    let { xMax, xMin, yMax, yMin } = props.translationBounds;
    xMin = xMin != undefined ? xMin : -Infinity;
    yMin = yMin != undefined ? yMin : -Infinity;
    xMax = xMax != undefined ? xMax : Infinity;
    yMax = yMax != undefined ? yMax : Infinity;

    return {
      x: clamp(xMin, x, xMax),
      y: clamp(yMin, y, yMax)
    };
  }

  translatedOrigin(translation = this.props.value.translation) {
    const clientOffset = this.getContainerBoundingClientRect();
    return {
      x: clientOffset.left + translation.x,
      y: clientOffset.top + translation.y
    };
  }

  // From a given screen point return it as a point
  // in the coordinate system of the given translation
  clientPosToTranslatedPos({ x, y }: { x: number, y: number; }, translation = this.props.value.translation) {
    const origin = this.translatedOrigin(translation);
    return {
      x: x - origin.x,
      y: y - origin.y
    };
  }

  scaleFromPoint(newScale: number, focalPt: { x: number; y: number; }) {
    const { translation, scale } = this.props.value;
    const scaleRatio = newScale / (scale != 0 ? scale : 1);

    const focalPtDelta = {
      x: coordChange(focalPt.x, scaleRatio),
      y: coordChange(focalPt.y, scaleRatio)
    };

    const newTranslation = {
      x: translation.x - focalPtDelta.x,
      y: translation.y - focalPtDelta.y
    };
    this.props.onChange({
      scale: newScale,
      translation: this.clampTranslation(newTranslation)
    });
  }

  // Given the start touches and new e.touches, scale and translate
  // such that the initial midpoint remains as the new midpoint. This is
  // to achieve the effect of keeping the content that was directly
  // in the middle of the two fingers as the focal point throughout the zoom.
  scaleFromMultiTouch(e: TouchEvent) {
    const startTouches = this.startPointerInfo.pointers;
    const newTouches = e.touches;

    // calculate new scale
    const dist0 = touchDistance(startTouches[0], startTouches[1]);
    const dist1 = touchDistance(newTouches[0], newTouches[1]);
    const scaleChange = dist1 / dist0;

    const startScale = this.startPointerInfo.scale;
    const targetScale = startScale + ((scaleChange - 1) * startScale);
    const newScale = clamp(this.props.minScale, targetScale, this.props.maxScale);

    // calculate mid points
    const startMidpoint = midpoint(touchPt(startTouches[0]), touchPt(startTouches[1]));
    const newMidPoint = midpoint(touchPt(newTouches[0]), touchPt(newTouches[1]));

    // The amount we need to translate by in order for
    // the mid point to stay in the middle (before thinking about scaling factor)
    const dragDelta = {
      x: newMidPoint.x - startMidpoint.x,
      y: newMidPoint.y - startMidpoint.y
    };
    const scaleRatio = newScale / startScale;

    // The point originally in the middle of the fingers on the initial zoom start
    const focalPt = this.clientPosToTranslatedPos(startMidpoint, this.startPointerInfo.translation);

    // The amount that the middle point has changed from this scaling
    const focalPtDelta = {
      x: coordChange(focalPt.x, scaleRatio),
      y: coordChange(focalPt.y, scaleRatio)
    };

    // Translation is the original translation, plus the amount we dragged,
    // minus what the scaling will do to the focal point. Subtracting the
    // scaling factor keeps the midpoint in the middle of the touch points.
    const newTranslation = {
      x: this.startPointerInfo.translation.x - focalPtDelta.x + dragDelta.x,
      y: this.startPointerInfo.translation.y - focalPtDelta.y + dragDelta.y
    };

    this.props.onChange({
      scale: newScale,
      translation: this.clampTranslation(newTranslation)
    });
  }

  discreteScaleStepSize = () => Math.abs(this.props.maxScale - this.props.minScale) / 10;

  // Scale using the center of the content as a focal point
  changeScale(delta: number) {
    const targetScale = this.props.value.scale + delta;
    const { minScale, maxScale } = this.props;
    const scale = clamp(minScale, targetScale, maxScale);

    const rect = this.getContainerBoundingClientRect();
    const x = rect.left + (rect.width / 2);
    const y = rect.top + (rect.height / 2);

    const focalPoint = this.clientPosToTranslatedPos({ x, y });
    this.scaleFromPoint(scale, focalPoint);
  }

  // Done like this so it is mockable
  getContainerNode = () => this.containerNode;
  getContainerBoundingClientRect = () =>
    this.getContainerNode().getBoundingClientRect();

  render() {
    const { children } = this.props;
    const scale = this.props.value.scale;
    // Defensively clamp the translation. This should not be necessary if we properly set state elsewhere.
    const translation = this.clampTranslation(this.props.value.translation);

    /*
      This is a little trick to allow the following ux: We want the parent of this
      component to decide if elements inside the map are clickable. Normally, you wouldn't
      want to trigger a click event when the user *drags* on an element (only if they click
      and then release w/o dragging at all). However we don't want to assume this
      behavior here, so we call `preventDefault` and then let the parent check
      `e.defaultPrevented`. That value being true means that we are signalling that
      a drag event ended, not a click.
    */
    const handleEventCapture = (e: { preventDefault: () => void; }) => {
      if (this.state.shouldPreventTouchEndDefault) {
        e.preventDefault();
        this.setState({ shouldPreventTouchEndDefault: false });
      }
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const childrenNodes = (children || undefined) && children({ translation, scale });
    return (
      <div
        ref={(node) => {
          this.containerNode = node;
        }}
        style={{
          height: '100%',
          width: '100%',
          position: 'relative', // for absolutely positioned children
          touchAction: 'none'
        }}
        onClickCapture={handleEventCapture}
        onTouchEndCapture={handleEventCapture}
      >
        {childrenNodes}
      </div>
    );
  }
}

/*
  Main entry point component.
  Determines if it's parent is controlling (eg it manages state) or leaving us uncontrolled
  (eg we manage our own internal state)
*/
class MapInteractionController extends Component<any, any> {
  constructor(props: any) {
    super(props);

    const controlled = MapInteractionController.isControlled(props);
    if (controlled) {
      this.state = {
        lastKnownValueFromProps: props.value
      };
    } else {
      // Set the necessary state for controlling map interaction ourselves
      this.state = {
        value: props.defaultValue || {
          scale: 1,
          translation: { x: 0, y: 0 }
        },
        lastKnownValueFromProps: undefined
      };
    }
  }

  /*
    Handle the parent switchg form controlled to uncontrolled or vice versa.
    This is at most a best-effort attempt. It is not gauranteed by our API
    but it will do its best to maintain the state such that if the parent
    accidentally switches between controlled/uncontrolled there won't be
    any jankiness or jumpiness.

    This tries to mimick how the React <input /> component behaves.
  */
  static getDerivedStateFromProps(props: any, state: { lastKnownValueFromProps: any; }): { value?: any; lastKnownValueFromProps: any; } {
    const nowControlled = MapInteractionController.isControlled(props);
    const wasControlled = state.lastKnownValueFromProps && MapInteractionController.isControlled({ value: state.lastKnownValueFromProps });

    /*
      State transitions:
        uncontrolled --> controlled   (unset internal state, set last props from parent)
        controlled   --> uncontrolled (set internal state to last props from parent)
        controlled   --> controlled   (update last props from parent)
        uncontrolled --> uncontrolled (do nothing)

      Note that the second two (no change in control) will also happen on the
      initial render because we set lastKnownValueFromProps in the constructor.
    */
    if (!wasControlled && nowControlled) {
      return {
        value: undefined,
        lastKnownValueFromProps: props.value
      };
    } else if (wasControlled && !nowControlled) {
      return {
        value: state.lastKnownValueFromProps,
        lastKnownValueFromProps: undefined
      };
    } else if (wasControlled && nowControlled) {
      return { lastKnownValueFromProps: props.value };
    } else if (!wasControlled && !nowControlled) {
      return null;
    }
  }

  static isControlled = (props: any) =>
    // Similar to React's <input /> API, setting a value declares
    // that you want to control this component.
    props.value != undefined;

  // The subset of this component's props that need to be passed
  // down to the core RMI component
  innerProps() {
    const { value, defaultValue, onChange, ...innerProps } = this.props;
    return innerProps;
  }

  getValue = () => MapInteractionController.isControlled(this.props)
    ? this.props.value
    : this.state.value;

  render() {
    const controlled = MapInteractionController.isControlled(this.props);
    const value = controlled ? this.props.value : this.state.value;
    return (
      <MapInteractionControlled
        onChange={(value: any) => {
          controlled ? this.props.onChange(value) : this.setState({ value });
        }}
        value={value}
        {...this.innerProps()}
      >
        {this.props.children}
      </MapInteractionControlled>
    );
  }
}

/*
  This component provides a map like interaction to any content that you place in it. It will let
  the user zoom and pan the children by scaling and translating props.children using css.
*/
const MapInteractionCSS = (props: any) => {
  return (
    <MapInteractionController {...props}>
      {
        ({ translation, scale }: any) => {
          // Translate first and then scale.  Otherwise, the scale would affect the translation.
          const transform = `translate(${translation.x}px, ${translation.y}px) scale(${scale})`;
          return (
            <div style={{
              height: '100%',
              width: '100%',
              position: 'relative', // for absolutely positioned children
              overflow: 'hidden',
              touchAction: 'none', // Not supported in Safari :(
              msTouchAction: 'none',
              cursor: 'all-scroll',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none'
            }}>
              <div style={{
                display: 'inline-block', // size to content
                transform: transform,
                transformOrigin: '0 0 '
              }}>
                {props.children}
              </div>
            </div>
          );
        }
      }
    </MapInteractionController>
  );
};

export default MapInteractionCSS;
