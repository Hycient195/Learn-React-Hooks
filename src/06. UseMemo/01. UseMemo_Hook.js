import { useState, useMemo } from 'react'

export default function UseMemoHook() {
  const [ countOne, setCountOne ] = useState(0);
  const [ countTwo, setCountTwo ] = useState(0);

  const increamentOne = () =>{
    let i = 0;
    while (i <  541900090) i++;
    setCountOne( countOne + 1 );
  }

  const halfCountOne = () => {
    return countOne % 2 === 0;
  }

  const increamentTwo = () =>{
    setCountTwo( countTwo + 1 );
  }

  return(
    <>
      <h1>The UseMemo Hook</h1>

      <dl>
        <dt><h3>Example Output</h3></dt>
        <dd>
          <h3>Count One = {countOne}  half of Count One {halfCountOne() ? "Even": "Odd"}</h3>
          <button onClick={increamentOne} >Increament Count 1</button>

          <h3>Count Two = {countTwo}</h3>
          <button onClick={increamentTwo} >Increament Count 2</button>
        </dd>
      </dl>
    </>
  )
}