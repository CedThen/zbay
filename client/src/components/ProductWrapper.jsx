import React from 'react';
import useCustomNavigate from '../hooks/useCustomNavigate';
import { routeNames } from './constants';

function ProductWrapper({ id, children, className = '' }) {
  const navProduct = useCustomNavigate(`${routeNames.PRODUCT}/${id}`)

  return (
    <div onClick={navProduct} className={className}>
      {children}
    </div>)
}

export default ProductWrapper;
