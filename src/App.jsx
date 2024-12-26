import React from 'react'
import { useState,useEffect } from 'react'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import ThreadList from './routes/ThreadList'
import NewThread from './routes/NewThread'
import './App.css'


export const App = () => {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" Component={ThreadList}></Route>
          <Route path="/threads/new" Component={NewThread}></Route>
        </Routes>
      </div>
    </BrowserRouter>
      
  );
};

export default App
