import React,{useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PreLoaders from './components/PreLoaders';
import Navigation from './components/Navigation';
import LandingPage from './Pages/LandingPage';
import Projects from './components/Projects';
import ResumePage from './Pages/ResumePage';
import Contact from './components/Contact';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
     setLoading(false);
    }, 1000)
  },[])

  return (
    <div className="App">
      {loading === true ? <PreLoaders stats={loading} /> : (
        <>
          <Navigation />
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<LandingPage />} />
              <Route path="/resume" exact element={<ResumePage />} />
              <Route path="/projects" exact element={<Projects />} />
              <Route path="/contact" exact element={<Contact />} />
            </Routes>
          </BrowserRouter>
      </>
      )}



    </div>
  );
}

export default App;
