import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setsize] = useState(window.innerWidth);
  console.log('render',size);

  const checkSize = () => {
    setsize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    // return () => {
    //   window.removeEventListener('resize', checkSize);
    //   console.log('cleanup');
    // }
  }, []);

  return <>
    <h1>window</h1>
    <h2>{size} PX</h2>
  </>
};

export default UseEffectCleanup;
