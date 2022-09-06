import React, { useState, useMemo, useEffect } from "react";

const Counter = (props) => {
  //   console.log(props);
  const { name } = props;
  let [count, setCount] = useState(0);
  const [age, setAge] = useState(20);
  const [currentAge, setCurrentAge] = useState(0);
  const countAge = (ag) => {
    return ag ** 2;
  };
  const memoizedAge = useMemo(() => countAge(age), []);
  //changes when given a dependency
  // const memoizedAge = useMemo(() => countAge(age), [age]);

  useEffect(() => {
    console.log(`Initial Memoized Value is: ${memoizedAge}`);
    setCurrentAge(age ** 2);
  }, [currentAge, memoizedAge]);

  const counter = () => {
    count += 1;
    setCount(count);
  };

  return (
    <div className="counter">
      <div className="counter__wrapper">
        <h3>{name}</h3>
        <button onClick={counter}>Add count</button>
        <p>
          {" "}
          The count is : <span className="count">{count}</span>
        </p>
      </div>
      <div className="memo__wrapper">
        <p>Current Age: {age}</p>
        <p>Current SquaredAge: {currentAge}</p>
        <p>Memoized SquaredAge: {memoizedAge}</p>
        <button
          onClick={() => {
            setAge((prevAge) => (prevAge += 1));
            setCurrentAge(memoizedAge);
            setCurrentAge((currentAge) => (currentAge += 1) ** 2);
          }}
        >
          Increase Age
        </button>
      </div>
    </div>
  );
};

export default Counter;
