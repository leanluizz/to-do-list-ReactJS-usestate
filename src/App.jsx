import PDF from "jspdf";
import TaskIcon from "./images/task-icon-box.png";
import Send from "./images/send.png";
import Pen from "./images/pen.png";
import './App.css';
import React from "react";
import Colors from "../src/components/colors.jsx";
import { useState } from "react";
import jsPDF from "jspdf";

function App (){
  const [tasks, settasks] = useState("");
   let [item, setitem] = useState([]);
    const [erro, seterro] = useState(" ");
     const inputTask = document.querySelector(".AddItem");
      const lists = document.querySelectorAll("li");
       const btn = document.querySelector(".Clear-Button");

       const handleInput = () =>{
         const inputTask = document.querySelector(".AddItem");
          settasks(inputTask.value);
}
    const AddItem = (e) => {
      e.preventDefault()
         setitem([...item ,tasks]);     
}
         let OpenColor = () => {
          document.querySelector(".Box-Color").style.display = "block";
}

window.addEventListener("click", () =>{
 document.querySelector(".Box-Color").style.display = "none";
})
   const Delete = (e) => {
    e.target.style.display = "none";
     const Selected = e.target.innerHTML
      const Position = item.indexOf(Selected);
       item.splice(Position, 1);
        if (item.length === 0) {
          Clean()
  }
}

const Clean = () =>{
  const lists = document.querySelectorAll("li");
     item.splice(0 ,item.length)
        lists.forEach((i, p, a) =>{
          i.style.display = "none";
   })
}
if (lists.length >= 1) {
       btn.style.display = "block";
}
    const Empty = (e) => {
     const Error =  document.querySelector(".Error");
       function MessageErrorSeconds() {
        seterro("Write anything first");
         setTimeout(() => {
          Error.style.display = "none";}, 5000);
          Error.style.display = "block";
}
if (inputTask.value === " " || inputTask.value === false) {
  MessageErrorSeconds() ;
   e.preventDefault();
 }else{
    inputTask.value = "";
} 
}     

const PDF = new jsPDF({
  orientation: "landscape",
  unit: "in",
  format: 'a4'
});
const GetPDF = (e) => {
  PDF.setFontSize(25);
  PDF.text("This is your list",1 , 2);
   let line = 3;
    item.map((e) =>{
     PDF.text(`-${e}`, 1, line++)
})
    if (item.length === 0) {
      e.preventDefault()
    }else{
      PDF.save("task.pdf")
      PDF.autoPrint()
    }
}

return(
<div className="body">
  <div className="Error">
   <p className="Error">{erro}</p> 
</div>
  <button onClick={Clean} className="Clear-Button">Clear</button>
<div className='Box-list'>
    <div className="Flex">
     <span><img src={TaskIcon} alt="icon" className="Task-icon" /></span>
       <h1 className='Task-List'>Task List</h1>
       <button onClick={GetPDF} className="PDF-Button">PDF</button>
    <div>
      <img src={Pen} alt="" className="Color-Select-Pen"  width="50vw" onMouseEnter={OpenColor}/>
    <div className="Box-Color">
      <h3>Select your color:</h3>                         
        <Colors></Colors>
</div>
</div>
</div>
<hr></hr>

<div className="ToDoList">
  <ul type="none">
    {item.map(e => <li width="50vw" onClick={Delete}> 
      {e}
</li>)}
</ul>
</div>
<form className="Box-input" onSubmit={AddItem}>
 <input type="text" className="AddItem" onChange={handleInput} placeholder="Write your tasks..."></input>
  <button type="submit" onClick={Empty}><img src={Send} alt="enter" className="Button-img"/></button>
</form>
</div>
</div>
)
}
export default App;