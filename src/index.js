import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from './App';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
