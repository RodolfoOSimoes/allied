import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 480px) {
    padding-left: 20px;
    padding-right: 20px;
    max-width: 480px;
  }

  @media (min-width: 768px) {
    max-width: 758px;
  }

  @media (min-width: 1024px) {
    max-width: 1000px;
  }
  
  @media (min-width: 1400px) {
    max-width: 1280px;
  }
`;

function Container(props) {
  return (
    <Box>{ props.children }</Box>
  );
}

export default Container;
