import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ScrollToTop from '../../common/scroll/Scroll';
import { setTitle } from '../../../store/slices/title/titleSlice';
import { useAppDispatch } from '../../../store/hooks';
import TemperatureCard from '../../common/cards/TemperatureCard';
import HumidityCard from '../../common/cards/HumidityCard';
import PressureCard from '../../common/cards/PressureCard';

const title = "Sensor";

const helmet = {
    title: "Hivee - Measure",
    description: "Hivee measure."
};

export default function Measure() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setTitle(title));
    }, [dispatch]);

    const params = useParams();
    const location = params["location"] ?? "";;

    return (
        <div>
            <Helmet>
                <title>{helmet.title}</title>
                <meta name="description" content={helmet.description} />
            </Helmet>
            <Container>
                <Title variant="h1">{location}</Title>
                <CardContainer>
                    <TemperatureCard location={location} />
                    <HumidityCard location={location} />
                    <PressureCard location={location} />
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