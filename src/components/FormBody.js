import React from 'react';
import styled from 'styled-components';

const FormBodyRoot = styled.div`
  margin-left: -12px;
  margin-right: -12px;
`;

function FormBody(props) {
  return (
    <FormBodyRoot>{ props.children }</FormBodyRoot>
  );
}

export default FormBody;
