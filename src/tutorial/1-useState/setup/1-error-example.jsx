import React from 'react';

const ErrorExample = () => {
  let title = 'My Title';
  const handleClick = () => {
    title = 'Hello People';
    console.log(title);
    return title.toUpperCase();
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change Title
      </button>
    </React.Fragment>
  )
};

export default ErrorExample;
