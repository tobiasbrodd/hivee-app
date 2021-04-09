import { Helmet } from 'react-helmet';
import ScrollToTop from '../../common/scroll/Scroll';
import { setTitle } from '../../../store/reducers';
import { useAppDispatch } from '../../../store/hooks';

const title = "Sensors";

const helmet = {
    title: "Hivee - Sensors",
    description: "Hivee sensors."
};

export default function Sensors() {
    const dispatch = useAppDispatch();
    dispatch(setTitle(title));

    return (
        <div>
            <Helmet>
                <title>{helmet.title}</title>
                <meta name="description" content={helmet.description} />
            </Helmet>
            <ScrollToTop />
        </div>
    );
}