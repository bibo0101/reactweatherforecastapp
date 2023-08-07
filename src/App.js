//import logo from './logo.svg';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux';
import Weather from './components/weather';
import './App.css';

function App() {  
  return (
    <Provider store={store}>
    <div className="App">
      <Weather />
    </div>
  </Provider>
  );
}

export default App;
