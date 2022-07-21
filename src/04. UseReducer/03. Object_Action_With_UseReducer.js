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
      <dl>
        <dt><h3>Example Output:</h3></dt>
        <dd>
          <h3>Count One = {count.countOne}</h3>
          <h3>Count Two = {count.countTwo}</h3>
          <button onClick={()=> dispatchCount({action: "countOne add one", value: 1})} >Count One Add 1</button>
          <button onClick={()=> dispatchCount({action: "countOne add three", value: 3})} >Count One Add 1</button>
          <button onClick={()=> dispatchCount({action: "countTWO add one", value: 1})} >Count One Add 1</button>
          <button onClick={()=> dispatchCount({action: "countTwo add three", value: 3})} >Count One Add 1</button>
          
        </dd>
      </dl>
    </>
  )
}