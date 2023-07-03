import { DeleteIcon } from '@chakra-ui/icons';
import { IconButton, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContact, fetchContacts } from 'redux/fetchContacts';
import { selectError, selectFilteredContacts, selectIsLoading,  } from 'redux/selectors';
import { icon, item, list } from './ContactListStyles';

export function ContactList() {
    const dispatch = useDispatch();
    const filteredContacts = useSelector(selectFilteredContacts);
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
        {isLoading  && <Text>Loading...</Text>}
        {error && <Text>{error}</Text>}
        {filteredContacts && 
            <UnorderedList sx={list}>
                {filteredContacts.map(({id, name, number}) => <ListItem key={id} sx={item}>{name}: {number}
                <IconButton onClick={() => handleDeleteButton(id, name)} 
                aria-label='Delete current item' icon={<DeleteIcon />} 
                size='sm' variant='outline'
                sx={icon}/>
                </ListItem>)}
            </UnorderedList>    
        }
        {!isLoading && !error && filteredContacts.length === 0 &&
            <Text>You don't have contacts yet</Text> 
        }
        
    </> 
    )}
