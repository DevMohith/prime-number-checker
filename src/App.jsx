import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const isPrime = (n) => {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const handleCheck = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      setResult("Please enter a valid n Umber!");
      return;
    }
    setResult(isPrime(num) ? `${num} is a Prime Number! Perfect guess ✅` : `${num} is NOT a Prime Number! Think logically❌`);
  };

  return (
    <div className="app-container">
      <div className="background-grid"></div>
      <div className="content">
        <h1>🔢 Mohith's Prime Number Checker</h1>
        <input
          type="text"
          placeholder="Enter a number"
          value={number}


          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <button onClick={handleCheck}>Check</button>
        <br />
        {result && <h2>{result}</h2>}
      </div>
    </div>



  );

}

export default App;
