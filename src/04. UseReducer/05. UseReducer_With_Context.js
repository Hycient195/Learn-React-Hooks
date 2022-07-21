import { useContext } from 'react';
import { CountContext } from '../App';

export default function UseReducerWithContext(){

  const countObject = useContext(CountContext);
  return(
    <>
      <h1>Using UseReducer With UseContext</h1>
      <p>
        Having learnt from previous lessons the use of the useContext Hook
        and how it is used to pass a useReducer state whilst avoiding prop-drilling, 
        let's see how we can pass a state and its dispatch method from a parent 
        component, down to a child component nested deep down a heirachy.
      </p>
      <p>Consider the example below</p>

      <dl><dd><h3>&gt; In App.js</h3></dd></dl>
      <code>
        <pre>
          {
            `
import React, { useReducer } from 'react';
import './App.css';
import UseReducerWithContext from './04. UseReducer/05. UseReducer_With_Context';


const initialState = 0;
const reducer = (currentState, action) =>{
  switch (action) {
    case "increament":
      return currentState + 1
    case "decreament":
      return currentState - 1;
    case "reset":
      return initialState;
    default:
      return currentState
  }
}

export const CountContext = React.createContext();

function App() {

  const [ count, dispatchCount ] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <CountContext.Provider value={{ count, dispatchCount }} >
        <UseReducerWithContext />
      </CountContext.Provider>
      
    </div>
  );
}

export default App;

            `
          }
        </pre>
      </code>

      <p>
        From the parent component (App.js) the useReducer is called, passing
        in an appropriate reducer and initial state, and returning a new state
        and a dispatch method.
      </p>
      <p>
        A context is then created using the "React.createContext()" method. 
        The context's provider (CountContext.Provider) then wraps the component
        where the context value is to be used and the new state (count) and
        it's dispatch (dispatchCount) are passed as the context values, to 
        be accessible in the component(s) nested within.
      </p>
      <p>
        The state and it's dispatch method is then used in the child component
        as shown in the example below.
      </p>

      <dl><dd><h3>&gt; In The Child Component</h3></dd></dl>
      <code>
        <pre>
          {
            `
import { useContext } from 'react';
import { CountContext } from '../App';

export default function UseReducerWithContext(){

  const countObject = useContext(CountContext);

  return(
    <>   
      <h3>Count value from App.js = {countObject.count}</h3>
      <button onClick={()=> countObject.dispatchCount("increament")}>Increament</button>
      <button onClick={()=> countObject.dispatchCount("decreament")}>Decreament</button>
      <button onClick={()=> countObject.dispatchCount("reset")}>Reset</button>
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
          <h3>Count value from App.js used n child component = {countObject.count}</h3>
          <button onClick={()=> countObject.dispatchCount("increament")}>Increament</button>
          <button onClick={()=> countObject.dispatchCount("decreament")}>Decreament</button>
          <button onClick={()=> countObject.dispatchCount("reset")}>Reset</button>
        </dd>
      </dl>
    </>
  )
}