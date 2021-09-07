import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import BusinessIcon from '@material-ui/icons/Business';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import { Link } from 'react-router-dom';
import { closeMenu } from '../../reducers/state';
import { useSelector, useDispatch } from "react-redux";

const Menu = () => {
    const menuState = useSelector( menuState => menuState.state.value);
    const dispatch = useDispatch();
    return (
        <Drawer anchor={'left'} open={menuState} onClose={() =>  dispatch(closeMenu())}>
            <List>
                <ListItem button component={Link} to={'/add'} onClick={() => dispatch(closeMenu())}>
                    <ListItemIcon>
                        <AddToQueueIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Add Empresa'} />
                </ListItem>
                <ListItem button component={Link} to={'/company'} onClick={() => dispatch(closeMenu())}>
                    <ListItemIcon>
                        <BusinessIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Ver Empresas'} />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Menu;