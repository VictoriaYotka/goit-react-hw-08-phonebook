import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import css from './App.module.css'
import { selectFilteredContacts } from "redux/selectors";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export function App () {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
       <ToastContainer 
       autoClose={2000}
       hideProgressBar={true}
       />
      <h1 className={css.main_title}>Phonebook</h1>
      <ContactForm/>

      <h2 className={css.title}>Contacts ({filteredContacts.length})</h2>
      <Filter/>
      <ContactList />
    </div>
    )
}