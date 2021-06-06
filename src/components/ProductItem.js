import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import arrow from '../assets/img/arrow.svg';

const ProductItemRoot = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-top: 1px solid rgba(34, 51, 84, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgb(242, 243, 255);
  }

  &:last-child {
    border-bottom: 1px solid rgba(34, 51, 84, 0.1);
  }
`;

const ProductItemInfo = styled.div`
  flex: 1;
`;

const ProductItemTitle = styled.h3`
  display: block;
  margin: 0px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.334;
  color: rgb(34, 51, 84);
`;

const ProductItemSubtitle = styled.p`
  display: block;
  margin: 5px 0px 0px 0px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.334;
  color: rgba(34, 51, 84, 0.7);
`;

const ProductItemControl = styled.div``;

const ProductItemArrow = styled.a`
  display: block;
  width: 32px;
`;

function ProductItem(props) {
  function handleClickItem() {
    props.onClick(props.sku);
  }

  return (
    <ProductItemRoot onClick={handleClickItem}>
      <ProductItemInfo>
        <ProductItemTitle>{ props.title }</ProductItemTitle>
        <ProductItemSubtitle>{ props.subtitle }</ProductItemSubtitle>
      </ProductItemInfo>
      <ProductItemControl>
        <ProductItemArrow>
          <img src={arrow} alt="seta" />
        </ProductItemArrow>
      </ProductItemControl>
    </ProductItemRoot>
  );
}

ProductItem.propTypes = {
  sku: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ProductItem.defaultProps = {
  sku: '',
  title: '',
  subtitle: '',
  onClick: () => {},
};

export default ProductItem;
