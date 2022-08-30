import { getByPlaceholderText } from "@testing-library/react";
import React from "react";

const Colors =  () =>{
  const ColorChange = (e) =>{
       document.body.style.backgroundImage = `linear-gradient(to left, ${e.target.id}, var(--primary-color))`
       document.querySelector(".Button-img").style.backgroundColor = e.target.id;
       document.querySelector(".Box-Color").style.backgroundColor = e.target.id;
       document.querySelector(".AddItem").style.color = e.target.id;
  }    
  return(
    <div className="Flex">
        <div id="red" onClick={ColorChange} onLoad={ColorChange} ></div>
        <div id="blue" onClick={ColorChange}></div>
        <div id="green" onClick={ColorChange}></div>
        <div id="black" onClick={ColorChange}></div>
        <div id="gray" onClick={ColorChange}></div>
        <div id="purple" onClick={ColorChange}></div>
        <div id="yellow" onClick={ColorChange}></div>
        <div id="orange" onClick={ColorChange}></div>
        <div id="brown" onClick={ColorChange}></div>
    </div>
  )
}
export default Colors