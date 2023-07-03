import { DeleteIcon, EditIcon } from "@chakra-ui/icons"
import { IconButton, ListItem } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { openModal } from "redux/contactsSlice";

const ContactListItem = ({id, name, number, handleDeleteButton, onOpen}) => {
    
    const dispatch = useDispatch();
    
    

    const handleItemClick = (id, name, number) => {
        onOpen()
        dispatch(openModal({id, name, number}))
        
    }

  return (
    <ListItem mb='12px'>{name}: {number}
                <IconButton onClick={()=>handleItemClick(id, name, number)}
                aria-label='Edit current contact' icon={<EditIcon />} 
                size='sm' variant='outline' ml='16px'
               /><IconButton onClick={() => handleDeleteButton(id, name)} 
                aria-label='Delete current contact' icon={<DeleteIcon />} 
                size='sm' variant='outline' ml='16px'
               />
                </ListItem>
  )
}

export default ContactListItem