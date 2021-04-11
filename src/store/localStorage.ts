import { StorageState } from "./store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) {
            throw new Error("No local storage state found!");
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
}

export const saveState = (state: StorageState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch (error) {}
}