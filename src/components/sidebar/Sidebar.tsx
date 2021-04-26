import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import EcoIcon from '@material-ui/icons/Eco';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import SettingsIcon from '@material-ui/icons/Settings';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styled from 'styled-components';
import { useTheme, Theme } from '@material-ui/core/styles';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { closeMenu } from '../../store/slices/menu/menuSlice';
import Logo from '../common/logo/Logo';

interface ThemeProps {
    theme: Theme
}

function Sidebar() {
    const menu = useAppSelector(state => state.menu);
    const dispatch = useAppDispatch();
    const theme = useTheme();

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
                        onClick={() => dispatch(closeMenu())}
                    >
                        <ListItemIcon><EcoIcon /></ListItemIcon>
                        <ListItemText primary={"Sensors"} />
                    </ListItem>
                    <ListItem
                        button
                        key={"Weather"}
                        component={Link}
                        to="/weather"
                        onClick={() => dispatch(closeMenu())}
                    >
                        <ListItemIcon><WbSunnyIcon /></ListItemIcon>
                        <ListItemText primary={"Weather"} />
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
                        onClick={() => dispatch(closeMenu())}
                    >
                        <ListItemIcon><SettingsIcon /></ListItemIcon>
                        <ListItemText primary={"Settings"} />
                    </ListItem>
                </List>
            </Bottom>
        </DrawerContainer>
    );

    return (
        <NavDrawer theme={theme}>
            <Hidden smUp implementation="css">
                <DrawerPaper
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
            </Hidden>
            <Hidden xsDown implementation="css">
                <DrawerPaper
                    variant="permanent"
                    open
                >
                    {drawer}
                </DrawerPaper>
            </Hidden>
        </NavDrawer>
    );
}

const ToolbarDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const DrawerPaper = styled(Drawer)`
    & .MuiDrawer-paperAnchorLeft {
        display: flex;
        width: 240px;
    }
`;

const NavDrawer = styled.nav`
    ${(props: ThemeProps) => props.theme.breakpoints.up("sm")} {
        width: 240px;
        flex-shrink: 0;
    }
`;

const DrawerContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Menu = styled.div`
    flex-grow: 1;
`;

const Bottom = styled.div`
    
`;

export default Sidebar;