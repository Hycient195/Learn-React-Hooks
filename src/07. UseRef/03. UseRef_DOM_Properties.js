import { useEffect } from "react";
import { useRef } from "react";

export default function UseRefDOMProperties(){
  const testElementRef = useRef();
  const inputRef = useRef();

  const setBackgroundColor = () =>{
    // Change background color;
    testElementRef.current.style.backgroundColor = "orange";
    // Change text color;
    testElementRef.current.style.color = "teal";
    // Toggle class name
    testElementRef.current.classList.toggle("recent");
  }

  useEffect(()=>{
    inputRef.current.focus();
  }, [])

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
  const inputRef = useRef();

  const setBackgroundColor = () =>{
    testElementRef.current.style.backgroundColor = "orange";
    testElementRef.current.style.color = "real";

    // Toggle class name
    testElementRef.current.classList.toggle("recent");
  }

  return(
    <>
      <h3 className="default" ref={testElementRef}>Test Text</h3>
      <input type="text" ref={inputRef} placeholder="input focused on page load" />
      <button onClick={setBackgroundColor} >Implement Style</button>
    </>
  )
}
            `
          }
        </pre>
      </code>

      <p>
        In the context of the instance above, a reference is created by 
        invoking the useRef hook, and assigning its return value to a 
        variable. 
      </p>
      <code>
        <pre>
          {
            `
const testElementRef = useRef();
const inputRef = useRef();
            `
          }
        </pre>
      </code>
      <p>
        A "ref" attribute or prop is specified on the element to be referenced,
        and the reference variable created from the useRef hook is passed as value
        to this "ref" prop or attribute.
      </p>
      <code>
        <pre>
          {
            `
<h3 className="default" ref={testElementRef}>Test Text</h3>
<input type="text" ref={inputRef} placeholder="input focused on page load" />

            `
          }
        </pre>
      </code>
      <p>
        In useEffect or an appropriate handler, the reference variable can then
        be used to access the DOM properties and methods of the element who received
        it as value to its "ref" prop. This is acheived by specifying the reference
        variable, calling it's "current" property, and then followed by the DOM
        property or method to be accessed. (example: testElementRef.current.style.color)
        which is used to access the text color of the element being referenced,
        and a new color property is assigned to the element on the invocation of
        the setBackgroundColor handler.
      </p>
      <code>
        <pre>
          {
            `
const setBackgroundColor = () =>{
  testElementRef.current.style.backgroundColor = "orange";
  testElementRef.current.style.color = "teal";
}

useEffect(()=>{
  inputRef.current.focus();
}, [])
            `
          }
        </pre>
      </code>

      <dl>
        <dt><h3>Example Output:</h3></dt>
        <dd>
          <h3 className="default" ref={testElementRef}>Test Text</h3>
          <input type="text" ref={inputRef} placeholder="input focused on page load" />
          <button onClick={setBackgroundColor} >Implement Style</button>
        </dd>
      </dl>
    </>
  )
}