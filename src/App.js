import React from 'react';
import "./App.css";
import About from './components/about';
import Interest from './components/interests';
import Info from './components/info';
import Footer from './components/footer';
export default function App(){
  return(
    <div>
<Info/>
<About/>
<Interest/>
<Footer/>
    </div>
  )
}