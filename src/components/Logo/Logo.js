import React from 'react';
import RivConLogo from '../../assets/images/RivConLogo.png';
import classes from './Logo.css';

// notice the style change in the wrapping div - this is a way to 
// control responsive rendering.  We can pass props from the component
// Note: I am going to solve this issue a different way and
// left the "style" to remind myself of this alternative solution
// see: originating components:  SideDrawer & ToolBar
// solution: notice the wrapping div around the Logo component call. 

const logo = (props) => (
  <div className={ classes.Logo } style={ { height: props.height } }>
    <img src={ RivConLogo } alt="MyBurgerBld" />
  </div>
);

export default logo;
