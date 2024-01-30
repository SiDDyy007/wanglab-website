import React from 'react';
import './App.css'; // Link your CSS file (optional)
import Logo from './logo.svg'; // Adjust the path to your logo

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo-container">
          <img src={Logo} alt="Website Logo" />
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            {/* Add more list items for other pages */}
          </ul>
        </nav>
        <h1 className="heading">Wang Bioinformatics Lab</h1>
      </header>
      {/* Rest of your application content goes here */}
    </div>
  );
}

export default App;
