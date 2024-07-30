import React from 'react'

const GeneratorFunction = () => {

    function* generator(){
        yield 1;
        yield 2;
        yield 3;
    }

    const generator1 = generator()

    console.log(generator1.next().value);
    console.log(generator1.next().value);
    console.log(generator1.next().value);
    console.log(generator1.next().value);
  return (
    <div>

    </div>
  )
}

export default GeneratorFunction