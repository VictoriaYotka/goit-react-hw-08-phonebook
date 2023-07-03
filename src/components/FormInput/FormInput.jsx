import { FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const FormInput = ({type, name, label}) => {
  return (
    <>
    <FormLabel htmlFor={name} >{label}</FormLabel>
        <Input
          type={type}
          name={name}
          id={name}
          required
        />
    </>
  )
}

export default FormInput