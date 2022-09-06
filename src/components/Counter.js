import React, { useState } from "react";

const Counter = (props) => {
  //   console.log(props);
  const { name } = props;
  let [count, setCount] = useState(0);

  const counter = () => {
    count += 1;
    setCount(count);
  };

  
  return (
    <div className="counter-wrapper">
      <h3>{name}</h3>
      <button className="btn btn-counter" onClick={counter}>Add count</button>
      <p> The count is : <span className="count">{count}</span></p>
    </div>
  );
};

export default Counter;
