import React from 'react'

const FormInput = (type, name) => {
  return (
    <>
    <label htmlFor={name} >Name</label>
        <input
          type={type}
          name={name}
          id={name}
          required
        />
    </>
  )
}

export default FormInput