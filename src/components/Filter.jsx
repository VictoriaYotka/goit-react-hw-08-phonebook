import { FormLabel, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filtersSlice';

export function Filter() {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const {value} = e.target;
        dispatch(filterContacts(value))
    }
    return (
        <>
        <FormLabel htmlFor="filter" display='inline' w='210px'>Find contacts by name:</FormLabel>
        <Input 
        display='inline'
        type="text"
        name="filter"
        id="filter"
        onChange={handleChange}
        />
  </>
    )
}