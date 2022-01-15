import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';

interface CardProps {
    location: string
}

function MeasureCard({ location }: CardProps) {
    const navigate = useNavigate();
    const { temperature } = useAppSelector(state => state.sensors);
    console.log(temperature);
    const value = temperature[location]?.value?.toFixed(1) ?? "-";
    const timestamp = temperature[location]?.timestamp ?? 0;
    let date = new Date(timestamp * 1000).toLocaleString("sv");
    if (timestamp <= 0) {
        date = "-";
    }

    const handleClick = () => {
        navigate("/measure/" + location);
    }

    return (
        <Container onClick={handleClick}>
            <CardContainer>
                <Title variant="h4">Temperature</Title>
                <TempContainer>
                    <Temp variant="h1">{value}</Temp>
                    <Symbol variant="h3">{"°"}</Symbol>
                </TempContainer>
                <Footer>
                    <FooterItem>
                        {location}
                    </FooterItem>
                    <FooterItem>
                        {date}
                    </FooterItem>
                </Footer>
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
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
`;

const TempContainer = styled('div')`
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

const Footer = styled('div')``;

const FooterItem = styled(Typography)`
    text-align: center;
    margin-bottom: 5px;
`;

export default MeasureCard;