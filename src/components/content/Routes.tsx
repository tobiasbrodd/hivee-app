import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Sensors from '../pages/sensors/Sensors';
import Sensor from '../pages/sensors/Sensor';
import Settings from '../pages/settings/Settings';
import NotFound from '../pages/notfound/NotFound';
import Weather from '../pages/weather/Weather';
import WeatherInfo from '../pages/weather/WeatherInfo';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sensor/:location" element={<Sensor />} />
            <Route path="/sensors" element={<Sensors />} />
            <Route path="/weather/info" element={<WeatherInfo />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/settings" element={<Settings />} />
            <Route element={<NotFound />} />
        </Routes>
    );
}