import React, { useState, useCallback } from "react";
import Child from "./Child";

export default function UseCallbackHook(){
  console.log("From callback parent")
  const [ countOne, setCountOne ] = useState(1);
  const [ countTwo, setCountTwo ] = useState(1);

  const byTwoMultiplyOne = useCallback(() =>{
    console.log("Count One Update");
    setCountOne( countOne * 2 );
  }, [countOne])

  const byTwoMultiplyTwo = useCallback(() =>{
    console.log("Count Two Update")
    setCountTwo( countTwo * 2 );
  }, [countTwo])

  return(
    <>
      <h1>The UseCallback Hook</h1>
      <p>
        Before diving into what the useCallback hook is and why
        it is used, I'll want us to study the breif example below,
        to understand our problem statement and how the useCallback
        hook enables us to address this issue.
      </p>
      <code>
        <pre>
          {
            `
import React, { useState } from "react";
import Child from "./Child";

export default function UseCallbackHook(){
  console.log("From callback parent")

  const [ countOne, setCountOne ] = useState(1);
  const [ countTwo, setCountTwo ] = useState(1);

  const byTwoMultiplyOne = () =>{
    console.log("Count One Update");
    setCountOne( countOne * 2 );
  }

  const byTwoMultiplyTwo = () =>{
    console.log("Count Two Update")
    setCountTwo( countTwo * 2 );
  }

  return(
    <>
      <Child count={countOne} multiplyByTwo={byTwoMultiplyOne} />
      <Child count={countTwo} multiplyByTwo={byTwoMultiplyTwo} />
    </>
  )
}
            `
          }
        </pre>
      </code>

      <p>
        The example above renders one component (Child) twice, with
        two different state variables and two different handlers 
        passed as props to the child component.
      </p>
      <p>
        When the page is mounted to the DOM and rendered, each child
        component is rendered twice because of the modifications of 
        the two different props they receive, making it a total of 
        four renders for the two components. This is not an issue, as
        it it supposed to be the default behaviour.
      </p>
      <p>
        Let's take a look at the content of the child component.
      </p>

      <code>
        <pre>
          {
            `
function ChildOne({ count, multiplyByTwo }){
  console.log("Rendered Child")
  return(
    <>
      <h3>Child One</h3>
      <div>
        <h3>Count One {count}</h3>
        <button onClick={multiplyByTwo} >Multiply Count 1</button>
      </div>
      
    </>
  )
}

export default ChildOne;
            `
          }
        </pre>
      </code>
      <p>
        The states of both components and handlers of handlers are
        separate and independent, but however, when any of them 
        calls its own multiply method, it caused the parent, itself,
        and even the other which is does not change state to re-render.
      </p>
      <p>
        In small applications this may not be an issue, but on larger
        applications could really be very detrimental to performance. 
        This is then where the useCallback hook now comes into play.
      </p>
      <p>
        The useCallback hook is a hook that prevents a function from
        running except when one of it's dependencies change or update.
      </p>
      <p>
        The useCallback hook carries this out by memoizing the callback
        function passed to it. Memoization is simply the process of 
        caching or storing a value so that it does not need to be 
        recalculated, except a dependency to the value changes.
      </p>
      <p>
        The useCallback function is used together with the "React.memo()"
        method, to prevent a component from re-rendering when its props
        or dependencies does not change.
      </p>
      <p>
        Let's see how this works as shown in the example below.
        Firstly, the child component is memoized
      </p>

      <dl><dd><h3>&gt; Child Component</h3></dd></dl>
      <code>
        <pre>
          {
            `
import React from 'react';

function ChildOne({ count, multiplyByTwo }){
  console.log("Rendered Child")
  return(
    <>
      <h3>Child One</h3>
      <div>
        <h3>Count One {count}</h3>
        <button onClick={multiplyByTwo} >Multiply Count 1</button>
      </div>
      
    </>
  )
}

export default React.memo(ChildOne);
            `
          }
        </pre>
      </code>
      <p>
        Then the multiplication handlers for the child components 
        are wrapped in the useCallback hook, and the state they 
        modify are passed as dependency in the array provides as 
        second argument to the useCallback hook.
      </p>

      <dl><dd><h3>&gt; Parent Component</h3></dd></dl>
      <code>
        <pre>
          {
            `
import React, { useState, useCallback } from "react";
import Child from "./Child";

export default function UseCallbackHook(){
  console.log("From callback parent")
  const [ countOne, setCountOne ] = useState(1);
  const [ countTwo, setCountTwo ] = useState(1);

  const byTwoMultiplyOne = useCallback(() =>{
    console.log("Count One Update");
    setCountOne( countOne * 2 );
  }, [countOne])

  const byTwoMultiplyTwo = useCallback(() =>{
    console.log("Count Two Update")
    setCountTwo( countTwo * 2 );
  }, [countTwo])

  return(
    <>
      <Child position="one" count={countOne} multiplyByTwo={byTwoMultiplyOne} />
      <Child position="two" count={countTwo} multiplyByTwo={byTwoMultiplyTwo} />
    </>
  )
}
            `
          }
        </pre>
      </code>
      <p>
        The dependency array on the useCallback hook similarly work
        the same way as the dependency array to useEffect.
      </p>
      <p>
        Using the useCallback hook specifies that a handle should 
        only be reinitialized only when a dependency to it changes,
        which in turn re-renders the component dependent on it.
      </p>

      <dl>
        <dt><h3>Example Output: </h3></dt>
        <dd>
          <Child position="One" count={countOne} multiplyByTwo={byTwoMultiplyOne} />
          <Child position="Two" count={countTwo} multiplyByTwo={byTwoMultiplyTwo} />
        </dd>
      </dl>
      <p>
        Check console for log output.
      </p>
    </>
  )
}