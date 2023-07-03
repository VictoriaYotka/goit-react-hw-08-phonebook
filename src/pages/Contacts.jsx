import { ContactForm } from 'components/ContactForm'
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { selectFilteredContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Heading, useDisclosure } from '@chakra-ui/react';
import ContactModal from 'components/ContactModal';

const Contacts = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
    const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
        {/* {isModalOpen && <ContactModal />} */}
        <ContactModal isOpen={isOpen} onClose={onClose} />
        <ContactForm/>
        <Heading as='h3' mb='16px'>Contacts ({filteredContacts.length})</Heading>
        <Filter/>
        <ContactList onOpen={onOpen} />
      </>
  )
}

export default Contacts