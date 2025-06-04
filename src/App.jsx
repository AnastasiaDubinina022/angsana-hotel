import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import {lazy, Suspense} from 'react';

import './styles/main.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import GlobalModal from './components/GlobalModal/GlobalModal';
import Spinner from './components/Spinner/Spinner';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RoomsPage = lazy(() => import('./pages/RoomsPage/RoomsPage'));
const FacilitiesPage = lazy(() => import('./pages/FacilitiesPage/FacilitiesPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const OffersPage = lazy(() => import('./pages/OffersPage/OffersPage'));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<Spinner />}>
      <AnimatePresence mode="wait">
        <Routes
          location={location}
          key={location.pathname}>
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
      </AnimatePresence>
    </Suspense>
  );
};

export default function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <AnimatedRoutes />
        <GlobalModal />
        <Footer />
      </div>
    </Router>
  );
}
