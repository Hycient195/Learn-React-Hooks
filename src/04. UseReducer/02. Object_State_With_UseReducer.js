import { useReducer } from "react"

const initialState = {
  countOne: 0,
  countTwo: 0
}

const reducer = (currentState, action) =>{
  switch (action) {
    case "increament countOne":
      return { ...currentState, countOne: currentState.countOne + 1}
    
    case "decreament countOne":
      return { ...currentState, countOne: currentState.countOne - 1}

    case "increament countTwo":
      return { ...currentState, countTwo: currentState.countTwo + 1}

    case "decreament countTwo":
      return { ...currentState, countTwo: currentState.countTwo - 1}

    case "reset countOne":
      return { ...currentState, countOne: initialState.countOne}

    case "reset countTwo":
      return { ...currentState, countTwo: initialState.countTwo}

    case "reset all":
      return initialState;
  
    default:
      return currentState;
  }
}

export default function ObjecStateWithUseReducer(){

  const [ count, dispatchCount ] = useReducer(reducer, initialState)
  return(
    <>
      <h1>UseReducer With Object State</h1>
      <p>
        Just like the useState hook can be used with an object initial
        state, in the same way the useReducer hook can also be used with
        an object initial state.
      </p>
      <p>
        Let's see what this looks like in the example below
      </p>

      <code>
        <pre>
          {
            `
import { useReducer } from "react"

const initialState = {
  countOne: 0,
  countTwo: 0
}

const reducer = (currentState, action) =>{
  switch (action) {
    case "increament countOne":
      return { ...currentState, countOne: currentState.countOne + 1}
    
    case "decreament countOne":
      return { ...currentState, countOne: currentState.countOne - 1}

    case "increament countTwo":
      return { ...currentState, countTwo: currentState.countTwo + 1}

    case "decreament countTwo":
      return { ...currentState, countTwo: currentState.countTwo - 1}

    case "reset countOne":
      return { ...currentState, countOne: initialState.countOne}

    case "reset countTwo":
      return { ...currentState, countTwo: initialState.countTwo}

    case "reset all":
      return initialState;
  
    default:
      return currentState;
  }
}

export default function ObjecStateWithUseReducer(){

  const [ count, dispatchCount ] = useReducer(reducer, initialState)
  return(
    <>
      <h3>Count One = {count.countOne}</h3>
      <h3>Count Two = {count.countTwo}</h3>
      <button onClick={()=> dispatchCount("increament countOne")} >Increament Count 1</button>
      <button onClick={()=> dispatchCount("decreament countOne")} >Decreament Count 1</button>
      <button onClick={()=> dispatchCount("increament countTwo")} >Increament Count 2</button>
      <button onClick={()=> dispatchCount("decreament countTwo")} >Decreament Count 2</button>
      <button onClick={()=> dispatchCount("reset countOne")} >Reset Count 1</button>
      <button onClick={()=> dispatchCount("reset countTwo")} >Reset Count 1</button>
      <button onClick={()=> dispatchCount("reset all")} >Reset All</button>
    </>
  )
}
            `
          }
        </pre>
      </code>

    <p>
      The initial state consists of an object with properties "countOne" and
      "countTwo". In the reducer function, all the properties of the state are
      spread, and only the one to be modified is selected and overwritten, just like
      in the use of useStae with object initial state.
    </p>
     <dl>
        <dt><h3>Output</h3></dt>
        <dd>
          <h3>Count One = {count.countOne}</h3>
          <h3>Count Two = {count.countTwo}</h3>
          <button onClick={()=> dispatchCount("increament countOne")} >Increament Count 1</button>
          <button onClick={()=> dispatchCount("decreament countOne")} >Decreament Count 1</button>
          <button onClick={()=> dispatchCount("increament countTwo")} >Increament Count 2</button>
          <button onClick={()=> dispatchCount("decreament countTwo")} >Decreament Count 2</button>
          <button onClick={()=> dispatchCount("reset countOne")} >Reset Count 1</button>
          <button onClick={()=> dispatchCount("reset countTwo")} >Reset Count 1</button>
          <button onClick={()=> dispatchCount("reset all")} >Reset All</button>
        </dd>
     </dl>
    </>
  )
}