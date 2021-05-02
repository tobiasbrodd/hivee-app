import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { useAppSelector } from '../../../store/hooks';

function ClimateCard() {
    const { temperature } = useAppSelector(state => state.climate);
    const value = temperature?.value?.toFixed(1) ?? "-";
    const location = temperature?.location ?? "-";
    const timestamp = temperature?.timestamp ?? 0;
    const date = new Date(timestamp * 1000);

    return (
        <Container>
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
                        {date.toLocaleString("sv")}
                    </FooterItem>
                </Footer>
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
    width: 100%;
    height: 100%;
    padding: 10px 5%;
    background-color: transparent;
    cursor: pointer;
    justify-content: space-between;
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

const Footer = styled.div`
`;

const FooterItem = styled(Typography)`
    text-align: center;
    margin-bottom: 5px;
`;

export default ClimateCard;