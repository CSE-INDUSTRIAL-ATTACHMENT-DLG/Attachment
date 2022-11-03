import { useState } from "react";
function Incr(props){
  let [num, setNum]= useState(0);
  let incNum =()=>{
    if(num<1000)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }

   return(
    
    <div>
        <h4 Align="left">Item {props.count}</h4>  
        <div class="input-group" Align="right">
            <div class="input-group1">
                <button class="Button" type="button" onClick={decNum}>-</button>
            </div>
            <input type="text" class="form-control" value={num} onChange={handleChange}/>
            <div class="input-group2">
                <button class="Button" type="button" onClick={incNum}>+</button>
            </div>
        </div>
    </div>
  );
}

export default Incr;