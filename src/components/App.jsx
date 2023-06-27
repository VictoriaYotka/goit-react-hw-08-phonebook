import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
// import css from './App.module.css'
import { selectToken } from "redux/selectors";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Contacts = lazy(() => import("../pages/Contacts"));

export function App () {
  // const dispatch = useDispatch();
  // const token = useSelector(selectToken)

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      <PublicRoute>
        <Route path="/login" element={<Login/>} />
      </PublicRoute>
      
      <PublicRoute>
        <Route path="/register" element={<Register/>} />
      </PublicRoute>

      <PrivateRoute>
        <Route path="/contacts" element={<Contacts/>} />
      </PrivateRoute>
    </Routes>


    // <div className={css.container}>
    //    

    //    {!token && <Register />}
       

    //    {token && 
    //    <Contacts />
    //    }
    // </div>
    )
}