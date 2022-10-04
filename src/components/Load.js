import React, { Component } from 'react'
import img from '../load.gif'
export default class Load extends Component {
  render() {
    return (
      <div>
        <img src={img} alt='loading please wait'></img>
      </div>
    )
  }
}
