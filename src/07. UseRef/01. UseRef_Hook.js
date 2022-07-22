import UseRefPersist from "./02. UseRef_Persist";
import UseRefDOMProperties from "./03. UseRef_DOM_Properties";

export default function UseRefHook(){
  
  return(
    <>
      <h1>The UseRef Hook</h1>
      <p>
        The useRef hook has two distinct uses in React. These are
      </p>
      <ol>
        <li>
          To persist data (store stateless data that does not cause its 
          component to re-render) 
        </li>
        <li>To access the properties of DOM elements</li>
      </ol>
      <p>
        Let's take a deep dive to buttress a little bit on these two
        points
      </p>
      <br />
      <dl>
        <dt><strong>Persisting data:</strong></dt>
        <dd>
        <p>
          The useRef hook is used to store data that do not make a component
          to re-render. In other words, it can be used to preserve data between
          renders. For this reason, the useRef hook can be used to keep track
          of the number of times a component re-renders, because itself does
          not re-render whilst other stateful values re-render when their values
          are updated
        </p>
        <p>
          However because of this behaviour, the useRef hook cannot be used 
          to store stateful value, as the component would not re-render on the 
          update of such value.
        </p>
        </dd>

        <dt><strong>Accessing the property of DOM elements:</strong></dt>
        <dd>
            <p>
              The useRef hook can be used to access the properties of DOM
              elements, by invoking a useRef hook, and passing returned value
              to the "ref" prop or attribute of an element, and then manipulating
              the DOM element by specifying any of the DOM properties or methods
              on the "current" property (returnedValue.current) of the returned 
              value from the invocation of the useRef hook.
            </p>
            <p>
              The above looks like a pile of gibberish, but we would make this
              clearer, following the use of some examples.
            </p>
        </dd>
      </dl>

      <UseRefPersist />
      <UseRefDOMProperties />
    </>
  )
}