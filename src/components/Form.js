import React, { useState, useEffect, useRef } from "react";

const Form = (props) => {
  //   console.log(props);
  const { name } = props;
  const [message, setMessage] = useState(name);

  const [show, setShow] = useState(false);
  const elementInput = useRef();
  useEffect(() => {
    const input = elementInput.current;
    console.log(input);
  }, []);

  return (
    <div className="form">
      <div>
        <form className="form__wrapper">
          <input
            type="text"
            ref={elementInput}
            value={message}
            onChange={(e) => {
              e.preventDefault();
              setMessage(e.target.value);
            }}
          />
        </form>
        <div className="form__wrapper__output">{message}</div>
      </div>
      <div>
        <button>Dark mode toggle</button>
      </div>
      <div className="content__wrapper">
        <div className="par__wrapper">
          <button onClick={() => setShow(true)}>Show Paragragh</button>
          {show ? (
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At unde
              necessitatibus, sed, dolor earum illo voluptatem adipisci quia
              officia eveniet voluptatum est ea soluta! Neque, magnam vel
              dolore, nisi corrupti maxime voluptates aut numquam hic saepe quas
              sunt voluptatem cupiditate perspiciatis mollitia, similique qui
              beatae fugiat vero! Labore, tempore laudantium.
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
