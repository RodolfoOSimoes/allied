import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const FormInputRoot = styled.div`
  display: block;
  width: 100%;
  font-size: 1.4rem;
  font-family: 'Roboto';
`;

const FormInputElement = styled.input`
  display: block;
  width: 100%;
  padding: 16.5px 14px;
  appearance: none;
  border-radius: 6px;
  border: 1px solid #aaa;
  font-size: 1.4rem;
`;

function FormInput(props) {
  function handleChange(e) {
    props.onChange(e.target.value);
  }

  return (
    <FormInputRoot>
      <FormInputElement
        name={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.label}
        onChange={handleChange}
      />
    </FormInputRoot>
  );
}

FormInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

FormInput.defaultProps = {
  name: '',
  type: 'text',
  value: '',
  label: '',
  onChange: () => {},
};

export default FormInput;
