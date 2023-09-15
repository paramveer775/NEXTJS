// Header.js

import React from 'react';

function Header() {
  return (
    <div>
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto text-white text-center">
        <h1 className="text-3xl font-semibold">Your App Name</h1>
        <p className="mt-2">Welcome to your React App!</p>
      </div>
    </header>
    </div>
  );
}

export default Header;
