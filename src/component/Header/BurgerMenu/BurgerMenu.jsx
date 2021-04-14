import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import Navigation from '../Navigation/Navigation'

export default function BurgerMenu() {
    const [state, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    }
    const content = <Navigation toggleDrawer={toggleDrawer} />;

    return (
        <React.Fragment>
            <MenuIcon style={{ cursor: 'pointer' }} onClick={toggleDrawer(true)} />
            <Drawer
                open={state}
                onClose={toggleDrawer(false)}
            >
                {content}
            </Drawer>
        </React.Fragment>
    );
}