import "./App.css";
import "./icons-style.css"
import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Balance from "./Components/Balance/Balance";
import Wrapper from "./Components/Wrapper/Wrapper";
import NavMenu from "./Components/NavMenu/NavMenu";


function App() {

  const [data, setData] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);
  
  const fetchData = async () => {
    const response = await fetch("https://raw.githubusercontent.com/kelkoo-services/kelisto-frontend-js-challenge-crypto/master/data/response.json");
    const jsonData = await response.json();
    setData(jsonData);

    const sum = jsonData.reduce((acc, item) => {
      return acc + item.stock;
    }, 0);
    setTotalBalance(sum);
  

  }
  useEffect(() => {
    fetchData();
  }, []);

  const formatBalanceValue = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="App">
      <Header />
      <Balance 
      // totalBalance={totalBalance}
      totalBalance={formatBalanceValue(totalBalance)} />
      <Wrapper 
      data={data}
      formatBalanceValue={formatBalanceValue} 
      />
      <NavMenu />

    </div>
  );
}

export default App;
