import React from 'react';
import Login from './pages/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AppLocacoesProvider from './context/AppLocacoesProvider';

function App() {
  return (
    <AppLocacoesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
        </Switch>
      </BrowserRouter>
      
    </AppLocacoesProvider>
  );
}

export default App;
