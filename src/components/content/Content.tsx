import { styled } from '@mui/material/styles';
import Routes from './Routes'

function Content() {
    return (
        <MainContent>
            <Routes />
        </MainContent>
    );
}

const MainContent = styled('main')`
    flex-grow: 1;
    padding: 100px 32px 8px 32px;
`;

export default Content;