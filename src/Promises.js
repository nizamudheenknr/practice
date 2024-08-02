import React from 'react'

const Promises = () => {
const promise1 = new Promise((resolve,reject)=>{
    resolve(["javascript","java"])

})

const promise2 = new Promise((resolve,reject)=>{
    resolve(["React.js","Redux.js"])


})

promise1.then((res)=>{
    console.log(res);
})

promise2.then((res)=>{
    console.log(res);
})

const number = [1,2,3,4,5]

const doubleNumber = number.reduce((accumilator,currentValue)=>{
  return accumilator + currentValue
},0)

console.log(doubleNumber);

  return (
    <div>

    </div>
  )
}

export default Promises