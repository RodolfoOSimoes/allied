import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const PaineRoot = styled.div`
  background-color: #FFFFFF;
  color: rgb(34, 51, 84);
  border-radius: 6px;
  box-shadow: rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px;
  overflow: hidden;
`;

const PainelHeader = styled.div`
  padding: 16px;
`;

const PainelHeaderTitle = styled.h3`
  display: block;
  margin: 0px;
  font-family: Roboto;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.334;
`;

const PainelHeaderSubtitle = styled.p`
  font-family: Roboto;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.57;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(34, 51, 84, 0.7);
  display: block;
  padding-top: 8px;
  margin: 0px;
`;

const PainelBody = styled.div`
  padding-bottom: 16px;
`;

function Painel(props) {
  return (
    <PaineRoot>
      {props.title !== '' && (
        <PainelHeader>
          {props.title !== '' && (
            <PainelHeaderTitle>{ props.title }</PainelHeaderTitle>
          )}
          {props.subtitle !== '' && (
            <PainelHeaderSubtitle>{ props.subtitle }</PainelHeaderSubtitle>
          )}
        </PainelHeader>
      )}
      <PainelBody>
        { props.children }
      </PainelBody>
    </PaineRoot>
  );
}

Painel.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

Painel.defaultProps = {
  title: '',
  subtitle: '',
};

export default Painel;
