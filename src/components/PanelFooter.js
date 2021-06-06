import React from 'react';
import styled from 'styled-components';

const PanelFooterRoot = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 16px 0 16px;
`;

const PanelFooterItem = styled.div`
  margin-right: 12px;

  &:last-child {
    margin-right: 0px;
  }
`;

function PanelFooter(props) {
  let buttons = [];
  if (Array.isArray(props.children)) {
    buttons = props.children;
  } else if (props.children) {
    buttons.push(props.children);
  }

  return (
    <PanelFooterRoot>
      {buttons.map((item, i) => {
        return (<PanelFooterItem key={i}>{ item }</PanelFooterItem>);
      })}
    </PanelFooterRoot>
  );
}

export default PanelFooter;
