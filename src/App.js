import React from 'react';
import Login from './pages/Login';
import Imoveis from './pages/Imoveis';
import NotFound from './pages/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AppLocacoesProvider from './context/AppLocacoesProvider';

function App() {
  return (
    <AppLocacoesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/imoveis" component={ Imoveis } />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>      
    </AppLocacoesProvider>
  );
}

export default App;
