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
  return (
    <div>

    </div>
  )
}

export default Promises