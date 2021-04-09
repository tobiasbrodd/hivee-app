import { Dispatch, SetStateAction } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components';
import { useTheme, Theme } from '@material-ui/core/styles';
import { useAppSelector } from '../../store/hooks';

interface ThemeProps {
    theme: Theme
}

interface HeaderProps {
    mobileOpen: boolean
    setMobileOpen: Dispatch<SetStateAction<any>>
    darkMode: boolean
    setDarkMode: Dispatch<SetStateAction<any>>
}

function Header({ mobileOpen, setMobileOpen, darkMode, setDarkMode }: HeaderProps) {
    const title = useAppSelector(state => state.title);
    const theme = useTheme();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <StyledAppBar position="fixed" color="inherit" theme={theme}>
            <StyledToolbar>
                <MenuButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    theme={theme}
                >
                    <MenuIcon />
                </MenuButton>
                <Title>{title.value}</Title>
                <ThemeToggle onClick={toggleDarkMode}>
                    {darkMode ? <WbSunnyIcon /> : <NightsStayIcon />}
                </ThemeToggle>
            </StyledToolbar>
        </StyledAppBar>
    );
}

const StyledAppBar = styled(AppBar)`
    height: 75px;
    box-shadow: none;
    ${(props: ThemeProps) => props.theme.breakpoints.up("sm")} {
        width: calc(100% - 240px);
        margin-left: 240px;
    }
`;

const StyledToolbar = styled(Toolbar)`
    height: 75px;
`;

const MenuButton = styled(IconButton)`
    ${(props: ThemeProps) => props.theme.breakpoints.up("sm")} {
        display: none;
    }
`;

const Title = styled.h1`
    text-align: left;
    margin-top: 16px;
    margin-bottom: 16px;
    flex-grow: 1;
`;

const ThemeToggle = styled(Button)`
`;

export default Header;