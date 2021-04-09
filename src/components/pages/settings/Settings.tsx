import { Helmet } from 'react-helmet';
import ScrollToTop from '../../common/scroll/Scroll';
import { setTitle } from '../../../store/reducers';
import { useAppDispatch } from '../../../store/hooks';

const title = "Settings";

const helmet = {
    title: "Hivee - Settings",
    description: "Hivee settings."
};

export default function Settings() {
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