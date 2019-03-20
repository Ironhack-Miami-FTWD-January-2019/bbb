import React, { Component } from 'react';
import Axios from 'axios';
import api from '../../api'
import {REACT_APP_SERVER} from '../../config'
export default class Home extends Component {

  
  componentDidMount(){

    console.log(api.isLoggedIn())
    console.log(api.getLocalStorageUser())
    console.log(process.env)

    Axios.get(`${REACT_APP_SERVER}/whatever`).then(res=>{
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
