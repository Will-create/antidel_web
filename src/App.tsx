import React, { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'));
const EULA = lazy(() => import('./pages/EULA'));
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';

const App: React.FC = () => {
  return (
    <Router basename='/'>
      <div className="bg-deep-black min-h-screen">
        <Header />
        <Routes>
            <Route index element={<Home />} />
            <Route 
              path="privacy" 
              element={
                <Suspense fallback={<div>Loading Privacy Policy...</div>}>
                  <PrivacyPolicy />
                </Suspense>
              } 
            />
            <Route 
              path="terms" 
              element={
                <Suspense fallback={<div>Loading Terms of Use...</div>}>
                  <TermsOfUse />
                </Suspense>
              } 
            />
            <Route 
              path="eula" 
              element={
                <Suspense fallback={<div>Loading EULA...</div>}>
                  <EULA />
                </Suspense>
              } 
            />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
