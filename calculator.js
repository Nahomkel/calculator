import React, { useState } from 'react';
import './App.css';

function App() {
  const [value,setvalue] = useState('');

  const handleButtonClick = (e) => {
    const input = e.target.value;

    if (input === '0' && value === '0') {
      return;
    }

    if (input === '.' && value.includes('.') && !isOperator(value[value.length -1])){
      return;
    }
    
    setvalue((prevValue) => {
      if (prevValue === '0' && input !== '.'){
        return input;
      }

      return prevValue + input;

    });
  };

  const isOperator = (char) => {
    return ['+', '-', '*', '/'].includes(char);
  };

  const handleEqualClick = () => {
    try {
      setvalue(eval(value).toString());
    } catch (error) {
      setvalue('Error');
    }
  };

  return (
    <div className='container'>
      <div className='calculator'>
        <form action=''>
          <div className='display'>
            <input type="text" value={value} readOnly/>
          </div>
          <div>
            <input type="button" value='AC' onClick={() =>setvalue('')}/>
            <input type="button" value='DE' onClick={() => setvalue(value.slice(0, -1))}/>
            <input type="button" value='.' onClick={handleButtonClick}/>
            <input type="button" value='/' onClick={handleButtonClick}/>
          </div>
          <div>
            <input type="button" value='7' onClick={handleButtonClick}/>
            <input type="button" value='8' onClick={handleButtonClick}/>
            <input type="button" value='9' onClick={handleButtonClick}/>
            <input type="button" value='*' onClick={handleButtonClick}/>
          </div>
          <div>
            <input type="button" value='4' onClick={handleButtonClick}/>
            <input type="button" value='5' onClick={handleButtonClick}/>
            <input type="button" value='6' onClick={handleButtonClick}/>
            <input type="button" value='+' onClick={handleButtonClick}/>
          </div>
          <div>
            <input type="button" value='1' onClick={handleButtonClick}/>
            <input type="button" value='2' onClick={handleButtonClick}/>
            <input type="button" value='3' onClick={handleButtonClick}/>
            <input type="button" value='-' onClick={handleButtonClick}/>
          </div>
          <div>
            <input type="button" value='00' onClick={handleButtonClick}/>
            <input type="button" value='0' onClick={handleButtonClick}/>
            <input type="button" value='=' className='equal'onClick={handleEqualClick}/>
          </div>
        </form>
       </div> 
     </div>
  );
}

export default App;
