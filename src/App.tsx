import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Summary from './Components/Summary';
import './index.css'
import Korea from  './pages/Korea'

function App() {

  useEffect(() => {
axios.get('/test')
  }, [])

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
