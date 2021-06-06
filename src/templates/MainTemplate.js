import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';

const MainRoot = styled.main`
  padding-top: 72px;
`;

function MainTemplate(props) {
  return (
    <MainRoot>
      <Header />
      <div>{ props.children }</div>
    </MainRoot>
  );
}

export default MainTemplate;
