import React from 'react';
import RivConLogo from '../../assets/images/RivConLogo.png';
import classes from './Logo.css';

const logo = (props) => (
  <div className={ classes.Logo }>
    <img src={ RivConLogo } alt="MyBurgerBld" />
  </div>
);

export default logo;
