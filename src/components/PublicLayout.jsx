import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function PublicLayout() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-full flex flex-col overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default PublicLayout;
