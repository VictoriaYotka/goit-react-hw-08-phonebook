import { FormLabel, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filtersSlice';
import { input, label } from './FilterStyles';

export function Filter() {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const {value} = e.target;
        dispatch(filterContacts(value))
    }
    return (
        <>
        <FormLabel htmlFor="filter" sx={label}>Find contacts by name:</FormLabel>
        <Input 
        sx={input}
        type="text"
        name="filter"
        id="filter"
        onChange={handleChange}
        />
  </>
    )
}