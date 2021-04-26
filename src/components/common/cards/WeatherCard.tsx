import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { useAppSelector } from '../../../store/hooks';

function WeatherCard() {
    const { weather } = useAppSelector(state => state.weather);
    const { location } = useAppSelector(state => state.location);
    const city = location.city ?? "-";
    const temperature = weather.air.temperature.value ?? "-";
    const description = weather.description ?? "-";

    return (
        <Container>
            <CardContainer>
                <Title variant="h2">{city}</Title>
                <Title variant="h3">{description}</Title>
                <Content>
                    <TempContainer>
                        <Temp variant="h1">{temperature}</Temp>
                        <Symbol variant="h3">{"°"}</Symbol>
                    </TempContainer>
                </Content>
            </CardContainer>
        </Container>
    );
}

const Container = styled(Paper)`
    min-width: 200px;
    max-width: 300px;
    height: 200px;
    flex: 1 1 0;
    background-size: cover;
    background-position: center;
    margin: 10px;
    border: 1px solid rgba(255, 255, 255, 0.12);
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    // align-items: left;
    width: 100%;
    height: 100%;
    padding: 10px 5%;
    background-color: transparent;
    cursor: pointer;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const TempContainer = styled.div`
    display: flex;
    flex-direction: row;
    text-align: right;
`;

const Title = styled(Typography)`
    text-align: center;
    margin-bottom: 5px;
`;

const Temp = styled(Typography)`
    margin-bottom: 5px;
`;

const Symbol = styled(Typography)`
    margin-bottom: 5px;
`;

export default WeatherCard;