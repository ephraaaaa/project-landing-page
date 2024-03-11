
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Navigation from './components/NavigationBar';
import Projects from './screens/Projects';
import './App.css'
function App() {
  return (
      <>
         <Navigation />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />    
         </Routes>
      </>
    );
}

export default App
//
// <Projects></Projects>

/*
<div>
      <Navigation></Navigation>
      <Home></Home>
   </div>
*/