import {React, useState} from 'react'
import Box1 from './Box1.js'
import { Avatar } from '@mui/material';
 






function App() {
  const[data,setdata]=useState(Array(9).fill(0));
  const[decide,setdecide]=useState(-1);
  const[text,setText]=useState("");
  const[val,setVal]=useState("");
  const[val1,setVal1]=useState("");
  const[count,setCount]=useState(0);
   // xo
  const xo=(key)=>{
    
    const newData = [...data];
    
    if (decide === -1) {
      setdecide(1);
      newData[key] = 1;
      console.log(newData[key]);
      
    } else {
      setdecide(-1);
      newData[key] = -1;
      console.log(newData[key]);
      
    }

    setdata(newData);

    const a=check();
    if(a.f){
      if( a.student===1){
        
        
        setText(val+"  "+ "WINS");
      }else{
       
        
        setText(val1+"  "+ "WINS");
      }
    }
    

  }
   //check function for checking of wining
  const check=()=>{
     const a=[...data];
    const t={
      f:false,
      student:0
     }
     for(let i=0;i<=9;i=i+3){
         
    
        if(a[i]+a[i+1]+a[i+2]===3){
              t.f=true;
              t.student=1;
                return t;
          }else if(a[i]+a[i+1]+a[i+2]===-3){
          t.f=true;
          t.student=2;
            return t;

        }
        
     }
     
     for(let i=0;i<=2;i++){
     
      if(a[i]+a[i+3]+a[i+6]===3){
        t.f=true;
        t.student=1;
          return t;
      }else if(a[i]+a[i+3]+a[i+6]===-3){
        t.f=true;
        t.student=2;
          return t; 
      }
      
     
  }
  if(a[0]+a[8]+a[4]===3){
       t.f=true;
        t.student=1;
          return t;
   }else if(a[0]+a[8]+a[4]===-3){
    t.f=true;
    t.student=2;
      return t; 
  }
  if(a[4]+a[6]+a[2]===3){
    t.f=true;
    t.student=1;
          return t;
  }else if(a[4]+a[6]+a[2]===-3){
    t.f=true;
    t.student=2;
      return t;
  }
   
     return t;
}
    //for seting the value of 
     const change24=()=>{
      if(count===0){
      setCount(1);
       }else{
      setCount(0);
      }
      
     }

     
     
    
     

  



  
  return (
   <>
   <div className=' m-4 p-4 border border-secondary border-3 rounded'>
    
   <div className="container">
    
    <div className=' m-2 p-2 d-flex justify-content-between'>
      <div className='d-flex flex-row'>
      <Avatar sx={{background:`${count===0?"green":"#20809d"}` }} variant="rounded"></Avatar>
      <input type="text" name="" className='mx-1 m-l-3' value={count===0?val:val1} onChange={(e)=>{{count===0?setVal(e.target.value):setVal1(e.target.value)}}} style={{color:`${count===0?"green":"#20809d"}`}} placeholder={`Player ${count===0?1:2}`}/>
      <button onClick={change24} className={`btn btn-outline-${count===0?"success":"info"}`}>Click</button>
      </div>
      <div  className='  d-flex flex-row justify-content-center align-items-center'><h2 className={`m-1 text text-${decide===-1?"success":"info"}`}>Tic -</h2><h2 className='m-1 text text-light'>Tac - </h2><h2 className={`m-1 text text-${decide===1?"success":"info"}`}>Toe</h2></div>
      <div  className='text-success'><h3>{text}</h3></div>
      
    </div>
    
    <div style={{height:250}} className={`bg-${decide===-1?"success":"info"} d-flex justify-content-center align-items-center`}><h1>{decide===-1?val:val1}</h1></div>
    <div className='mx-2 my-2'>
   <div className="d-flex justify-content-center align-items-center">
    <div><Box1  key={0} symbol={data[0]} xo={()=>xo(0)}/></div>
    <div><Box1  key={1} symbol={data[1]} xo={()=>xo(1)} /></div>
    <div><Box1  key={2} symbol={data[2]} xo={()=>xo(2)} /></div>
   </div>
   <div className="d-flex justify-content-center align-items-center">
    <div><Box1  key={3} symbol={data[3]} xo={()=>xo(3)} /></div>
    <div><Box1  key={4} symbol={data[4]} xo={()=>xo(4)} /></div>
    <div><Box1  key={5} symbol={data[5]} xo={()=>xo(5)} /></div>
   </div>
   <div className="d-flex justify-content-center align-items-center">
    <div><Box1  key={6} symbol={data[6]} xo={()=>xo(6)} /></div>
    <div><Box1  key={7} symbol={data[7]} xo={()=>xo(7)} /></div>
    <div><Box1  key={8} symbol={data[8]} xo={()=>xo(8)} /></div>
   </div>
   </div>
   </div>
   </div>
   
    
   </>
  )
}

export default App