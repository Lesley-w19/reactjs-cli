import React, { useState, useEffect } from "react";

const Form = (props) => {
  //   console.log(props);
  const { name } = props;
  let [message, setMessage] = useState(name);
  useEffect(() => {
    // message = name;
  }, [message]);
  return (
    <div className="form-wrapper">
      <form>
        <button>Dark mode toggle</button>
        <input
          type="text"
          value={message}
          onChange={(e) => {
            e.preventDefault();
            setMessage(e.target.value);
          }}
        />
      </form>
      <div className="form__output">{message}</div>
    </div>
  );
};

export default Form;
