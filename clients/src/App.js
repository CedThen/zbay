import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Cart, Login, Profile, Home } from './components'
// import Cart from './components/Cart'


// routing
// redux stores here mbbe
// or react useReducer


function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={Login} />
        <Route path='/profile' element={Profile} />
      </Routes>
    </Router>
  );
}

export default App;
