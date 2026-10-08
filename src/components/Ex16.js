import React, { useState } from "react";

const Ex16 = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Ex16 - Event Handling Demo</h1>
      <p>Count: {count}</p>
      <button onClick={handleButtonClick}>Increase Count</button>
    </div>
  );
};

export default Ex16;
