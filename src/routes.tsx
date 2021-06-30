import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage';

// Em Route declare "path" e "component" para cada rota
// Exact somente é encessário para a rota /
export default function Routes() {
  return(
    <BrowserRouter>
      <Route path="/" exact component={ MainPage }/>
    </BrowserRouter>
  );
}