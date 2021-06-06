import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const PanelRoot = styled.div`
  background-color: #FFFFFF;
  color: rgb(34, 51, 84);
  border-radius: 6px;
  box-shadow: rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px;
  overflow: hidden;
`;

const PanelHeader = styled.div`
  padding: 16px;
`;

const PanelHeaderTitle = styled.h3`
  display: block;
  margin: 0px;
  font-family: Roboto;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.334;
`;

const PanelHeaderSubtitle = styled.p`
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

const PanelBody = styled.div`
  padding-bottom: 16px;
`;

function Panel(props) {
  return (
    <PanelRoot>
      {props.title !== '' && (
        <PanelHeader>
          {props.title !== '' && (
            <PanelHeaderTitle>{ props.title }</PanelHeaderTitle>
          )}
          {props.subtitle !== '' && (
            <PanelHeaderSubtitle>{ props.subtitle }</PanelHeaderSubtitle>
          )}
        </PanelHeader>
      )}
      <PanelBody>
        { props.children }
      </PanelBody>
    </PanelRoot>
  );
}

Panel.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

Panel.defaultProps = {
  title: '',
  subtitle: '',
};

export default Panel;
