import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import ProductItem from './ProductItem';

const ProductListRoot = styled.div``;

function ProductList(props) {
  function handleClickItem(sku) {
    props.onSelect(sku);
  }

  return (
    <ProductListRoot>
      {props.products.map(item => (
        <ProductItem
          key={item.sku}
          sku={item.sku}
          title={item.title}
          subtitle={item.subtitle}
          onClick={handleClickItem}
        />
      ))}
    </ProductListRoot>
  );
}

ProductList.propTypes = {
  products: PropTypes.array,
  onSelect: PropTypes.func,
};

ProductList.defaultProps = {
  products: [],
  onSelect: () => {},
};

export default ProductList;
