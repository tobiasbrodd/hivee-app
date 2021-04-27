export interface Climate {
    temperature?: number,
    pressure?: number,
    humidity?: number,
    source?: string,
    timestamp?: number,
}

export default interface ClimateState {
    climate: Climate,
}