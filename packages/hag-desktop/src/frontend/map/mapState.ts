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
        insertbatch: (data: { key: T, value: Y; }[]) => {
            setState((oldState) =>
                data.reduce((prev, { key, value }) =>
                    prev.set(key, value), new Map(oldState)));
        },
        deletebatch: (data: T[]) => {
            setState((oldState) =>
                data.reduce((prev, key) => {
                    prev.delete(key);
                    return prev;
                }, new Map(oldState)));
        },
        clear: () => {
            setState((prev) => {
                prev.clear();
                return new Map();
            });
        },
    };
}
