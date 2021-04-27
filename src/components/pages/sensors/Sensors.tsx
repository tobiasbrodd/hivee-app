import { Helmet } from 'react-helmet';
import ScrollToTop from '../../common/scroll/Scroll';
import { setTitle } from '../../../store/slices/title/titleSlice';
import { useAppDispatch } from '../../../store/hooks';
import { useEffect } from 'react';
import styled from 'styled-components';
import ClimateCard from '../../common/cards/ClimateCard';

const title = "Sensors";

const helmet = {
    title: "Hivee - Sensors",
    description: "Hivee sensors."
};

export default function Sensors() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setTitle(title));
    }, [dispatch]);

    return (
        <div>
            <Helmet>
                <title>{helmet.title}</title>
                <meta name="description" content={helmet.description} />
            </Helmet>
            <SensorContainer>
                <ClimateCard />
            </SensorContainer>
            <ScrollToTop />
        </div>
    );
}

const SensorContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    width: 100%;
`;