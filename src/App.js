import logo from './logo.svg';
import './App.css';
import "./icons-style.css"
import Header from './Components/Header/Header';
import Balance from './Components/Balance/Balance';
import Wrapper from './Components/Wrapper/Wrapper';
import NavMenu from "./Components/NavMenu/NavMenu";


function App() {
  return (
    <div className="App">
      <Header />
      <Balance />
      <Wrapper />
      <NavMenu />

    </div>
  );
}

export default App;
