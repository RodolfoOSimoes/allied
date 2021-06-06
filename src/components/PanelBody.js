import React from 'react';
import styled from 'styled-components';

const PanelBodyRoot = styled.div`
  padding: 0 16px;
`;

function PanelBody(props) {
  return (
    <PanelBodyRoot>{ props.children }</PanelBodyRoot>
  );
}

export default PanelBody;
