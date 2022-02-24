import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi';

function SushiContainer({ sushi, balance, setBalance }) {
  const [index, setIndex] = useState(0);

  const sushiList = sushi.map((oneSushi)=>{
    return <Sushi key={oneSushi.id} sushi={oneSushi} balance={balance} setBalance={setBalance}/>
  })

  const fourSushi = sushiList.slice(index,index+4)

  return (
    <div className="belt">
      {fourSushi}
      <MoreButton setIndex={setIndex} index={index}/>
    </div>
  );
}

export default SushiContainer;
