import { useEffect, useReducer } from "react"

const initialState = {
  loading: true,
  data: {},
  error: ''
}

const reducer = (currentState, action) =>{
  switch(action.type){
    case "FETCH_SUCESSFUL":
      return {
        loading: false,
        data: action.payload,
        error: ''
      }
    case 'FETCH_FAILURE':
      return {
        loading: false,
        data: {},
        error: "Error occoured in fetching data"
      }
    default:
      return currentState;
  }
}

export default function DataFetchingWithUseReducer(){
  const [ user, dispatchFetch ] = useReducer(reducer, initialState);

  useEffect(()=>{
    (async()=>{
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const result = await res.json();
        console.log(result)
        dispatchFetch({ type: "FETCH_SUCESSFUL", payload: result })
      } catch (error) {
        dispatchFetch({ type: "FETCH_FAILURE"})
      }  
    })()
  },[])


  return(
    <>
      <h1>Data Fetching Using UseReducer And UseEffect</h1>
      <p>
        From out previous exercise of fetching data using useEffect and
        useState, we have seen how both come together to enable making of 
        requests, and rendering response to the DOM.
      </p>
      <p>
        However now, instead of useState, we shall be making use of the 
        useReducer hook to store state.
      </p>
      <p>
        Before delving deep, let's understand how this is acheived by 
        taking a look at the example below.
      </p>

      <dl><dd><h3>&gt; In Data_Fetching_With_UseReducer.js</h3></dd></dl>
      <code>
        <pre>
          {
            `
import { useEffect, useReducer } from "react"

const initialState = {
  loading: true,
  data: {},
  error: ''
}

const reducer = (currentState, action) =>{
  switch(action.type){
    case "FETCH_SUCESSFUL":
      return {
        loading: false,
        data: action.payload,
        error: ''
      }
    case 'FETCH_FAILURE':
      return {
        loading: false,
        data: {},
        error: "Error occoured in fetching data"
      }
    default:
      return currentState;
  }
}
            `
          }
        </pre>
      </code>

      <p>
        The initial state and reducer are defined as shown above.
        The initial state is an object with properties of "loading",
        "data" and "error" corresponding the different necessary 
        properties of the request.
      </p>
      <p>
        The reducer checks for an action type of "FETCH_SUCESSFUL", 
        terminates the loading by setting the true initial loading
        state to false, assigns the payload of the action containing
        the data fetched to the "data" property of the current state,
        and sets the state error to an empty string since no error was
        encountered in fetching the data.
      </p>
      <p>
        On request failure, loading is set to false, no data is returned
        and the error property is set to an appropriate error message.
        Optionally, the error message can come from the action object.
      </p>
      <p>
        After these the request is made in the component as shown below
      </p>

      <dl><dd><h3>&gt; In Data_Fetching_With_UseReducer.js</h3></dd></dl>
      <code>
        <pre>
          {
            `
export default function DataFetchingWithUseReducer(){
  const [ user, dispatchFetch ] = useReducer(reducer, initialState);

  useEffect(()=>{
    (async()=>{
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const result = await res.json();
        console.log(result)
        dispatchFetch({ type: "FETCH_SUCESSFUL", payload: result })
      } catch (error) {
        dispatchFetch({ type: "FETCH_FAILURE"})
      }  
    })()
  },[])


  return(
    <>
      { user.loading && <h3>Loading...</h3>}
      { user.error && <h3>{user.error}</h3> }
      {
        !user.loading &&
        <>
          <p>First User From JSON Placeholder</p>
          <h3>Name: {user.data.name}</h3>
          <h3>Email: {user.data.email}</h3>
          <h3>Website: {user.data.website}</h3>
        </>
      }
    </>
  )
}
            `
          }
        </pre>
      </code>

      <p>
        In the example syntax above, a request is made at the mounting
        of the component using useEffect.
      </p>
      <p>
        On a success event, a the dispatch method (dispatchFetch) is invoked,
        passing in the sucessful flag "FETCH_SUCESSFUL", and the result
        obtained from the fetch as the action's payload
      </p>
      <p>
        On a failure event, a failure flag "FETCH_FAILURE" is dispatched
        as the action type and the reducer takes care of the error event
        as defined in a failure case.
      </p>
      <p>
        The loading state, error and the data obtained are then rendered
        appropriately as defined by the state of the request.
      </p>
      <p>
        Output is as shown below.
      </p>
      <dl>
        <dt><h3>Example Output:</h3></dt>
        <dd>
          { user.loading && <h3>Loading...</h3>}
          { user.error && <h3>{user.error}</h3> }
          {
            !user.loading &&
            <>
              <p>First User From JSON Placeholder</p>
              <h3>Name: {user.data.name}</h3>
              <h3>Email: {user.data.email}</h3>
              <h3>Website: {user.data.website}</h3>
            </>
          }
        </dd>
      </dl>
    </>
  )
}