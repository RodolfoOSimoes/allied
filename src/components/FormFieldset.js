import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const FormFieldsetRoot = styled.div`
  display: inline-flex;
  margin-top: 24px;
  padding-left: 12px;
  padding-right: 12px;
  width: ${props => props.xs * 8.3333}%;

  @media (min-width: 480px) {
    width: ${props => props.sm * 8.3333}%;
  }

  @media (min-width: 768px) {
    width: ${props => props.md * 8.3333}%;
  }

  @media (min-width: 1024px) {
    width: ${props => props.lg * 8.3333}%;
  }
  
  @media (min-width: 1400px) {
    width: ${props => props.xl * 8.3333}%;
  }
`;

function FormFieldset(props) {
  return (
    <FormFieldsetRoot
      xs={props.xs}
      sm={props.sm}
      md={props.md}
      lg={props.lg}
      xl={props.xl}
    >{ props.children }</FormFieldsetRoot>
  );
}

FormFieldset.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

FormFieldset.defaultProps = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
};

export default FormFieldset;
