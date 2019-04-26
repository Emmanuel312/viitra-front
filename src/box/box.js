import React,{Component} from 'react'
import api from '../services/api'
import logo from '../assets/logo2.png'
import axios from 'axios'

export default class Box extends Component
{
  state = 
  {
    descricao : ''
  }

  handleSubmit = async () =>
  {
    await axios.post('http://localhost:3000/tweet', {descricao : this.state.descricao})
  }
  handleChange = (evento) =>
  {
    this.setState({descricao: evento.target.value})
  }
  render()
  {
    return (
      <div id="box">
      
        <textarea value={this.props.state} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>ok</button>

      </div>
    )
      
  }  
}