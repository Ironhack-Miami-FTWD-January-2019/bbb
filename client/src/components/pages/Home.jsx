import React, { Component } from 'react';
import Axios from 'axios';
import api from '../../api'

export default class Home extends Component {

  
  componentDidMount(){

    console.log(api.isLoggedIn())
    console.log(api.getLocalStorageUser())
    console.log(process.env)

    Axios.get(`https://diggitydoo.herokuapp.com/whatever`).then(res=>{
      console.log(res, 'res')
    })

  }


  render() {                
    return (
      <div className="Home">
        <h2>Home</h2>
        <p>This is a sample project with the MERN stack</p>
      </div>
    );
  }
}
