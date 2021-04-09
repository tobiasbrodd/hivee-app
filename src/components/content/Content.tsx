import styled from 'styled-components';
import Routes from './Routes'

function Content() {
    return (
        <MainContent>
            <Toolbar />
            <Routes />
        </MainContent>
    );
}

const MainContent = styled.main`
    flex-grow: 1;
    padding: 32px;
`;

const Toolbar = styled.div`
    min-height: 75px;
`;

export default Content;