import React, { Component } from 'react'
import MoviesGrid from './MoviesGrid'
import './App.css'
export default class Home extends Component {
  render() {
    return (
      <div  >
        <center class="MovieHeader"> 
          <h1>Featured Movies</h1>
          <MoviesGrid/>
        
        
        </center>
      
      </div>
    )
  }
}
