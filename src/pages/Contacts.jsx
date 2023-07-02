import { ContactForm } from 'components/ContactForm/ContactForm'
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { selectFilteredContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

const Contacts = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <>
        
        <ContactForm/>

        <h2>Contacts ({filteredContacts.length})</h2>
        <Filter/>
        <ContactList />
      </>
  )
}

export default Contacts