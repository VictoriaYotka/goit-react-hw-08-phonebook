import css from './ContactForm.module.css'
import { toast } from "react-toastify";

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import {selectContacts } from 'redux/selectors';


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
      <form onSubmit={handleSubmit} className={css.form}>
        <label htmlFor="name" className={css.label}>Name</label>
        <input
          className={css.input}
          type="text"
          name="name"
          id="name"
          pattern="[a-zA-Z ]*"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor="phone" className={css.label}>Phone</label>
        <input
          className={css.input}
          type="tel"
          name="phone"
          id="phone"
          pattern="[0-9]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="submit" className={css.button}>Add contact</button>
      </form>
    </>
    )
}
