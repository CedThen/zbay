import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import PageWrapper from './PageWrapper';

const ProductPage = () => {
  // const location = useLocation();
  // console.log('state', location);
  return (
    <PageWrapper>
      hello
      <Outlet />
    </PageWrapper>
  )
}



export default ProductPage