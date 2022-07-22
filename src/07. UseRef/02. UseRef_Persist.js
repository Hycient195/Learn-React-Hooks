import { useRef, useEffect, useState } from "react"

export default function UseRefPersist(){
  const referer = useRef(0)

  const [ random, setRandom ] = useState(0)
  
  const handleIncreament = () =>{
    setRandom(Math.floor(Math.random() * 100))
  }

  useEffect(()=>{
    referer.current += 1;
    console.log(referer)
  })


  return(
    <>
      <dl><dd><h3>&gt; Instance 1, Persisting Data</h3></dd></dl>
      <code>
        <pre>
          {
            `
import { useRef, useEffect, useState } from "react"

export default function UseRefPersist(){
  const referer = useRef(0)

  const [ random, setRandom ] = useState(0)
  
  const handleIncreament = () =>{
    setRandom(Math.floor(Math.random() * 100))
  }

  useEffect(()=>{
    referer.current += 1;
    console.log(referer)
  })


  return(
    <>
      <h3>{referer.current}</h3>
      <h3>{random}</h3>
      <button onClick={handleIncreament} >Re-render</button>
    </>
  )
}
            `
          }
        </pre>
      </code>
      <p>
        From the example above, a handler that generates a random number
        within the range of 0 to 100 is created. On every invocation, the 
        handler sets the state "random" to the value obtained from the randon
        number generation.
      </p>
      <p>
        The useRef hook in invoked, with an initial state of 0.
        Since the "handleIncreament" handler causes state change on the "random", 
        state value which in
        turn makes the component to re-render, a track of the re-render count 
        is kept by increamenting the "current" value property (referer.current) of the useRef 
        instance in the useEffect hook, without a dependency array, specifying
        that useEffect should run for every re-render.
      </p>
      <p>
        This works good because the useRef persists data, and does not
        cause re-renders. If a set or updating method of a useState instance
        was rather used, and called in the useEffect without a dependency array
        to keep track of re-render count, an infinite loop would have resulted
        instead.
      </p>

      <dl>
        <dt><h3>Example Output:</h3></dt>
        <dd>
          <h3>{referer.current}</h3>
          <h3>{random}</h3>
          <button onClick={handleIncreament} >Re-render</button>
        </dd>
      </dl>
    </>
  )
}