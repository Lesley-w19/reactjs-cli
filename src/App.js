// import logo from './logo.svg';
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import Form from "./components/Form";

const App = () => {
  return (
    <div>
      <Counter name="Counter example" />
      <Todos name="Lists rendering example" />
      <Form name="Form example" />
    </div>
  );
};

export default App;
