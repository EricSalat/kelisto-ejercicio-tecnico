import logo from './logo.svg';
import './App.css';
import "./icons-style.css"
import { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Balance from './Components/Balance/Balance';
import Wrapper from './Components/Wrapper/Wrapper';
import NavMenu from "./Components/NavMenu/NavMenu";


function App() {

  // const [data, setData] = useState([]);
  
  // const fetchData = async () => {
  //   const response = await fetch('https://raw.githubusercontent.com/kelkoo-services/kelisto-frontend-js-challenge-crypto/master/data/response.json');
  //   const jsonData = await response.json();
  //   setData(jsonData);
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // console.log(data)

  return (
    <div className="App">
      {/* <ul>
        {      
          data.map(item => (
            <li 
            key={item.id}
            style={{ color: 'red', fontSize: '14px' }}
            >
              {item.name} - {item.stock}
            </li>
          ))
        }
      </ul> */}
      <Header />
      <Balance 
      // data={data} 
      />
      <Wrapper 
      // data={data} 
      />
      <NavMenu />

    </div>
  );
}

export default App;
