import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  useEffect(() => {
    console.log('useEffect');
    if(value > 0) document.title =`New Message ${value}`;
  }, [value]);

  useEffect(() => {
    console.log('useEffect');
    if(value2 > 0) document.title =`New Message ${value2}`;
  }, [value2]);
  console.log('rebder conponeet');

  return <>
    <h1>{value}</h1>
    <button className="btn" onClick={() => {setValue(value+1)}}>Click Me</button>
    <h1>{value2}</h1>
    <button className="btn" onClick={() => {setValue2(value2+1)}}>Click Me</button>
  </>
};

export default UseEffectBasics;
