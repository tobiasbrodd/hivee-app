import { Helmet } from 'react-helmet';
import ScrollToTop from '../../common/scroll/Scroll';
import { setTitle } from '../../../store/slices/title/titleSlice';
import { useAppDispatch } from '../../../store/hooks';
import { useEffect } from 'react';
import WeatherCard from '../../common/cards/WeatherCard';
import styled from 'styled-components';

const title = "Weather";

const helmet = {
    title: "Hivee - Weather",
    description: "Hivee weather."
};

export default function Weather() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setTitle(title));
    }, [dispatch]);

    return (
        <div>
            <Helmet>
                <title>{helmet.title}</title>
                <meta name="description" content={helmet.description} />
            </Helmet>
            <WeatherContainer>
                <WeatherCard />
            </WeatherContainer>
            <ScrollToTop />
        </div>
    );
}

const WeatherContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    width: 100%;
`;