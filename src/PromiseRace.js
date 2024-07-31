import React from "react";

const PromiseRace = () => {
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("promise 1 wwon");
    }, 1000);
  });

  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("promise 2 won");
    }, 1000);
  });

  Promise.race([promise1, promise2])
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.log(error, "promise error");
    });

  return(
  
  <div>

  </div>
  )
};

export default PromiseRace;
