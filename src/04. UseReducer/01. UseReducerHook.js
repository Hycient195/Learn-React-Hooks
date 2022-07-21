import { useReducer } from "react";

const countInitialState = 0;
const countReducer = (state, action) =>{
  switch (action) {
    case "increament":
      return state + 1;

    case "decreament":
      return state - 1;

    case "reset":
      return countInitialState;

    default:
      return state;
  }
}

export default function UseReducerHook(){
  const [count, dispatchCount] = useReducer(countReducer, countInitialState)
  return(
    <>
      <h1>The UseReducer Hook</h1>
      <p>
        At the bare basics, the useReducer hook is a hook used to manage
        state in React.
      </p>
      <p>
        Backtracking a bit, one then may ask, what then is the use of the "useReducer" hook, 
        since state can also be manages using the "useState" hook?
      </p>
      <p>
        Well, that question would be addressed somewhere along the line in
        this resource, but for now it's good we keep to mind that under the 
        hood, the useStae hook is build using the useReducer hook.
      </p>
      <p>
        The useReducer hook behaves similarly to the the "reduce" function
        in javascript. They both accept a reducer function and an initial state
        and return a new state. They are not quite exact, but have quite a lot 
        things in common. The useReducer hook on the other hand excluding the
        new state, returns a second entity called a dispatch. We'll talk more 
        about the dispatch, but for now,
        let's then dive into the useReducer hook properly.
      </p>
      <p>
        The useReducer hook accepts two arguments as input.
      </p>
      <code>
        <pre>
          {
            `
useReducer(reducer, initialState);
            `
          }
        </pre>
      </code>
      <dl>
        <dt><strong>A Reducer</strong></dt>
        <dd>A reducer is a function where the logic used to manipulate
          state is contained. It accepts 2 input arguments which are 
          the <strong>Current state</strong> and <strong>Action</strong>.
          <p>
            The <strong>current state</strong> is the state maintained at
            the moment, and the <strong>action</strong> is the command that
            specifies how the state should be altered.
          </p>
          <p>
            It is popular common practice to implement the state manipulation
            logic that returns a new state new state based on the action specified,
            using a switch statement. We'll see all of this soon in the example
            to be specified below.
          </p>
        </dd>

        <dt><strong>An Initial State</strong></dt>
        <dd>
          The initial state as its name impllies is the defined state specified
          first, to which further modifications is to be made to.
        </dd>
      </dl>
      
      <br />

      <p>
        The useReducer hook on the output side returns two values which
        can be accessed using <abbr title="an expression that makes it possible
        to easily unpack values from an array">array destructuring</abbr>. These
        two values are as follows
      </p>
      <code>
        <pre>
          {
            `
const [ newState, dispatch ] = useReducer(reducer, initialState);
            `
          }
        </pre>
      </code>
      <dl>
        <dt><strong>The New State</strong></dt>
        <dd>
          This is the new state returned after the action (command) has
          been carried out on the current state.
        </dd>
        <br />
        <dt><strong>A Dispatch Method</strong></dt>
        <dd>
          This is a method used to dispatch or execute the action that would
          specify the state change. It accepts one argument, which is the
          action to be dispatch or carried out.
        </dd>
      </dl>

      <p>
        Let's take an example, to see how all of the above come into play
        by integrating with each other.
      </p>

      <code>
        <pre>
          {
            `
import { useReducer } from "react";

const countInitialState = 0;

const countReducer = (state, action) =>{
  switch (action) {
    case "increament":
      return state + 1;

    case "decreament":
      return state - 1;

    case "reset":
      return countInitialState;

    default:
      return state;
  }
}

export default function UseReducerHook(){
  const [count, dispatchCount] = useReducer(countReducer, countInitialState)
  return(
    <>
      <h3>Count value = {count} </h3>
      <button onClick={()=> dispatchCount("increament")} >Increament</button>
      <button onClick={()=> dispatchCount("decreament")} >Decreament</button>
      <button onClick={()=> dispatchCount("reset")} >Reset</button>
    </>
  )
}
            `
          }
        </pre>
      </code>

      <dl>
        <dt><h3>Example Output: </h3></dt>
        <dd>
          <h3>Count value = {count} </h3>
          <button onClick={()=> dispatchCount("increament")} >Increament</button>
          <button onClick={()=> dispatchCount("decreament")} >Decreament</button>
          <button onClick={()=> dispatchCount("reset")} >Reset</button>
        </dd>
      </dl>  

      <p>
        Let's take the useReducer hook further by seeing how it can be
        used with an object state.
      </p>
    </>
  )
}