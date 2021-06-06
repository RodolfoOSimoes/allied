import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ButtonRoot = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: Roboto;
  font-size: 1.4rem;
  line-height: 1.75;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  padding: 4px 16px;
  border-radius: 6px;
  color: #FFFFFF;
  background-color: #1976d2;
  box-shadow: none;
  font-weight: bold;
  text-transform: none;
`;

function Button(props) {
  function handleClick() {
    props.onClick();
  }

  return (
    <ButtonRoot onClick={handleClick}>{ props.children }</ButtonRoot>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
