import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import { setTitle } from '../../../store/slices/title/titleSlice';
import { useAppDispatch } from '../../../store/hooks';
import ScrollToTop from '../../common/scroll/Scroll';
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

const SensorContainer = styled('div')`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    width: 100%;
`;