import UseEffectCleanup from './02. UseEffect/04. UseEffect_Clenup';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1 className="title centralize">React Hooks</h1>
      <hr />
      <UseEffectCleanup />
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
