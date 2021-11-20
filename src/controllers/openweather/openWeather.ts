import axios from 'axios';
import { Location } from '../../store/slices/location/locationState';
import { Weather } from '../../store/slices/weather/weatherState';
import { WeatherReponse, GeoResponse } from './openWeatherResponse';

const capitalize = (text?: string) => {
    if (!text) {
        return undefined;
    }

    return text.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
};

export default class OpenWeather {
    static WEATHER_API = "https://api.openweathermap.org/data/2.5";
    static GEO_API = "https://api.openweathermap.org/geo/1.0";

    static async getWeather(apiKey: string, latitude: number, longitude: number) {
        const data = await this.fetchWeatherData(apiKey, latitude, longitude);
        return this.mapWeatherData(data);
    }

    static async fetchWeatherData(apiKey: string, latitude: number, longitude: number) {
        const response = await axios.get<WeatherReponse>(this.WEATHER_API + "/weather", {
            params: {
                appid: apiKey,
                lat: latitude.toFixed(4),
                lon: longitude.toFixed(4),
                units: "metric"
            }
        });
        return response.data;
    }

    static mapWeatherData(data: WeatherReponse): Weather {
        return {
            air: {
                temperature: {
                    min: data.main.temp_min,
                    max: data.main.temp_max,
                    value: data.main.temp
                }
            },
            wind: {
                speed: data.wind.speed,
                direction: data.wind.deg,
            },
            clouds: {
                value: data.clouds.all
            },
            precipitation: {
                rain: (data.rain ? data.rain['1h'] : undefined),
                snow: (data.snow ? data.snow['1h'] : undefined)
            },
            sun: {
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset
            },
            description: capitalize(data.weather[0].description),
        };
    }

    static async getLocation(apiKey: string, latitude: number, longitude: number) {
        const data = await this.fetchLocationData(apiKey, latitude, longitude);
        return this.mapLocationData(data);
    }

    static async fetchLocationData(apiKey: string, latitude: number, longitude: number) {
        const response = await axios.get<GeoResponse[]>(this.GEO_API + "/reverse", {
            params: {
                appid: apiKey,
                lat: latitude.toFixed(4),
                lon: longitude.toFixed(4)
            }
        });
        return response.data;
    }

    static mapLocationData(data: GeoResponse[]): Location {
        return {
            city: data[0].name,
            country: data[0].country
        };
    }
}