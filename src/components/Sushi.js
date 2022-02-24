import React, { useState } from "react";

function Sushi({ sushi, balance, setBalance }) {
  const [isEaten, setIsEaten] = useState(false);

  function handleClick(){
    if(balance>=sushi.price){
      setIsEaten(true);
      setBalance(balance-sushi.price);
    } else{
      alert("You don't have enough money left to buy that!")
    }
    
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
