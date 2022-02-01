import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Cart, Login, Profile, Home, NoMatch } from './components'
import { routeNames } from './components/constants'
import ProductDisplay from './components/ProductDisplay';
import ProductPage from './components/ProductPage';
import useFetchData from './hooks/useFetchData';

function App() {
  useFetchData();

  return (
    <Router>
      <Routes>
        <Route path={routeNames.HOME} element={<Home />} />
        <Route path={routeNames.LOGIN} element={<Login />} />
        <Route path={routeNames.CART} element={<Cart />} />

        <Route path={routeNames.PROFILE} element={<Profile />} />
        <Route path={`${routeNames.PRODUCT}`} element={<ProductPage />} >
          <Route path={`${routeNames.PRODUCT}/:id`} element={<ProductDisplay />} />
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
