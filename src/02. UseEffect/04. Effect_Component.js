import { useState, useEffect } from "react";

export default function EffectComponent(){
  const [ count, setCount ] = useState(0)

  const handleIncreament = (e) =>{
    console.log("Increament ongoing")
    setCount(prevState => prevState += 1);
  }

  useEffect(()=>{
   window.addEventListener('click', handleIncreament)

   return () =>{
     console.log("Effects cleaned up");
     window.removeEventListener('click', handleIncreament);
   }
  }, [])

  return(
    <>
      <h3>Count value is  {count}</h3>
    </>
  )
}