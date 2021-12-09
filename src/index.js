import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserStore from './store/UserStore';
import ArtStore from './store/ArtStore';

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    art: new ArtStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
