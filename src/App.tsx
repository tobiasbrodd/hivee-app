import { Dispatch, SetStateAction, useState } from 'react';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import styled from 'styled-components';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Content from './components/content/Content';

interface AppProps {
    darkMode: boolean
    setDarkMode: Dispatch<SetStateAction<any>>
}

function App({ darkMode, setDarkMode }: AppProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <AppContainer>
            <CssBaseline />
            <Helmet>
                <title>Hivee</title>
                <meta name="description" content="Hivee Smart Home" />
            </Helmet>
            <Header
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <Sidebar
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
            />
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
