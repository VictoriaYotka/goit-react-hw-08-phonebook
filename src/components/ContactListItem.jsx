import { DeleteIcon } from "@chakra-ui/icons"
import { IconButton, ListItem } from "@chakra-ui/react"

const ContactListItem = ({id, name, number, handleDeleteButton}) => {
  return (
    <ListItem mb='12px'>{name}: {number}
                <IconButton onClick={() => handleDeleteButton(id, name)} 
                aria-label='Delete current item' icon={<DeleteIcon />} 
                size='sm' variant='outline' ml='16px'
               />
                </ListItem>
  )
}

export default ContactListItem