import { Container, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const FormInput = ({type, name, label, pattern, title, value, styles}) => {
  return (
    <Container textAlign='start'>
    <FormLabel htmlFor={name}  sx={styles} display='inline'>{label}</FormLabel>
        <Input
          sx={styles}
          mb='16px'
          defaultValue={value}
          type={type}
          name={name}
          id={name}
          pattern={pattern}
          title={title}
          required
        />
    </Container>
  )
}

export default FormInput