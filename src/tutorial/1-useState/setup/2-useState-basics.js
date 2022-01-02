import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1[0]);
  // const handler = useState(1[1]);
  // console.log(value, handler);

  const [text, setText] = useState('Random Title');

  const handleClick = () => {
    if(text === 'Random Title') {
      setText('Hello People');
    } else {
      setText('Random Title');
    }
    console.log(text);
  }
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
