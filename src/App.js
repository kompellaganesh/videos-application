import React, { Component } from 'react'
import Home from './Home'
import MoviePage from './MoviePage'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div  >
        <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home/>}/>
            <Route path='/movie' element={<MoviePage/>}/>
            <Route path='*' element={<Home/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
      
      </div>
    )
  }
}
