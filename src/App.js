import React, { useReducer } from 'react';
import { user, article } from './constants'
import UseEffectCleanup from './02. UseEffect/04. UseEffect_Clenup';
import UseContextHook from './03. UseContext/01. UseContext';
import UseReducerHook from './04. UseReducer/01. UseReducerHook';
import ObjecStateWithUseReducer from './04. UseReducer/02. Object_State_With_UseReducer';
import ObjectActionWithUseReducer from './04. UseReducer/03. Object_Action_With_UseReducer';
import MultipleUseReducers from './04. UseReducer/04. Multiple_UseReducers';
import './App.css';
import UseReducerWithContext from './04. UseReducer/05. UseReducer_With_Context';
import DataFetchingWithUseReducer from './04. UseReducer/06. Data_Fetching_With_UseReducer';
import UseCallbackHook from './05. UseCallback/01. UseCallback_Hook';
import UseMemoHook from './06. UseMemo/01. UseMemo_Hook';
import UseRefHook from './07. UseRef/01. UseRef_Hook';



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


export const UserContext = React.createContext();
export const ArticleContext = React.createContext();
export const CountContext = React.createContext();

function App() {

  const [ count, dispatchCount ] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1 className="title centralize">React Hooks</h1>
      <hr />
      <UseEffectCleanup />
      <hr />
      <UserContext.Provider value={user} >
        <ArticleContext.Provider value={article} >
          <UseContextHook />
        </ArticleContext.Provider>
      </UserContext.Provider>
      <hr />
      <UseReducerHook />
      <hr />
      <ObjecStateWithUseReducer />
      <hr />
      <ObjectActionWithUseReducer />
      <hr />
      <MultipleUseReducers />
      <hr />
      <CountContext.Provider value={{ count, dispatchCount }} >
        <UseReducerWithContext />
      </CountContext.Provider>
      <hr />
      <DataFetchingWithUseReducer />
      <hr />
      <UseCallbackHook />
      <hr />
      <UseMemoHook />a
      <UseRefHook />






      <hr />
      <footer>
        <p className='centralize' >Copyright &copy; <a target="_blank" rel='noreferrer' href="https://hycient.vercel.app">Hycient</a> 2022</p>
      </footer>





      {/* <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
