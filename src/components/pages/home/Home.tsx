import { Helmet } from 'react-helmet';
import ScrollToTop from '../../common/scroll/Scroll';
import { setTitle } from '../../../store/slices/title/titleSlice';
import { useAppDispatch } from '../../../store/hooks';
import { useEffect } from 'react';
import WeatherCard from '../../common/cards/WeatherCard';
import styled from 'styled-components';
import ClimateCard from '../../common/cards/ClimateCard';

const title = "Home";

const helmet = {
    title: "Hivee - Home",
    description: "Hivee home."
};

export default function Home() {
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
            <Container>
                <WeatherCard />
                <ClimateCard />
            </Container>
            <ScrollToTop />
        </div>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    width: 100%;
`;