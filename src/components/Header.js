import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Container from './Container'
import Logo from '../assets/img/logo.png';
import Github from '../assets/img/github.svg';

const HeaderRoot = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: #003b71;
  box-shadow: 0 2px 4px rgb(0 0 0 / 50%);
  width: 100%;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
`;

const HeaderLogo = styled(Link)`
  display: block;
`;

const HeaderLogoImage = styled.img`
  display: block;
  height: 32px;
`;

const HeaderSocial = styled.a`
  display: block;
  width: 32px;
  height: 32px;
`;

const HeaderSocialImage = styled.img`
  display: block;
`;

function Header() {
  return (
    <HeaderRoot>
      <Container>
        <HeaderContent>
            <HeaderLogo to="/">
              <HeaderLogoImage src={Logo} />
            </HeaderLogo>
          <div>
            <HeaderSocial href={process.env.REACT_APP_GITHUB} target="_blank">
              <HeaderSocialImage src={Github} />
            </HeaderSocial>
          </div>
        </HeaderContent>
      </Container>
    </HeaderRoot>
  );
}

export default Header;
