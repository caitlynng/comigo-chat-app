import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './NavigationBar.styles';
import logo from 'assets/Comigo.png';

const NavigationBar: React.FC = () => {
  return (
    <Nav>
      <Link to='/'>
        <img src={logo} />
      </Link>
    </Nav>
  );
};

export default NavigationBar;
