import { Button, FormControl, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import FormInput from "./FormInput"
import { useDispatch, useSelector } from "react-redux"
import { selectCurrentContact } from "redux/selectors"
import { editContact } from "redux/fetchContacts"
import { toast } from "react-toastify"

const input = {
    display: 'inline',
    maxWidth: '400px',
  }

const ContactModal = ({isOpen, onClose}) => { 
    const dispatch = useDispatch();
    const  {id, name, number} = useSelector(selectCurrentContact);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const newName = form.elements.name.value;
        const newNumber = form.elements.phone.value; 

        if(name !== newName || number !== newNumber) {
            const contact = {
                id, name: newName, number: newNumber
            }
            dispatch(editContact(contact)).unwrap()
            .then(() => 
            toast.success(`${newName} successfully edited!`))
            .catch(() => 
              toast.error(`Something went wrong, ${newName} not edited. Try again.`))
              
            onClose()
        } else {
            toast.info('Any changes edited.')
        }
    }

  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl as='form' onSubmit={handleSubmit} textAlign='center' mb='16px'>
                <FormInput styles={input}
                    type='text' name='name' label='Name' value={name}
                    pattern="[a-zA-Z ]*"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                />

                <FormInput styles={input}
                    type='tel' name='phone' label='Phone' value={number}
                    pattern="[0-9]+"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                />
                <Button onClick={onClose} variant='ghost' mr={3}>
                    Go back
                </Button>
                <Button type="submit" colorScheme='blue'>Save changes</Button>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            {/* <Button onClick={onClose} variant='ghost' mr={3}>
              Go back
            </Button> */}
            {/* <Button colorScheme='blue'>Save changes</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
  )
}

export default ContactModal