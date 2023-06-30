import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import SharedLayout from "pages/SharedLayout";
import { useSelector } from "react-redux";

const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Contacts = lazy(() => import("../pages/Contacts"));

export function App () {
  const token = useSelector(state => state.user.token);
  console.log(token)

  
  return (
    <>
     <ToastContainer 
            autoClose={2000}
            hideProgressBar={true}
        />
    
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
      
        <Route index element={
          <PublicRoute>
            <Login/>
        </PublicRoute>
        } />
        
        <Route path="/register" element={
          <PublicRoute>
            <Register/>
        </PublicRoute>
        } />

        <Route path="/contacts" element={
          <PrivateRoute>
            <Contacts/>
        </PrivateRoute>
        } />
      
      </Route>
    </Routes>
    </>
    )
}