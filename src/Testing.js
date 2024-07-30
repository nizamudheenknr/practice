import React from 'react'

const Testing = () => {

function* simpleGenerator (){
    yield 1;
    yield 2;
    yield 3;

}

const generator = simpleGenerator()
 
 console.log(generator.next().value);
 console.log(generator.next().value);
 console.log(generator.next().value);
 console.log(generator.next().value);
 console.log(generator.next().value);
  return (
    <div>
      
      

    </div>
  )
}

export default Testing