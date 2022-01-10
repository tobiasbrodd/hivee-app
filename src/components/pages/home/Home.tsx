import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import ScrollToTop from '../../common/scroll/Scroll';
import { setTitle } from '../../../store/slices/title/titleSlice';
import { useAppDispatch } from '../../../store/hooks';
import WeatherCard from '../../common/cards/WeatherCard';
import ClimateCard from '../../common/cards/ClimateCard';
import DoorCard from '../../common/cards/DoorCard';

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
                <ClimateCard location="Indoor" />
                <ClimateCard location="Extra" />
                <DoorCard location="Door" />
            </Container>
            <ScrollToTop />
        </div>
    );
}

const Container = styled('div')`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    width: 100%;
`;