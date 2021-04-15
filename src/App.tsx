import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Content from './components/content/Content';
import { fetchWeather } from './store/slices/weather/weatherSlice';
import { fetchCoordinates, fetchLocation } from './store/slices/location/locationSlice';
import { useAppDispatch } from './store/hooks';
import { useEffect } from 'react';

function App() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchCoordinates()).then(() => {
            dispatch(fetchLocation());
            dispatch(fetchWeather());
        });
    }, [dispatch]);

    return (
        <AppContainer>
            <Helmet>
                <title>Hivee</title>
                <meta name="description" content="Hivee Smart Home" />
            </Helmet>
            <Header />
            <Sidebar />
            <Content />
        </AppContainer>
    );
}

const AppContainer = styled.div`
    display: flex;
    min-height: 100vh;
    overflow: hidden;
    min-width: 320;
`;

export default App;
