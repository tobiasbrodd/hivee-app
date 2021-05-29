import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { useAppSelector } from '../../../store/hooks';

function PrecipitationCard() {
    const { weather } = useAppSelector(state => state.weather);
    const rain = weather.precipitation.rain;
    const snow = weather.precipitation.snow;
    let total = weather.precipitation.total;
    if (!total) {
        total = (rain ?? 0) + (snow ?? 0);
    }
    const risk = weather.precipitation.risk;
    const thunder = weather.precipitation.thunder;

    return (
        <Container>
            <CardContainer>
                <Title variant="h2">Precipitation</Title>
                <CardContent>
                    <Value variant="h3">{total} mm</Value>
                    {rain !== undefined && <Value variant="h3">{rain} mm</Value>}
                    {snow !== undefined && <Value variant="h3">{snow} mm</Value>}
                    {risk !== undefined && <Value variant="h3">{risk}%</Value>}
                    {thunder !== undefined && <Value variant="h3">{thunder}</Value>}
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

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 10px 5%;
    justify-content: start;
    align-items: center;
`;

const CardContent = styled.div`
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

export default PrecipitationCard;