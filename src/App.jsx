import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import './styles/main.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import RoomsPage from './pages/RoomsPage/RoomsPage';
import FacilitiesPage from './pages/FacilitiesPage/FacilitiesPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import OffersPage from './pages/OffersPage/OffersPage';
import GlobalModal from './components/GlobalModal/GlobalModal';

export default function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/rooms"
            element={<RoomsPage />}
          />
          <Route
            path="/facilities"
            element={<FacilitiesPage />}
          />
          <Route
            path="/offers"
            element={<OffersPage />}
          />
          <Route
            path="/contacts"
            element={<ContactsPage />}
          />
        </Routes>
        <GlobalModal />
        <Footer />
      </div>
    </Router>
  );
}
