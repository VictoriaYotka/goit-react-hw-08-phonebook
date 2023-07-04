import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContact, fetchContacts } from 'redux/fetchContacts';
import { selectContacts, selectError, selectFilteredContacts, selectIsLoading,  } from 'redux/selectors';
import ContactListItem from 'components/ContactListItem';
import { List, Text } from '@chakra-ui/react';
import Loader from './Loader';

export function ContactList({onOpen}) {
    const dispatch = useDispatch();
    const filteredContacts = useSelector(selectFilteredContacts);
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
      dispatch(fetchContacts())    
    }, [dispatch])
    

    const handleDeleteButton = (id, name) => {
        dispatch(deleteContact(id)).unwrap()
        .then(() => toast.success(`${name} successfully deleted!`) )
        .catch(() => toast.error(`Something went wrong, ${name} not deleted. Try again`))
    }

    return (
    <>
        {isLoading  && <Loader />}
        {error && <Text>{error}</Text>}
        {filteredContacts && 
            <List>
                {filteredContacts.map(({id, name, number}) => 
                <ContactListItem key={id} 
                handleDeleteButton={handleDeleteButton}
                id={id}
                name={name}
                number={number}
                onOpen={onOpen}
                />)}
            </List>    
        }
        {!isLoading && !error && filteredContacts.length === 0 && contacts.length !== 0 &&
            <Text>No matches found</Text> 
        }
        {!isLoading && !error && contacts.length === 0 &&
            <Text>You don't have contacts yet</Text> 
        }       
    </> 
    )}
