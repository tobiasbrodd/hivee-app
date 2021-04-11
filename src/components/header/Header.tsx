import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components';
import { useTheme, Theme } from '@material-ui/core/styles';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { toggleMenu } from '../../store/menuSlice';
import { toggleTheme } from '../../store/themeSlice';

interface ThemeProps {
    theme: Theme
}

function Header() {
    const title = useAppSelector(state => state.title);
    const appTheme = useAppSelector(state => state.theme);
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const isDark = appTheme.value === "dark";

    return (
        <StyledAppBar position="fixed" color="inherit" theme={theme}>
            <StyledToolbar>
                <MenuButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={() => dispatch(toggleMenu())}
                    theme={theme}
                >
                    <MenuIcon />
                </MenuButton>
                <Title>{title.value}</Title>
                <ThemeToggle onClick={() => dispatch(toggleTheme())}>
                    {isDark ? <WbSunnyIcon /> : <NightsStayIcon />}
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