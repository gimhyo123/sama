import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import "./index.css"
import Korea from './pages/World';
import World from './pages/World';

function App() {

  return (
    <div className="App">
      <Sidebar/>
      <section>
        <Routes>
          <Route path="/" element={<Korea/>}/>  
          <Route path="/world" element={<div>world</div>}/>  
        </Routes>
      </section>    
    </div>
  );
}

export default App;
