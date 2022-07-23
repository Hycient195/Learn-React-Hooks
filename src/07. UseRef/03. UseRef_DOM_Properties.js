import { useRef } from "react";

export default function UseRefDOMProperties(){
  const testElementRef = useRef();

  const setBackgroundColor = () =>{
    // Change background color;
    testElementRef.current.style.backgroundColor = "teal";
    // Change text color;
    testElementRef.current.style.color = "white";
    // Toggle class name
    testElementRef.current.classList.toggle("recent");
  }

  return(
    
    <>
      <dl><dd><h3>&gt; Instance 2, Accessing DOM Element Properties</h3></dd></dl>

      <code>
        <pre>
          {
            `
import { useRef } from "react";

export default function UseRefDOMProperties(){
  const testElementRef = useRef();

  const setBackgroundColor = () =>{
    testElementRef.current.style.backgroundColor = "teal";
    testElementRef.current.style.color = "white";

    // Toggle class name
    testElementRef.current.classList.toggle("recent");
  }

  return(
    <>
      <h3 className="default" ref={testElementRef}>Test Text</h3>
      <button onClick={setBackgroundColor} >Implement Style</button>
    </>
  )
}
            `
          }
        </pre>
      </code>

      <dl>
        <dt><h3>Example Output:</h3></dt>
        <dd>
          <h3 className="default" ref={testElementRef}>Test Text</h3>
          <button onClick={setBackgroundColor} >Implement Style</button>
        </dd>
      </dl>
    </>
  )
}