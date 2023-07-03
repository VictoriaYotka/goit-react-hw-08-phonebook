import { Button, FormControl } from "@chakra-ui/react"
import { btn, form } from "./FormStyles"

const Form = ({children, handleSubmit, buttonText}) => {
  return (
    <FormControl as='form' onSubmit={handleSubmit} sx={form}>
        {children}
        <Button type="submit" sx={btn}>{buttonText}</Button>
    </FormControl>
  )
}

export default Form