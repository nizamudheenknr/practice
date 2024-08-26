import React from 'react'

const ArrayMe = () => {

    let fruit = ["lemon","banana","orange"]
    // fruit.push("cherry")
    // let lastFruit = fruit.pop()
    // let firstFruit = fruit.shift()

    // fruit.forEach(x=>console.log(x)
    // )
    // let uppercase = fruit.map(x=>x.toUpperCase())

    // console.log(uppercase);

    let leng = fruit.reduce((acc,fruit)=> acc+fruit.length,20)
    console.log(leng);
    

    
    const hello = function (){
        console.log("hello");
        
    }
    
    hello()
    // console.log(lastFruit);
    // console.log(fruit);
    // console.log(firstFruit);
    
    
    

  return (
    <div>

    </div>
  )
}

export default ArrayMe