import React from 'react'

const AuthIn = (img, callback) => (
  <div style={{float:'right'}} id="firebaseui-auth-container">
    <button onClick={()=>(callback())}>
      <img src={img}/>
    </button>
  </div>
)

export default AuthIn
