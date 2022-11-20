import React from 'react';
import { GrTechnology } from 'react-icons/gr';
import LogoStyles from '../styles/LogoStyles';
import logo from '../../assets/coinslive.png (1).png';

function Logo() {
  return (
    <LogoStyles to="/">
      <div style={{overflow: "hidden"}}>
        <img style={{maxHeight: "5rem"}} src={logo} alt="coinslive" />
      </div>
    </LogoStyles>
  );
}

export default Logo;
