export interface Weather {
    description?: string,
    air: {
        temperature: {
            min?: number,
            max?: number,
            value?: number,
        },
        pressure?: number,
        humidity?: number,
    },
    wind: {
        speed?: number,
        direction?: number,
        gust?: number,
    },
    cloud: {
        min?: number,
        max?: number,
        value?: number,
    },
    precipitation: {
        rain?: number,
        snow?: number,
        total?: number,
        risk?: number,
        thunder?: number,
    },
    sun: {
        sunrise?: bigint,
        sunset?: bigint,
        uv?: bigint,
    }
}

export default interface WeatherState {
    weather: Weather,
    source?: string,
    timestamp?: number,
}