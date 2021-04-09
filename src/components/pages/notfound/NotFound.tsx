import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import ScrollToTop from '../../common/scroll/Scroll';

const title = "Page not found";

const helmet = {
    title: "Hivee - 404",
    description: "Page not found."
};

export default function NotFound() {
    return (
        <div>
            <Helmet>
                <title>{helmet.title}</title>
                <meta name="description" content={helmet.description} />
            </Helmet>
            <Title>{title}</Title>
            <ScrollToTop />
        </div>
    );
}

const Title = styled.h1`
    text-align: left;
    margin-top: 16px;
    margin-bottom: 16px;
`;