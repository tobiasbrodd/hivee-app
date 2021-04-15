export interface Location {
    country?: string,
    city?: string,
}

export interface Coordinates {
    altitude?: number,
    latitude?: number,
    longitude?: number,
}

export default interface LocationState {
    location: Location,
    coordinates: Coordinates,
}