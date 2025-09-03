//import logo from './logo.svg';
import './App.css';
//import Hello from './Hello'; 
//import Goodbye from './Goodbye';
import JSXExamples from './components/JSXExamples';
//import ComponentExamples from './components/ComponentExamples';
import TodoList from './components/TodoList';
import UserCard from './components/UserCard';


function App() {
  return (
    <div className="App">
      {/* <ComponentExamples/> */}
      {/* <Hello/> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello this my react !!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    {/* <Goodbye/> */}
    <JSXExamples/>
    <UserCard/>
    <TodoList/>
    </div>
  );
}

export default App;
