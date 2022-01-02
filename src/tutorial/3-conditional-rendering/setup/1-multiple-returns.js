import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/zaheet-fitterfly';
const MultipleReturns = () => {
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user zaheet');

  useEffect(() => {
    setLoading(true);
    fetch(url)
    .then(response => {
      if(response){
        if(response.status >= 200 && response.status <=299){
          return response.json();
        } else {
          setLoading(false);
          setIsError(true);
          throw new Error(response.statusText);
        }
      }
    })
    .then(user => {
      const {login} = user;
      setUser(login);
      setLoading(false);
    })
    .catch(error => {
      console.log(error)
      setIsError(true)
    }
  )
  },[]);

  if(loading) {
    return <>
      <h1>Loading...</h1>
    </>
  }
  if(isError) {
    return <>
      <h1>Error!</h1>
    </>
  }
  return <>
    <h1>{user}</h1>
  </>

};

export default MultipleReturns;
