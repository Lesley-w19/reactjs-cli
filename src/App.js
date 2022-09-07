// import logo from './logo.svg';
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="container">
      <h1>hello</h1>
      <Form name="Change form text." />
      <Counter name="Counter example" />
      <Todos name="Lists rendering example" />
    </div>
  );
};

export default App;
