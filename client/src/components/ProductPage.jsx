import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';
import PageWrapper from './PageWrapper';

const ProductPage = () => {
  useFetchData()
  return (
    <PageWrapper>
      <Outlet />
    </PageWrapper>
  )
}



export default ProductPage