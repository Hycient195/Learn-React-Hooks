import React from 'react';
import { user, article } from './constants'
import UseEffectCleanup from './02. UseEffect/04. UseEffect_Clenup';
import UseContextHook from './03. UseContext/01. UseContext';
import UseReducerHook from './04. UseReducer/01. UseReducerHook';
import ObjecStateWithUseReducer from './04. UseReducer/02. Object_State_With_UseReducer';
import ObjectActionWithUseReducer from './04. UseReducer/03. Object_Action_With_UseReducer';
import MultipleUseReducers from './04. UseReducer/04. Multiple_UseReducers';
import './App.css';


export const UserContext = React.createContext();
export const ArticleContext = React.createContext();

function App() {

  return (
    <div className="App">
      <h1 className="title centralize">React Hooks</h1>
      <hr />
      {/* <UseEffectCleanup /> */}
      <hr />
      <UserContext.Provider value={user} >
        <ArticleContext.Provider value={article} >
          {/* <UseContextHook /> */}
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
