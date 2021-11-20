import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { setTitle } from '../../../store/slices/title/titleSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import ScrollToTop from '../../common/scroll/Scroll';
import AirCard from '../../common/cards/AirCard';
import WindCard from '../../common/cards/WindCard';
import CloudCard from '../../common/cards/CloudsCard';
import PrecipitationCard from '../../common/cards/Precipitation';
import SunCard from '../../common/cards/SunCard';

const title = "Weather Info";

const helmet = {
    title: "Hivee - Weather Info",
    description: "Hivee weather info."
};

export default function WeatherInfo() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setTitle(title));
    }, [dispatch]);

    const { location } = useAppSelector(state => state.location);
    const city = location.city ?? "-";

    return (
        <div>
            <Helmet>
                <title>{helmet.title}</title>
                <meta name="description" content={helmet.description} />
            </Helmet>
            <Container>
                <Title variant="h1">{city}</Title>
                <CardContainer>
                    <AirCard />
                    <WindCard />
                    <CloudCard />
                    <PrecipitationCard />
                    <SunCard />
                </CardContainer>
            </Container>
            <ScrollToTop />
        </div>
    );
}

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;
    flex-grow: 1;
`;

const CardContainer = styled('div')`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    width: 100%;
`;

const Title = styled(Typography)`
    text-align: center;
    margin-bottom: 5px;
`;