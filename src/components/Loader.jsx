import React from 'react'
import '../styles/Loader.css'

const Loader = ({ loading }) => {
  //Styles
  const stylesLoading = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  return (
    <div style={stylesLoading}>
      <span className={loading ? 'loader' : undefined}></span>
    </div>
  )
}

export default Loader
