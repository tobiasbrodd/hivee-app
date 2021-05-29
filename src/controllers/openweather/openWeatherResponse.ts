export interface WeatherReponse {
    base: string
    clouds: {
        all: number
    },
    coord: {
        lat: number,
        lon: number,
    },
    dt: bigint,
    id: bigint,
    main: {
        feels_like: number,
        humidity: number,
        pressure: number,
        temp: number,
        temp_max: number,
        temp_min: number
    },
    name: string,
    sys: {
        country: string,
        sunrise: number,
        sunset: number,
    },
    timezone: bigint,
    visibility: number,
    weather: [{
        description: string,
        icon: string,
        id: bigint,
        main: string
    }],
    wind: {
        deg: number,
        speed: number,
        gust?: number
    },
    rain?: {
        "1h"?: number,
        "3h"?: number
    },
    snow?: {
        "1h"?: number,
        "3h"?: number
    }
}

export interface GeoResponse {
    name: string,
    country: string
}