import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useAppSelector } from '../../../store/hooks';

function AirCard() {
    const { weather } = useAppSelector(state => state.weather);
    const temperature = weather.air.temperature.value?.toFixed(1);
    const humidity = weather.air.humidity?.toFixed(1);
    const pressure = weather.air.pressure?.toFixed(1);

    return (
        <Container>
            <CardContainer>
                <Title variant="h2">Air</Title>
                <CardContent>
                    {temperature !== undefined  && <Value variant="h3">{temperature}°C</Value>}
                    {humidity !== undefined  && <Value variant="h3">{humidity}%</Value>}
                    {pressure !== undefined  && <Value variant="h3">{pressure} hPa</Value>}
                </CardContent>
            </CardContainer>
        </Container>
    );
}

const Container = styled(Paper)`
    min-width: 250px;
    max-width: 500px;
    height: 200px;
    flex: 1 1 0;
    background-size: cover;
    background-position: center;
    margin: 10px;
    border: 1px solid rgba(255, 255, 255, 0.12);
`;

const CardContainer = styled('div')`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 10px 5%;
    justify-content: start;
    align-items: center;
`;

const CardContent = styled('div')`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const Title = styled(Typography)`
    text-align: center;
    margin-bottom: 5px;
`;

const Value = styled(Typography)`
    margin-bottom: 5px;
`;

export default AirCard;