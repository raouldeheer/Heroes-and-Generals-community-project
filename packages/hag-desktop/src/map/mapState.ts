import React from "react";

export function useMap<T, Y>(from?: Map<T, Y>) {
    const [state, setState] = React.useState(new Map<T, Y>(from));

    return {
        state,
        setState,
        insert: (key: T, value: Y) => {
            setState((prev) => new Map(prev).set(key, value));
        },
        delete: (key: T) => {
            setState((prev) => {
                const newState = new Map(prev);
                newState.delete(key);
                return newState;
            });
        },
        clear: () => {
            setState((prev) => {
                prev.clear();
                return new Map();
            });
        },
    };
}
