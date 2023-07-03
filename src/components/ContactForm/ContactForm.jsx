import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/fetchContacts';
import {selectContacts } from 'redux/selectors';
import Form from "components/Form/Form";
import FormInput from "components/FormInput/FormInput";
import { input } from "./ContactFormStyles";

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
        toast.error(`Something went wrong, ${newName} not added. Try again `))     
    }

    form.reset()
  }

  return (
    <>
      <Form handleSubmit={handleSubmit} buttonText='Add contact'>
          <FormInput styles={input}
            type='text' name='name' label='Name'
            pattern="[a-zA-Z ]*"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />

          <FormInput styles={input}
            type='tel' name='phone' label='Phone'
            pattern="[0-9]+"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
      </Form>
    </>
    )
}
