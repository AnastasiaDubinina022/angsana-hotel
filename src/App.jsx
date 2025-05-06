import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
// import Rooms from './pages/RoomsPage/RoomsPage';
// import Facilities from './pages/Facilities/Facilities';
// import Contacts from './pages/Contacts/Contacts';
// import Offers from './pages/Offers/Offers';

export default function App() {
  return (
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
        <Routes>
  
          <Route path="/" element={<>rrr</>} />
        </Routes>
      </Router>
    );  

}

