import { Component } from "react";
import { Circle, Text } from 'react-konva';
import { WarmapEventHandler } from "../warmapEventHandler";
import { Battlefield, battlefieldstatus } from "./mapInterfaces";

interface BattlefieldProps {
    battlefield: Battlefield;
    warmapEventHandler: WarmapEventHandler;
}

interface BattlefieldState {
    battleId: string;
    battlefieldstatusId: string;
}

export default class BattlefieldPoint extends Component<BattlefieldProps, BattlefieldState> {
    state: Readonly<BattlefieldState> = {
        battleId: null,
        battlefieldstatusId: null,
    };
    warmapEventHandler: WarmapEventHandler;
    readonly pointSize = 15;

    constructor(props: BattlefieldProps) {
        super(props);
        this.warmapEventHandler = props.warmapEventHandler;
    }

    statusCallback = (data: string) => {
        this.setState(state => ({ ...state, battlefieldstatusId: data }));
        this.warmapEventHandler.once(`battlefieldstatusdelete${data}`, () => {
            this.setState(state => ({ ...state, battlefieldstatusId: null }));
        });
    };

    battleCallback = (data: string) => {
        this.setState(state => ({ ...state, battleId: data }));
        this.warmapEventHandler.once(`battledelete${data}`, () => {
            this.setState(state => ({ ...state, battleId: null }));
        });
    };

    componentDidMount(): void {
        this.warmapEventHandler.on(`battlefield${this.props.battlefield.id}`, this.statusCallback);
        this.warmapEventHandler.on(`battlesetmapEntityId${this.props.battlefield.id}`, this.battleCallback);
    }

    componentWillUnmount(): void {
        this.warmapEventHandler.removeListener(`battlefield${this.props.battlefield.id}`, this.statusCallback);
        this.warmapEventHandler.removeListener(`battlesetmapEntityId${this.props.battlefield.id}`, this.battleCallback);
    }

    clicked = () => {
        if (this.state.battleId)
            this.warmapEventHandler.emit("BattlefieldInfoPopup_Show", this.state.battleId);
    };

    render() {
        const status = this.warmapEventHandler.datastore
            .GetData<battlefieldstatus>("battlefieldstatus", this.state.battlefieldstatusId);
        let color = "#888";
        if (this.state.battlefieldstatusId && status)
            color = this.warmapEventHandler.lookupFactions
                .get(status.factionid)?.color;

        const battle = this.warmapEventHandler.GetBattle(this.state.battleId);

        return <>
            <Circle
                x={this.props.battlefield.posx}
                y={this.props.battlefield.posy}
                radius={this.pointSize}
                stroke={battle ? "orange" : "black"}
                strokeWidth={2}
                fill={color}
                onClick={this.clicked}
                transformsEnabled={"position"}
            />
            <Text
                text={this.props.battlefield.bftitle}
                x={this.props.battlefield.posx}
                y={this.props.battlefield.posy + this.pointSize}
                listening={false}
                transformsEnabled={"position"}
            />
        </>;
    }
}
