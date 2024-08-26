// import React, { useRef, useState } from 'react'

// const Testing = () => {

//     // const handleClick = function(){
//     //     console.log('button clicked');
//     // }

//     const inputRef = useRef(null)

//     const [input,setInput]=useState([])

//     const handleSubmit =(event)=> {
//     event.preventDefault()
//     const currentInputvalue = inputRef.current.value
//     setInput([...input,currentInputvalue])
//     inputRef.current.value="";
    
//   }
//   console.log(input);
    
//   return (

//     <form onSubmit={handleSubmit}>
//     <div style={{display:'flex'}}>
//          {/* <button onClick={handleClick} > click me</button> */}
  
//           <div  style={{background:"lightblue",height:"600px",width:"50%"}}>
//             <input  ref={inputRef} />
//                <button type='submit'>submit</button>
//           </div>
          

//           <div  style={{background:"lightyellow",height:"600px",width:"50%"}}>
//             <>
//             {input.map((item,index)=>(
//               <h1 key={index}>{item}</h1>
//             ))}
//          </>
//           </div>

       

//     </div>
//     </form>
//   )
// }

// export default Testing

import React, { useRef, useState } from 'react'

const Testing = () => {

  const inputRef = useRef(null)
const [input,setInput]=useState([])

const handleSubmit=(event)=>{
  event.preventDefault()
const curretnValue = inputRef.current.value
setInput([...input,curretnValue])

}
console.log(input)


  return (
  <form onSubmit={handleSubmit}>
    <div style={{display:"flex"}}>
      <div style={{background:"darkgreen",height:"600px",width:"50%"}}>
        <input type='text' ref={inputRef}/>
        <button type='submit'>submit</button>

      </div>

      <div style={{background:"olive",height:'600px',width:"50%"}}>
       {input.map((item,index)=>(
          <h1 key={index}>{item}</h1>
       ))}
      </div>



    </div>
  </form>
  )
}

export default Testing