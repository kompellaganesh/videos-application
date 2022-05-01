import React, { Component } from 'react'
import './MoviesGrid.css'
// import { Link } from "react-router-dom";
class MoviesGrid extends Component {
    constructor(props) {
        super(props);
   
        this.state = {
            Movies:{
                Movies:[]
            },
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch(
            "https://mocki.io/v1/ca4dd148-e91e-45dd-b999-2dc5982c1ec7")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    Movies: json,
                    DataisLoaded: true
                });
            })
    }
  render() {
    
        
        if (!this.state.DataisLoaded){
            return (<h1> Page Loading</h1>)
        }
    
      return (
          <div class="grid-container">
        {
            this.state.Movies.Movies.map((item) => ( 
                <div class = "grid-item">
                    <a href={'/movie?moviename='+item.videoname+'&moviepath='+item.videopath+'&thumbnailpath='+item.thumbnailpath}>
                    <img src={item.thumbnailpath}/>
                    <div>{item.videoname}</div>
                    </a>
                </div>
            ))
        }
        </div>
      )
    
  }
}

export default MoviesGrid