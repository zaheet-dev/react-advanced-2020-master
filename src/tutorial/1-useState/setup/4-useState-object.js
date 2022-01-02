import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';

const UseStateObject = () => {
  // const [person, setPerson] = useState({
  //   name: 'zaheet',
  //   age: 34,
  //   message: 'random message'
  // })

  const [name, setName] = useState('Zaheet');
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState('set message');

  // const changeMessage = () => {
  //   setPerson({
  //     ...person,
  //     message: 'new message'
  //   })
  // }
  // console.log(person);
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={() => setMessage("from use state")}>Change Message</button>
    </>
  );
};

export default UseStateObject;
