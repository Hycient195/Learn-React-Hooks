import ContextChild from "./00. Context_Child"
import SubContextHook from "./00. Sub_Context_hook"

export default function UseContextHook(){
  return(
    <>
      <h1>The UseContext Hook</h1>
      <p>
        The useContext hook is a mechanism used in react to pass data
        from a parent component directly down to various nesting levels of child 
        components, without manually passing the data through all components
        between parent, and desired nested child component, otherwise known as
        "prop drilling".
      </p>
      <p>
        The useContext hook enables us to deliver data to only components, 
        that need certain specific data, without passing it through components
        that do not need them.
      </p>
      <p>
        The useContext hook like other hooks, is just at it's base still a 
        function.
      </p>
      <br />
      <p>
        However, before we go into the explanation of the useContext hook, let's 
        take a look at how context was previously used with the context API
      </p>
      <p>
        A context is largely divided into two parts; which are the "Context Provider", 
        and the "Context Consumer".  The Provider is coupled in  the parent component 
        passing the data, and
        the Consumer is coupled in the child component making use of (consuming) the data.
      </p>
      <p>
        Let's take an example on how the context API was used to handle context, before the
        advent of the useContext hook.
      </p>

      <code>
        <pre>
          {
            `
import React from 'react';
import UseContextHook from './03. UseContext/01. UseContext';
import './App.css';


export const UserContext = React.createContext();
export const ArticleContext = React.createContext();

function App() {
  const user = {
    name: "Michael",
    age: 42,
    isOnline: false
  }

  const article = {
    title: "Transitioning to a senior software engineer",
    author: "John Doe",
    timesRead: 30
  }

  return (
    <div className="App">
      <UserContext.Provider value={user} >
        <ArticleContext.Provider value={article} >
          <UseContextHook />
        </ArticleContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
            `
          }
        </pre>
      </code>
      <p>
        From the example above, a context is created using the "React.createContext()"
        method and exported. The provider property is called on the context, and a property "value"
        is specified, receiving the value to be passed down to children compnents.
      </p>
      <p>
        All components nested in a context provider have access to the value of that 
        context.
      </p>
      <p>
        The child component reveiving the context value can be seen as shown below.
      </p>

      <code>
        <pre>
          {
            `
import { UserContext, ArticleContext } from '../App';

export default function SubContextChild(){
  return(
    <div>
      <h2>Sub Context Child</h2>
      The component rendering this data follows the herirachy <br />
      <strong>{App.js > 01. UseContext > 00. Context_Child.js > 00 Sub_Context_child.js}</strong>
      <p>
        The data rendered below, comes from App.js using React Context.
      </p>
      <UserContext.Consumer>
        {(user) =>(
          <fieldset>
            <legend>From UserContext</legend>
            <h3>Name - {user.name}</h3>
            <h3>Age - {user.age}</h3>
          </fieldset>
        )}
      </UserContext.Consumer>
      <ArticleContext.Consumer>
        {article =>(
          <fieldset>
            <legend>From ArticleContext</legend>
            <h3>{article.title}</h3>
            <h3>{article.author}</h3>
          </fieldset>
        )}
      </ArticleContext.Consumer>
    </div>
  )
}
            `
          }
        </pre>
      </code>

      <p>
        The context exported from "App.js" is then imported in our component {`<SubContextChild/>`},
        its "Consumer" property is used.
      </p>
      <p>
        The {`<UserContext.Consumer>`} component using a render props pattern, gets access to
        the data passed from the context provider in "App.js", and passes the data down using 
        render props anonymous function, which return the conent to be rendered to the DOM.
      </p>
      <p>
        Now, let's fast forward, the "useContext" hook, makes rendering context values in child
        component my minimizing the verbose syntax used above in the context consumer.
      </p>
      <p>
        Let's see how the useContext hook simplifies the verbose syntax used above.
      </p>

      <code>
        <pre>
          {
            `
import { useContext } from 'react';
import { UserContext, ArticleContext } from '../App';


export default function SubContextHook(){
  const userContextValue = useContext(UserContext);
  const articleContextValue = useContext(ArticleContext);
  return(
    <>
      <h2>Child Component Using Context Hook</h2>
      {
        <fieldset>
          <legend>From UserContext</legend>
          <h3>Name - {userContextValue.name}</h3>
          <h3>Age - {userContextValue.age}</h3>
        </fieldset>
      }
      {
        <fieldset>
          <legend>From ArticleContext</legend>
          <h3>{articleContextValue.title}</h3>
          <h3>{articleContextValue.author}</h3>
        </fieldset>
      }
    </>
  )
}
            `
          }
        </pre>
      </code>
      <p>
        The useContext is called and the context exported from App.js is
        passed to it as input argument, and it returns the data passed
        from the context profider, and is rendered in the component. 
        Simple, and pretty straighforward.
      </p>
      <p>
        The outputs of both methods used above are as shown below.
      </p>
      <br />

      The component rendering this data follows the herirachy <br />
      <strong>{`App.js > 01. UseContext > 00. Context_Child.js > 00 Sub_Context_child.js`}</strong>
      <p>
        The data rendered below, comes from App.js using React Context.
      </p>

      <ContextChild />
      <SubContextHook />
    </>
  )
}