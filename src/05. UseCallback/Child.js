import React from 'react';

function ChildOne({ position, count, multiplyByTwo }){
  console.log("Rendered Child")
  return(
    <>
      <h3>Child {position}</h3>
      <div>
        <h3>Count = {count}</h3>
        <button onClick={multiplyByTwo} >Multiply Count 1</button>
      </div>
      
    </>
  )
}

export default React.memo(ChildOne);