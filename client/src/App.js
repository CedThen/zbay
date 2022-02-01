import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Cart, Login, Profile, Home, NoMatch } from './components'
import { routeNames } from './components/constants'
import PageWrapper from './components/PageWrapper';
import ProductDisplay from './components/ProductDisplay';
import Search from './components/Search'
import useFetchData from './hooks/useFetchData';

function App() {
  useFetchData();

  return (
    <Router>
      <Routes>
        <Route path={routeNames.HOME} element={<PageWrapper />}>
          <Route index element={<Home />} />
          <Route path={routeNames.CART} element={<Cart />} />
          <Route path={`${routeNames.PRODUCT}/:id`} element={<ProductDisplay />} />
          <Route path={routeNames.PROFILE} element={<Profile />} />
          <Route path={`${routeNames.SEARCH}`} element={<Search />} />
        </Route>
        <Route path={routeNames.LOGIN} element={<Login />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
