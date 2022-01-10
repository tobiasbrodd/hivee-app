import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useAppSelector } from '../../../store/hooks';

interface CardProps {
    location: string
}

function HumidityCard({ location }: CardProps) {
    const { humidity } = useAppSelector(state => state.sensors);
    const value = humidity[location]?.value?.toFixed(1) ?? "-";

    return (
        <Container>
            <CardContainer>
                <Title variant="h2">Humidity</Title>
                <CardContent>
                    <Value variant="h3">{value}%</Value>
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

export default HumidityCard;