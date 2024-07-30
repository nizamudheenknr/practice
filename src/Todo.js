
import React, { useState } from 'react'

const Form = () => {
  const [add,setAdd]=useState([])
  const [input,setInput]=useState('')
  const [editid,setEditid]=useState(null)
  const [edittext,setEdittext]=useState('')

  const setHandler=()=>{
   
    if(editid){
      setAdd(add.map((x)=>(x.id===editid?{...x,task:edittext}:x)))
      setEditid(null)
      setEdittext('')
    }else{

    setAdd([...add,{id:Date.now(),task:input}])
    setInput('')
    }
  }
  console.log(add);
  
  const deleteHandler=(id)=>{
    const deleted=add.filter((x)=>(x.id!==id))
    setAdd(deleted)
  }
  
    const editHandler=(id,task)=>{
      setEditid(id)
      setEdittext(task)
    }
  return (
    <div>
          <input value={editid?edittext:input} onChange={(e)=>editid?setEdittext(e.target.value):setInput(e.target.value)} type='text'/>
          <button onClick={()=>setHandler()}>{editid?"save":"add"}</button>
          {
            add.map((item)=>(
              <div>
                <h1>
                  {item.task}</h1>
                  <button  onClick={()=>{deleteHandler(item.id)}}>delete</button>
      
                  <button onClick={()=>editHandler(item.id,item.task)}>edit</button>
                
              </div>
            ))
          }
    </div>
  )
}

export default Form


