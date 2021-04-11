import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import TimelineIcon from '@material-ui/icons/Timeline';
import SettingsIcon from '@material-ui/icons/Settings';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { useTheme, Theme } from '@material-ui/core/styles';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { toggleMenu } from '../../store/menuSlice';

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
                <Title
                    component={Link}
                    to="/"
                >
                    Hivee
                </Title>
            </ToolbarDiv>
            <Menu>
                <Divider />
                <List>
                    <ListItem
                        button
                        key={"Sensors"}
                        component={Link}
                        to="/sensors"
                    >
                        <ListItemIcon><TimelineIcon /></ListItemIcon>
                        <ListItemText primary={"Sensors"} />
                    </ListItem>
                    <ListItem
                        button
                        key={"Not Found"}
                        component={Link}
                        to="/notfound"
                    >
                        <ListItemIcon><TimelineIcon /></ListItemIcon>
                        <ListItemText primary={"Not Found"} />
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
                    onClose={() => dispatch(toggleMenu())}
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
    min-height: 75px;
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

const Title = styled(Button)`
    height: 75px;
` as typeof Button;


const Menu = styled.div`
    flex-grow: 1;
`;

const Bottom = styled.div`
    
`;

export default Sidebar;