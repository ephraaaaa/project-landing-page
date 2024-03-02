import { useState } from 'react'

import './App.css'
import NavigationBar from './components/NavigationBar';
import ShortDescription from './components/ShortDescription';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <div>
        <NavigationBar></NavigationBar>
        <ShortDescription></ShortDescription>
        <Skills></Skills>
    </div>
    <footer className='bg-primary w-screen h-4 text-center text-white text-xs'>Download CV</footer>
    </div>
  
    );
}

export default App
