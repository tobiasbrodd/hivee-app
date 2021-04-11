import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import styled from 'styled-components';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Content from './components/content/Content';

function App() {
    return (
        <AppContainer>
            <CssBaseline />
            <Helmet>
                <title>Hivee</title>
                <meta name="description" content="Hivee Smart Home" />
            </Helmet>
            <Header />
            <Sidebar />
            <Content />
        </AppContainer>
    );
}

const AppContainer = styled.div`
    display: flex;
    min-height: 100vh;
    overflow: hidden;
    min-width: 320;
`;

export default App;
