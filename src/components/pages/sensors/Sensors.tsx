import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import { setTitle } from '../../../store/slices/title/titleSlice';
import { useAppDispatch } from '../../../store/hooks';
import ScrollToTop from '../../common/scroll/Scroll';
import MeasureCard from '../../common/cards/MeasureCard';
import DoorCard from '../../common/cards/DoorCard';

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
                <MeasureCard location="Indoor" />
                <MeasureCard location="Extra" />
                <DoorCard location="Door" />
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