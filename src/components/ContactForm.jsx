import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/fetchContacts';
import {selectContacts } from 'redux/selectors';
import Form from "components/Form";
import FormInput from "components/FormInput";
import { Container } from "@chakra-ui/react";

const input = {
  display: 'inline',
  maxWidth: '320px',
}

export function ContactForm() {
  const contacts = useSelector(selectContacts)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
      const newName = form.elements.name.value;
      const newPhone = form.elements.phone.value; 

    if(contacts.find(({name}) => name === newName)) {
        toast.info(`${newName} is already in contacts`);
    } else {dispatch(addContact({name: newName,
      number: newPhone})).unwrap()
      .then(() => 
      toast.success(`${newName} successfully added!`))
      .catch(() => 
        toast.error(`Something went wrong, ${newName} not added. Try again.`))     
    }

    form.reset()
  }

  return (
    <Container border='2px solid' borderColor='blue.500' borderTop='none' borderRadius='8px'>
      <Form handleSubmit={handleSubmit} buttonText='Add contact'>
          <FormInput styles={input}
            type='text' name='name' label='Name'
            pattern="^[\\sa-zA-Z'-]*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />

          <FormInput styles={input}
            type='tel' name='phone' label='Phone'
            pattern="[\+]\d{2}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
            title="Format: +38 (xxx) xxx-xx-xx"
          />
      </Form>
    </Container>
    )
}
