import { FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import { input } from './FormInputStyles'

const FormInput = ({type, name, label, pattern, title, styles}) => {
  return (
    <>
    <FormLabel htmlFor={name}  sx={styles}>{label}</FormLabel>
        <Input
          sx={{styles}, input}
          type={type}
          name={name}
          id={name}
          pattern={pattern}
          title={title}
          required
        />
    </>
  )
}

export default FormInput