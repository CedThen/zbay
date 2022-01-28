import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Cart, Login, Profile, Home, NoMatch } from './components'
import { routeNames } from './components/constants'

// redux stores here mbbe
// or react useReducer


function App() {
  return (

    <Router>
      <Routes>
        <Route path={routeNames.HOME} element={<Home />} />
        <Route path={routeNames.LOGIN} element={<Login />} />
        <Route path={routeNames.CART} element={<Cart />} />
        <Route path={routeNames.PROFILE} element={Profile} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
