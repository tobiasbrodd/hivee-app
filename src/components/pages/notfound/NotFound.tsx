import { Helmet } from 'react-helmet';
import ScrollToTop from '../../common/scroll/Scroll';
import { setTitle } from '../../../store/titleSlice';
import { useAppDispatch } from '../../../store/hooks';
import { useEffect } from 'react';

const title = "Page not found";

const helmet = {
    title: "Hivee - 404",
    description: "Page not found."
};

export default function NotFound() {
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
            <ScrollToTop />
        </div>
    );
}