import React from 'react';
import spinner from './spinner.gif'

export default function Loading() {

  return(
    <div className="loading">
      <img src={spinner} alt="loader" />
      <h1>loading data</h1>
    </div>
  )
}