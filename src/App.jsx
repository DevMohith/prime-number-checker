import React, { useState } from "react";


function App () {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const isPrime = (n) => {
    if (n <=1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i+=2) {
      if (n % i === 0) return false;
    }
    return true;

  };

  const handleCheck = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      setResult("Please Enter a valid nUmber!");
      return;
    }
    setResult(isPrime(num) ? `${num} is a Prime Number! You guess like a BOSS🫡 ` : `${num} is NOT a Prime Number! Learn it😏` );
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🔢 Mohith's Prime Number Checker </h1>
      <input
        type="text"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={{ padding: '10px', fontSize: '18px', width: '200px' }}
      />
      <br /><br />
      <button onClick={handleCheck} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Check
      </button>
      <br /><br />
      {result && <h2>{result}</h2>}
    </div>
  );



}

export default App;
