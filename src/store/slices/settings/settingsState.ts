export interface WeatherSettingsState {
    openWeather: {
        apiKey?: string
    },
    source?: string
}

export default interface SettingsState {
    weather: WeatherSettingsState
}