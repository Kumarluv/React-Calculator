import './App.css';
import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState(0);

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult('');
  }
  const backspace = () => {
    setResult(result.slice(0, -1));
  }
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }

  }
  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result === '' ? 0 : result} />
        </form>
        <div className="keypad">
          <button className="highlight" onClick={clear} id="clear">Clear</button>
          <button disabled=
            {result === 'Error' ? true : false} className="highlight" onClick={backspace} id="backspace">C</button>
          <button disabled=
            {result === 'Error' ? true : false} className="highlight" name="/" onClick={handleClick} id="">&divide;</button>
          <button disabled=
            {result === 'Error' ? true : false} name="7" onClick={handleClick}>7</button>
          <button disabled=
            {result === 'Error' ? true : false} name="8" onClick={handleClick}>8</button>
          <button disabled=
            {result === 'Error' ? true : false} name="9" onClick={handleClick}>9</button>
          <button disabled=
            {result === 'Error' ? true : false} className="highlight" name="*" onClick={handleClick}>&times;</button>
          <button disabled=
            {result === 'Error' ? true : false} name="4" onClick={handleClick}>4</button>
          <button disabled=
            {result === 'Error' ? true : false} name="5" onClick={handleClick}>5</button>
          <button disabled=
            {result === 'Error' ? true : false} name="6" onClick={handleClick}>6</button>
          <button disabled=
            {result === 'Error' ? true : false} className="highlight" name="-" onClick={handleClick}>&ndash;</button>
          <button disabled=
            {result === 'Error' ? true : false} name="1" onClick={handleClick}>1</button>
          <button disabled=
            {result === 'Error' ? true : false} name="2" onClick={handleClick}>2</button>
          <button disabled=
            {result === 'Error' ? true : false} name="3" onClick={handleClick}>3</button>
          <button disabled=
            {result === 'Error' ? true : false} className="highlight" name="+" onClick={handleClick}>+</button>
          <button disabled=
            {result === 'Error' ? true : false} name="0" onClick={handleClick}>0</button>
          <button disabled=
            {result === 'Error' ? true : false} name="." onClick={handleClick}>.</button>
          <button disabled=
            {result === 'Error' ? true : false} className="highlight" onClick={calculate} id="result">=</button>
        </div>
      </div>
    </>
  );
}

export default App;
