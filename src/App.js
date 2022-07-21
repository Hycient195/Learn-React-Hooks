import React from 'react';
import UseEffectCleanup from './02. UseEffect/04. UseEffect_Clenup';
import UseContextHook from './03. UseContext/01. UseContext';
import UseReducerHook from './04. UseReducer/01. UseReducerHook';
import ObjecStateWithUseReducer from './04. UseReducer/02. Object_State_With_UseReducer';
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
