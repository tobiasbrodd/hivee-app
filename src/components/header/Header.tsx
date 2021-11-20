import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { toggleMenu } from '../../store/slices/menu/menuSlice';
import { toggleTheme } from '../../store/slices/theme/themeSlice';

export default function Header() {
    const title = useAppSelector(state => state.title);
    const appTheme = useAppSelector(state => state.theme);
    const dispatch = useAppDispatch();
    const isDark = appTheme.value === "dark";

    return (
        <StyledAppBar position="fixed" color="inherit">
            <StyledToolbar>
                <MenuButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={() => dispatch(toggleMenu())}
                >
                    <MenuIcon fontSize="large" />
                </MenuButton>
                <Title>{title.value}</Title>
                <ThemeToggle onClick={() => dispatch(toggleTheme())}>
                    {isDark ? <LightIcon /> : <DarkIcon />}
                </ThemeToggle>
            </StyledToolbar>
            <Divider />
        </StyledAppBar>
    );
}

const LightIcon = styled(LightModeIcon)`
    color: #F9D00F;
`;

const DarkIcon = styled(DarkModeIcon)`
    color: #000;
`;

const ThemeToggle = styled(IconButton)`
    min-width: 52px;
    min-height: 52px;
`;

const StyledAppBar = styled(AppBar)(({ theme }) => `
    min-height: 75px;
    box-shadow: none;
    ${theme.breakpoints.up("sm")} {
        width: calc(100% - 240px);
        margin-left: 240px;
    }
`);

const StyledToolbar = styled(Toolbar)(({ theme }) => `
    height: 75px;
    ${theme.breakpoints.down("sm")} {
        display: flex;
        flex-direcation: row;
        align-items: center;
        justify-content: space-around;
    }
    ${theme.breakpoints.up("sm")} {
        display: flex;
        flex-direcation: row;
        align-items: center;
        justify-content: space-between;
    }
`);

const MenuButton = styled(IconButton)(({ theme }) => `
    ${theme.breakpoints.up("sm")} {
        display: none;
    }
    min-width: 52px;
    min-height: 52px;
`);

const Title = styled('h1')`
    text-align: center;
    margin: 0;
`;