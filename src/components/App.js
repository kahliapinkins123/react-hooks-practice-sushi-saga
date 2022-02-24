import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([]);
  const [balance, setBalance] = useState(100);
  

  useEffect(()=>{
    fetch(API)
      .then((resp)=>resp.json())
      .then((sushiObj)=>setSushi(sushiObj))
  }, [])

  return (
    <div className="app">
      <SushiContainer sushi={sushi} balance={balance} setBalance={setBalance}/>
      <Table balance={balance}/>
    </div>
  );
}

export default App;
