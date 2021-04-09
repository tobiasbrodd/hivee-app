import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import ScrollToTop from '../../common/scroll/Scroll';

const title = "Settings";

const helmet = {
    title: "Hivee - Settings",
    description: "Hivee settings."
};

export default function Settings() {
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