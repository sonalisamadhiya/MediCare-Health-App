import React from 'react'

const Navbar = () => {
   return (
    <nav className="flex justify-between p-5 bg-black text-white">
      <h1 className="text-indigo-500 text-xl font-bold">MediCare</h1>
      <div className="space-x-4">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
