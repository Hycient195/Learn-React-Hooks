import { useState } from "react";
import EffectComponent from "./04. Effect_Component";

export default function UseEffectCleanup (){
  const [ countToggle, setCountToggle ] = useState(true)

  return(
    <>
      <h1>UseEffect Cleanup</h1>
      <p>
        The useEffect Cleanup is a function that performs certain
        actions on a component, before it unmounts from the DOM.
        These actions includes unsubscription from events, deactivating
        event listeners and cleaning up state.
      </p>
      <p>
        In essence, useEffect cleanup serves the purpose of undoing actions
        carried out inside of the useEffect hook.
      </p>
      <p>
        The useEffect cleanup funciton is declared as the return value of
        the function accepted by the useEffect hook.
      </p>
      <p>
        Taking a practical example of the useEffect cleanup can be the 
        removal of an event listener defined in the body of useEffect, to
        listen for certain event, while a component is mounted.
        When the component is removed or unmounted from the DOM, useEffect
        cleanup allows us to deactivate all event listeners declared in the 
        component, so that they do not run while the component is unmounted 
        from the DOM, as this could cause errors.
      </p>
      <p>
        Let's see what the useEffect cleanup really is in code.
      </p>

      <code>
        <pre>
          {
            `
useEffect(()=>{
  // Effects go in here

  return () =>{
    // Effect Cleanup used to undo effects go in here
  }
}, [])
            `
          }
        </pre>
      </code>

      <p>
        Let's go further to take a look at a practical applicatin of
        useEffect cleanup.
      </p>

      <code>
        <pre>
          {
            `
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
            `
          }
        </pre>
      </code>
      <p>
        In the example above, a "click" event is appended to the "window" object
        to trigger the "handleIncreament" function which increament the "count" 
        state variable by +1 any time a click is made anywhere in the DOM
      </p>
      <p>
        The {`<EffectComponent />`} is imported in another component, and 
        is made to display conditionally on the toggle of a button
      </p>
      <code>
        <pre>
          {
            `
import { useState } from "react";
import EffectComponent from "./04. Effect_Component";

export default function UseEffectCleanup (){
  const [ countToggle, Toggle Count
    setCountToggle ] = useState(true)

  return(
    <>   
      <button onClick={() => setCountToggle(!countToggle)}>Toggle Count</button>
      { countToggle && <EffectComponent />}
    </>
  )
}         
            `
          }
        </pre>
      </code>
      <p>
        The function returned by the callback function passed as first argument
         to useEffect is actually where the "useEffect cleanup" actually occours.
      </p>
      <p>
        The cleanup specified in the example above is a "removeEventListener" 
        which is used to prevent the "handleIncreament" event from running whenver 
        the {`<EffectComponent />`} component is unmounted by the toggle in its parent component.
      </p>
      <p>
        Without the use of "useEffect cleanup" in the example above, the "handleIncreament"
        function would keep running in background (as can be seen in the console)
        even after the {`<EffectComponent />`} is unmounted from the DOM by its parent component. 
        This is undesierable, and could introduce potential bugs
        into the web application.
      </p>
      <p>
        The useEffect cleanup performs similarly to "componentWillUnmount" lifecycle
        hook in class components.
      </p>
      <p>
        UseEffect cleanup is suitable for cancelling subscriptions, removing timers,
        and even removing event handlers as seen in the example above.
      </p>

      <h3>Example Output:</h3>
      <button onClick={() => setCountToggle(!countToggle)}>Toggle Count</button>
      { countToggle && <EffectComponent />}
    </>
  )
}