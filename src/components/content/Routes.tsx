import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Sensors from '../pages/sensors/Sensors';
import Measure from '../pages/sensors/Measure';
import Door from '../pages/sensors/Door';
import Settings from '../pages/settings/Settings';
import NotFound from '../pages/notfound/NotFound';
import Weather from '../pages/weather/Weather';
import WeatherInfo from '../pages/weather/WeatherInfo';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/measure/:location" element={<Measure />} />
            <Route path="/door/:location" element={<Door />} />
            <Route path="/sensors" element={<Sensors />} />
            <Route path="/weather/info" element={<WeatherInfo />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/settings" element={<Settings />} />
            <Route element={<NotFound />} />
        </Routes>
    );
}