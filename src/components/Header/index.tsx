import React from 'react';

import { Container, Nav } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Nav to="/" exact activeClassName="active">
          Listagem
        </Nav>
        <Nav to="/import" activeClassName="active">
          Importar
        </Nav>
      </nav>
    </header>
  </Container>
);

export default Header;
