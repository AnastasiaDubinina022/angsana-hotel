import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './styles/main.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import RoomsPage from './pages/RoomsPage/RoomsPage';
import FacilitiesPage from './pages/FacilitiesPage/FacilitiesPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import OffersPage from './pages/OffersPage/OffersPage';
import GlobalModal from './components/GlobalModal/GlobalModal';

const AnimatedRoutes = () => {
    const location = useLocation();

    return(
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/rooms" element={<RoomsPage />}/>
          <Route path="/facilities" element={<FacilitiesPage />}/>
          <Route path="/offers" element={<OffersPage />}/>
          <Route path="/contacts" element={<ContactsPage />}/>
        </Routes>
      </AnimatePresence>
    )
}

export default function App() {

  return (
    <Router>
      <div className="wrapper">
        <Header />
        <AnimatedRoutes/>
        <GlobalModal />
        <Footer />
      </div>
    </Router>
  );
}
