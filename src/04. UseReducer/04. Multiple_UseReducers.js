import { useReducer } from "react"

const countInitialState = 0;

const countReducer = (currentState, action) =>{
  switch (action){
    case "increament":
      return currentState + 1;

    case "decreament":
      return currentState - 1;

    default:
      return currentState;
  }
}

export default function MultipleUseReducers(){
  const [ countOne, dispatchCountOne ] = useReducer(countReducer, countInitialState);
  const [ countTwo, dispatchCountTwo ] = useReducer(countReducer, countInitialState);


  return(
    <>
      <h1>Using Multiple UseReduce Hooks</h1>
      <p>
        In a situation where there are more than one state sharing similar state 
        changes, and initial state, another way instead of creating the initial 
        state as an object with several properties, can be to create a singular 
        initial state and reducer, and make them to be shared by separate "useReducer" 
        hooks.
      </p>
      <p>
        Let's see how this can be acheived as shown in the example below.
      </p>
      <code>
        <pre>
          {
            `
import { useReducer } from "react"

const countInitialState = 0;

const countReducer = (currentState, action) =>{
  switch (action){
    case "increament":
      return currentState + 1;

    case "decreament":
      return currentState - 1;

    default:
      return currentState;
  }
}

export default function MultipleUseReducers(){
  const [ countOne, dispatchCountOne ] = useReducer(countReducer, countInitialState);
  const [ countTwo, dispatchCountTwo ] = useReducer(countReducer, countInitialState);


  return(
    <>
      <h3 >First Reducer Count = {countOne}</h3>
      <h3>Second Reducer Count = {countTwo}</h3>

      <button onClick={()=> dispatchCountOne("increament")}>Increament count 1</button>
      <button onClick={()=> dispatchCountOne("decreament")}>decreament count 1</button>
      <button onClick={()=> dispatchCountTwo("increament")}>Increament count 1</button>
      <button onClick={()=> dispatchCountTwo("decreament")}>Increament count 1</button>
    </>
  )
}
            `
          }
        </pre>
      </code>
      <p>
        The approach above when applied in applicable scenario prevents
        making the code overambigious. much easier to understand and 
        prevents unnecessary repetitions, thereby conforming to DRY 
        principles.
      </p>

      <dl>
        <dt><h3>Example Output:</h3></dt>
        <dd>
          <h3 >First Reducer Count = {countOne}</h3>
          <h3>Second Reducer Count = {countTwo}</h3>

          <button onClick={()=> dispatchCountOne("increament")} >Increament count 1</button>
          <button onClick={()=> dispatchCountOne("decreament")} >decreament count 1</button>
          <button onClick={()=> dispatchCountTwo("increament")} >Increament count 2</button>
          <button onClick={()=> dispatchCountTwo("decreament")} >Decreament count 2</button>
        </dd>
      </dl>

    </>
  )
}