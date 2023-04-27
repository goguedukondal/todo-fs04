import React from "react";
import { useState } from "react";
import "./TodoItem.css";
import {  FaRegTrashAlt } from "react-icons/fa";
import { useItem } from "./DataProvider";
function TodoItem({item,id}) {
  const {deleteItem} = useItem()
  const [complete,setComplete] = useState(false)
   const fn =()=>{
     setComplete(!complete)
   }
  return (
    <div className="TodoItem_Container">
      
      <div className="input_part">
        <input type="checkbox" onClick={fn}  />
        <label style={{marginTop:"10px"}}>{item}</label>
      </div>
      <div className="edit_part">
        {complete?(<p style={{color:"green"}}>Completed</p>):(<p style={{color:"red"}}> Not Completed</p>)}
        
        <FaRegTrashAlt onClick={()=>{deleteItem(id)}} style={{marginTop:"20px"}} />
      </div>
    </div>
  );
}

export default TodoItem;
