import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContact, fetchContacts } from 'redux/fetchContacts';
import { selectError, selectFilteredContacts, selectIsLoading,  } from 'redux/selectors';

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
        {isLoading  && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {filteredContacts.length > 0 
        ?
            <ul>
            {filteredContacts.map(({id, name, number}) => <li key={id}>{name}: {number}
            <button onClick={() => handleDeleteButton(id, name)}>Delete</button>
            </li>)}
        </ul>
        : <p>You don't have contacts yet</p>
        }  
    </> 
    )}
