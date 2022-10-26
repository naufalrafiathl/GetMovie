import React from 'react'
import Form from "../components/Form";

function Register({history}) {
  return (
    <div className='container'>
    <Form register history={history}/>
  </div>
  )
}

export default Register