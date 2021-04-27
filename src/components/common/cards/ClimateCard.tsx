import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { useAppSelector } from '../../../store/hooks';

function ClimateCard() {
    const { climate } = useAppSelector(state => state.climate);
    const temperature = climate.temperature?.toFixed(1) ?? "-";
    const source = climate.source ?? "-";
    const timestamp = climate.timestamp ?? 0;
    const date = new Date(timestamp * 1000);

    return (
        <Container>
            <CardContainer>
                <Title variant="h4">{source}</Title>
                <ClimateContainer>
                    <Value variant="h1">{temperature}</Value>
                    <Symbol variant="h3">{"°"}</Symbol>
                </ClimateContainer>
                <Footer>{date.toLocaleString("sv")}</Footer>
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

const ClimateContainer = styled.div`
    display: flex;
    flex-direction: row;
    text-align: right;
`;

const Title = styled(Typography)`
    text-align: center;
    margin-bottom: 5px;
`;

const Value = styled(Typography)`
    margin-bottom: 5px;
`;

const Symbol = styled(Typography)`
    margin-bottom: 5px;
`;

const Footer = styled(Typography)`
    text-align: center;
    margin-bottom: 5px;
`;

export default ClimateCard;