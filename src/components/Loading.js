import React, { Component } from 'react'
import XOsX from './XOsX.gif'


export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={XOsX} className='max-width: 8% loadingimg' alt="loading" style={{marginBottom:'3px',maxWidth:'8%',height:'auto'}}/>
      </div>
    )
  }
}
