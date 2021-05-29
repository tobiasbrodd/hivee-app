import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import styled from 'styled-components';
import { useAppSelector } from '../../../store/hooks';

function SunCard() {
    const getTime = (t: number | undefined) => {
        if (!t) {
            return t;
        }

        const ii = (i: number) => {
            var s = i + "";
            while (s.length < 2) s = "0" + s;
            return s
        }

        const d = new Date(t * 1000)
        return `${ii(d.getHours())}:${ii(d.getMinutes())}`
    }

    const { weather } = useAppSelector(state => state.weather);
    const uv = weather.sun.uv;
    const sunrise = getTime(weather.sun.sunrise);
    const sunset = getTime(weather.sun.sunset);

    return (
        <Container>
            <CardContainer>
                <Title variant="h2">Sun</Title>
                <CardContent>
                    {uv !== undefined && <Value variant="h3">{uv}</Value>}
                    {sunrise !== undefined && <IconContainer><WbSunnyIcon /><Value variant="h3">{sunrise}</Value></IconContainer>}
                    {sunset !== undefined && <IconContainer><NightsStayIcon /><Value variant="h3">{sunset}</Value></IconContainer>}
                </CardContent>
            </CardContainer>
        </Container >
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
    margin-left: 8px;
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;

export default SunCard;