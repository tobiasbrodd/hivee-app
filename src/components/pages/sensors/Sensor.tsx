import { Helmet } from 'react-helmet';
import Typography from '@material-ui/core/Typography';
import ScrollToTop from '../../common/scroll/Scroll';
import { setTitle } from '../../../store/slices/title/titleSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import TemperatureCard from '../../common/cards/TemperatureCard';
import { useEffect } from 'react';
import styled from 'styled-components';
import HumidityCard from '../../common/cards/HumidityCard';
import PressureCard from '../../common/cards/PressureCard';

const title = "Sensor";

const helmet = {
    title: "Hivee - Sensor",
    description: "Hivee sensor."
};

export default function Sensor() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setTitle(title));
    }, [dispatch]);

    const { temperature } = useAppSelector(state => state.climate);
    const location = temperature?.location ?? "-";

    return (
        <div>
            <Helmet>
                <title>{helmet.title}</title>
                <meta name="description" content={helmet.description} />
            </Helmet>
            <Container>
                <Title variant="h1">{location}</Title>
                <CardContainer>
                    <TemperatureCard />
                    <HumidityCard />
                    <PressureCard />
                </CardContainer>
            </Container>
            <ScrollToTop />
        </div>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;
    flex-grow: 1;
`;

const CardContainer = styled.div`
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