export interface ClimateValue {
    value?: number,
    location?: string,
    timestamp?: number,
}

export default interface ClimateState {
    temperature?: ClimateValue,
    pressure?: ClimateValue,
    humidity?: ClimateValue,
}