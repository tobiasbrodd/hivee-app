import axios from 'axios';
import { Location } from '../../store/slices/location/locationState';
import { Weather } from '../../store/slices/weather/weatherState';
import { WeatherReponse, GeoResponse } from './openWeatherResponse';

export default class OpenWeather {
    static WEATHER_API = "https://api.openweathermap.org/data/2.5";
    static GEO_API = "https://api.openweathermap.org/geo/1.0";

    static getWeather(apiKey: string, latitude: number, longitude: number) {
        return this.fetchWeatherData(apiKey, latitude, longitude)
            .then(this.mapWeatherData);
    }

    static fetchWeatherData(apiKey: string, latitude: number, longitude: number) {
        return axios.get<WeatherReponse>(this.WEATHER_API + "/weather", {
            params: {
                appid: apiKey,
                lat: latitude.toFixed(4),
                lon: longitude.toFixed(4),
                units: "metric"
            }
        }).then(response => {
            return response.data;
        });
    }

    static mapWeatherData(data: WeatherReponse): Weather {
        console.log(data);

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
            cloud: {
                value: data.clouds.all
            },
            precipitation: {},
            sun: {
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset
            }
        };
    }

    static getLocation(apiKey: string, latitude: number, longitude: number) {
        return this.fetchLocationData(apiKey, latitude, longitude)
            .then(this.mapLocationData);
    }

    static fetchLocationData(apiKey: string, latitude: number, longitude: number) {
        return axios.get<GeoResponse[]>(this.GEO_API + "/reverse", {
            params: {
                appid: apiKey,
                lat: latitude.toFixed(4),
                lon: longitude.toFixed(4)
            }
        }).then(response => {
            return response.data;
        });
    }

    static mapLocationData(data: GeoResponse[]): Location {
        console.log(data);

        return {
            city: data[0].name,
            country: data[0].country
        };
    }
}