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