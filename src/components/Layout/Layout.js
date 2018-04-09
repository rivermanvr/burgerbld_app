import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={ classes.content }>
    { props.children }
    </main>
  </Aux>
)

export default layout;
