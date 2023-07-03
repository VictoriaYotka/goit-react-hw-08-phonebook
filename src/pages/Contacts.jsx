import { ContactForm } from 'components/ContactForm'
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { selectFilteredContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Heading } from '@chakra-ui/react';

const Contacts = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <>
        
        <ContactForm/>
        <Heading as='h3' mb='16px'>Contacts ({filteredContacts.length})</Heading>
        <Filter/>
        <ContactList />
      </>
  )
}

export default Contacts