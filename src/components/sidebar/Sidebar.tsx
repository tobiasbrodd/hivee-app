import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SettingsIcon from '@mui/icons-material/Settings';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { closeMenu } from '../../store/slices/menu/menuSlice';
import Logo from '../common/logo/Logo';

function Sidebar() {
    const menu = useAppSelector(state => state.menu);
    const dispatch = useAppDispatch();

    const drawer = (
        <DrawerContainer>
            <ToolbarDiv>
                <Logo />
            </ToolbarDiv>
            <Menu>
                <Divider />
                <List>
                    <ListItem
                        button
                        key={"Sensors"}
                        component={Link}
                        to="/sensors"
                        sx={{ padding: "8px 32px" }}
                        onClick={() => dispatch(closeMenu())}
                    >
                        <ListItemIcon><ThermostatIcon /></ListItemIcon>
                        <ListItemText primary={<StyledText>Sensors</StyledText>} />
                    </ListItem>
                    <ListItem
                        button
                        key={"Weather"}
                        component={Link}
                        to="/weather"
                        sx={{ padding: "8px 32px" }}
                        onClick={() => dispatch(closeMenu())}
                    >
                        <ListItemIcon><WbSunnyIcon /></ListItemIcon>
                        <ListItemText primary={<StyledText>Weather</StyledText>} />
                    </ListItem>
                </List>
            </Menu>
            <Bottom>
                <Divider />
                <List>
                    <ListItem
                        button
                        key={"Settings"}
                        component={Link}
                        to="/settings"
                        sx={{ padding: "8px 32px" }}
                        onClick={() => dispatch(closeMenu())}
                    >
                        <ListItemIcon><SettingsIcon /></ListItemIcon>
                        <ListItemText primary={<StyledText>Settings</StyledText>} />
                    </ListItem>
                </List>
            </Bottom>
        </DrawerContainer>
    );

    return (
        <NavDrawer>
            <DrawerPaper
                sx={{ display: { xl: 'none', xs: 'block' } }}
                variant="temporary"
                anchor="left"
                open={menu.isOpen}
                onClose={() => dispatch(closeMenu())}
                ModalProps={{
                    keepMounted: true
                }}
            >
                {drawer}
            </DrawerPaper>
            <DrawerPaper
                sx={{ display: { xs: 'none', sm: 'block' } }}
                variant="permanent"
                open
            >
                {drawer}
            </DrawerPaper>
        </NavDrawer>
    );
}

const ToolbarDiv = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 75px;
`;

const DrawerPaper = styled(Drawer)`
    & .MuiDrawer-paperAnchorLeft {
        display: flex;
        width: 240px;
    }
`;

const NavDrawer = styled('nav')(({ theme }) => `
    ${theme.breakpoints.up("sm")} {
        width: 240px;
        flex-shrink: 0;
    }
`);

const DrawerContainer = styled('div')`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Menu = styled('div')`
    flex-grow: 1;
`;

const Bottom = styled('div')``;

const StyledText = styled(Typography)(({ theme }) => `
    ${theme.breakpoints.down("sm")} {
        font-size: 1.4rem;
    }
`);

export default Sidebar;