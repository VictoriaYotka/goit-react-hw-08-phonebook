import css from './Filter.module.css'
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
        <label htmlFor="filter" className={css.label}>Find contacts by name:</label>
        <input 
        className={css.input}
        type="text"
        name="filter"
        id="filter"
        onChange={handleChange}
        />
  </>
    )
}