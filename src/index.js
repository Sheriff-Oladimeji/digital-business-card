import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
function Page(){
  return(
    <div className='card'>
      <App/>
    </div>
  )
}
root.render(<Page/>)



