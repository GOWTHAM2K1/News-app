import React, { Component } from 'react'
import XOsX from './XOsX.gif'


export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={XOsX} className='img-fluid max-width: 30%' alt="loading" />
      </div>
    )
  }
}
