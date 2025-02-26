import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecondCounter from './components/SecondCounter'

let value = 0;
let app = document.getElementById('root')

function count (){
  setInterval (() => {
    value++
    ReactDOM.createRoot(app).render(<SecondCounter seconds={value} />);
  }, 1000);
};

count()
