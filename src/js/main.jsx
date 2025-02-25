import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecondCounter from './components/SecondCounter'

const Counter = () => {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => { 
      const interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return <SecondCounter seconds={seconds} />;
    };

let app = document.getElementById('root')

ReactDOM.createRoot(app).render(<Counter />)
