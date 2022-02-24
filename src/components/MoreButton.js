import React from "react";

function MoreButton({ setIndex, index }) {
  function clickHandler(){
    console.log(index);
    if(index < 96){
      setIndex(index+4);
    } else{
      setIndex(0);
    }
    
  }

  return <button onClick={clickHandler}>More sushi!</button>;
}

export default MoreButton;
