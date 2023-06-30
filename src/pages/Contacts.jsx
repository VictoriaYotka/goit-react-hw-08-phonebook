import { ContactForm } from 'components/ContactForm/ContactForm'
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { selectFilteredContacts } from 'redux/selectors';
import css from '../components/App.module.css'
import { useSelector } from 'react-redux';

const Contacts = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <>
        <h1 className={css.main_title}>Phonebook</h1>
        <ContactForm/>

        <h2 className={css.title}>Contacts ({filteredContacts.length})</h2>
        <Filter/>
        <ContactList />
      </>
  )
}

export default Contacts