import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import "./index.css"
import Vaccine from './pages/Vaccine';
import Korea from './pages/World';
import World from './pages/World';

function App() {

  return (
    <div className="App">
      <Sidebar/>
      <section>
        <Routes>
          <Route path="/" element={<Korea/>}/>  
          <Route path="/world" element={<World />} />
          <Route path="/vaccine" element={<Vaccine />} />
        </Routes>
      </section>    
    </div>
  );
}

export default App;
