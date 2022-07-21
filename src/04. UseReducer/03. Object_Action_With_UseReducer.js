import { useReducer } from "react";

const countInitialState = {
  countOne: 0,
  countTwo: 0
}

const countReducer = (currentState, action) =>{
  switch(action.type){
    case "countOne add one":
      return { ...currentState, countOne: currentState.countOne + action.value }
    case "countOne add three":
      return { ...currentState, countOne: currentState.countOne + action.value }
    case "countTwo add one":
      return { ...currentState, countTwo: currentState.countTwo + action.value }
    case "countTwo add three":
      return { ...currentState, countTwo: currentState.countTwo + action.value }
  }
}

export default function ObjectActionWithUseReducer(){
  const [ count, dispatchCount ] = useReducer(countReducer, countInitialState)
  return(
    <>
      <h1>UseReducer With Action As Object</h1>
      <p>
        Additionally to using an object as initial state, the action passed
        to the reducer function can also be an object. A reson for specifying 
        the action as an object is to further influence the behaviour of the 
        state change or transition based on other characteristcs of the action
        as opposed to if the action was just a single value.
      </p>
      <p>
        Let's see in the example below, how the state chane is affected by 
        different peoperties of the action object.
      </p>

      <code>
        <pre>
          {
            `
import { useReducer } from "react";

const countInitialState = {
  countOne: 0,
  countTwo: 0
}

const countReducer = (currentState, action) =>{
  switch(action.type){
    case "countOne add one":
      return { ...currentState, countOne: currentState.countOne + action.value }
    case "countOne add three":
      return { ...currentState, countOne: currentState.countOne + action.value }
    case "countTwo add one":
      return { ...currentState, countTwo: currentState.countTwo + action.value }
    case "countTwo add three":
      return { ...currentState, countTwo: currentState.countTwo + action.value }
  }
}

export default function ObjectActionWithUseReducer(){
  const [ count, dispatchCount ] = useReducer(countReducer, countInitialState)
  return(
    <>
      <h3>Count One = {count.countOne}</h3>
      <h3>Count Two = {count.countTwo}</h3>
      <button onClick={()=> dispatchCount({type: "countOne add one", value: 1})} >Count One Add 1</button>
      <button onClick={()=> dispatchCount({type: "countOne add three", value: 3})} >Count One Add 3</button>
      <button onClick={()=> dispatchCount({type: "countTwo add one", value: 1})} >Count Two Add 1</button>
      <button onClick={()=> dispatchCount({type: "countTwo add three", value: 3})} >Count Two Add 3</button>
    </>
  )
}
            `
          }
        </pre>
      </code>

      <p>
        From the example above, the action to be performed is now dependent 
        not on the action itself as seen previously, but on the action's "type"
        property (action.type). Depending on the type of the instruction (action.type),
        a corresponding action is carried out, this action is also influenced by
        the action's "value" property (action.value)
      </p>
      <p>
        From the example above, "action.value" specifies the amount to be added to 
        the currentState count of "countOne" or "countTwo" as specified in the 
        dispatch method called by each button with different value of "action.value"
      </p>
      <p>
        In addition to these, the action object can also have several other properties
        which could further influence the state chage of the existing state to the new
        state. 
      </p>
      <p>
        Output is of the example above is as shown below.
      </p>

      <dl>
        <dt><h3>Example Output:</h3></dt>
        <dd>
          <h3>Count One = {count.countOne}</h3>
          <h3>Count Two = {count.countTwo}</h3>
          <button onClick={()=> dispatchCount({type: "countOne add one", value: 1})} >Count One Add 1</button>
          <button onClick={()=> dispatchCount({type: "countOne add three", value: 3})} >Count Two Add 3</button>
          <button onClick={()=> dispatchCount({type: "countTwo add one", value: 1})} >Count Three Add 1</button>
          <button onClick={()=> dispatchCount({type: "countTwo add three", value: 3})} >Count One Add 3</button>   
        </dd>
      </dl>
    </>
  )
}