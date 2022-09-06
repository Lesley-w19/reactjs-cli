import React, { useState, useMemo, useEffect } from "react";

const Counter = (props) => {
  //   console.log(props);
  const { name } = props;

  //useState hook
  let [count, setCount] = useState(0);

  const counter = () => {
    count += 1;
    setCount(count);
  };



  //useMemo hook
  const [age, setAge] = useState(20);
  const [currentAge, setCurrentAge] = useState(0);
  const countAge = (ag) => {
    return ag ** 2;
  };
  // const memoizedAge = useMemo(() => countAge(age), []);
  //changes when given a dependency
  const memoizedAge = useMemo(() => countAge(age), [age]);

  useEffect(() => {
    console.log(`Initial Memoized Value is: ${memoizedAge}`);
    setCurrentAge(age ** 2);
  }, [currentAge, memoizedAge]);



  
 // State to keep track of current word in array we want to show
 const [wordIndex, setWordIndex] = useState(0);

 // Words we can flip through and view letter count
 const words = ["Hopes", "and", "dreams", "were", "dashed", "that", "day"];
 const word = words[wordIndex];
 // Returns number of letters in a word
 // We make it slow by including a large and completely unnecessary loop
 const computeLetterCount = (word) => {
   let i = 0;
   while (i < 1000000000) i++;
   return word.length;
 };

 // Memoize computeLetterCount so it uses cached return value if input array ...
 // ... values are the same as last time the function was run.
 const letterCount = useMemo(() => computeLetterCount(word), [word]);


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
        <h3>Memo example using age</h3>
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
      <div className="word__wrapper">
      <h3>Compute number of letters (slow )</h3>
      <p>
       The word:  "{word}" has {letterCount} letters
      </p>
      <button
        onClick={() => {
          const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
          setWordIndex(next);
        }}
      >
        Next word
      </button>
      </div>
    </div>
  );
};

export default Counter;
