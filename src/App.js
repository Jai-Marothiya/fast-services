import React, { useState } from "react";
import Box from "./components/Box";

function App() {
  const [x1 , setX1] =useState(1);
  const [x2 , setX2] =useState(2);
  const [x3 , setX3] =useState(3);
  const [x4 , setX4] =useState(4);
  const [x , setX] =useState(1);
  const [lastClick, setLast] = useState(1);
  let y=x;
  const handleClick=(e)=>{
     setX(e.target.innerHTML);
    //  // eslint-disable-next-line array-callback-return
    //  Array.of(e.target.parentElement.childNodes).map(child => {
    //    for(let i=1;i<5;i++){
    //     if(child[i].innerHTML !== e.target.outerText){
    //       console.log(child[i]);
    //       if(child[i].classList==="back")
    //       child[i].classList.remove('back');
    //     } 
    //    }  
    //  e.target.ParentElement.children[i].textContent
    if(lastClick)
    {
      if(lastClick!==1)
      lastClick.classList.remove('back');
      setLast(e.target);
    }
    e.target.classList.add("back");
}

  const handleArrowClick=(e)=>{
    if(e.target.id === "left"){
      if(x>1 ){
        setX(x-1);
      }
      // if(x>4){
      //   setX1(x1-1);
      //   setX2(x2-1);
      //   setX3(x3-1);
      //   setX4(x4-1);
      // }
    }
    console.log(x);
    if(e.target.id === "right"){
      y=x;
      y++;
      if(x<4){
        setX(y);
      }
      // if(x===x4){
      //   setX1(x1+1);
      //   setX2(x2+1);
      //   setX3(x3+1);
      //   setX4(x4+1);
      // }
      console.log(x);
    }
    console.log(x);
  }

  return (
    <div className="App">
      <h1>Fast Services</h1>
      <Box x={x}></Box>
      <div className="slider">
        <ul>
          <li onClick={handleArrowClick} id="left"> ⬅  </li>
          <li className="clicked" onClick={handleClick}>{x1}</li>
          <li className="clicked" onClick={handleClick}>{x2}</li>
          <li className="clicked" onClick={handleClick}>{x3}</li>
          <li className="clicked" onClick={handleClick}>{x4}</li>
          <li onClick={handleArrowClick} id="right"> ➡ </li>
        </ul>
      </div>
      
    </div>
  );
}

export default App;
