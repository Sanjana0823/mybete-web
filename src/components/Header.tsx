import React from 'react';
import logoIcon from '../assets/logoIcon.png'

const Header: React.FC = () => {
  return (
    <header>
      <img src={logoIcon} alt="logo"/>
      <h1>MyBete</h1>
    </header>
  );
}

export default Header;
