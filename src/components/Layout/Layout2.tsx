import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout2: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-deep-black min-h-screen">
      <Header />
      <main>
        {children}  
      </main>
      <Footer />
    </div>
  );
};

export default Layout2;