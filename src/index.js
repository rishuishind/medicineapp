import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FormContextProvider from './components/contexts/FormContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FormContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FormContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an a
