export interface MeasureState {
    value: number,
    location: string,
    timestamp: number,
}

export interface ContactState {
    value: boolean,
    location: string,
    timestamp: number,
}

export default interface SensorsState {
    temperature: {[key: string]: MeasureState},
    pressure: {[key: string]: MeasureState},
    humidity: {[key: string]: MeasureState},
    contact: {[key: string]: ContactState},
}