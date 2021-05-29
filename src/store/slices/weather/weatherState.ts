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
    clouds: {
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
        sunrise?: number,
        sunset?: number,
        uv?: bigint,
    }
}

export default interface WeatherState {
    weather: Weather,
    source?: string,
    timestamp?: number,
}