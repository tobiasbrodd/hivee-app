import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import Sensors from '../pages/sensors/Sensors';
import Settings from '../pages/settings/Settings';
import NotFound from '../pages/notfound/NotFound';
import Weather from '../pages/weather/Weather';

export default function Router() {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/sensors" component={Sensors} />
            <Route path="/weather" component={Weather} />
            <Route path="/settings" component={Settings} />
            <Route component={NotFound} />
        </Switch>
    );
}