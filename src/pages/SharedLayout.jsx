import React, { Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { fetchLogout } from 'redux/fetchUser'
import { selectToken, selectUserEmail } from 'redux/selectors'

const SharedLayout = () => {
  const email = useSelector(selectUserEmail);
  const isAuth = useSelector(selectToken);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogoutClick = () => {
    dispatch(fetchLogout());
    navigate('/')
  } 

  return (
    <>
      <header>
        {isAuth &&
        <>
          <p>{email}</p>
          <button onClick={handleLogoutClick}>Log out</button>
        </>
        }
        
        {!isAuth &&
        <>
          <Link to='/'>Log in</Link>
          <Link to='/register'>Sign up</Link>
        </>
        } 
      </header>

      <main>
        <Suspense fallback={<p>...Loading</p>}>
          <Outlet />
      </Suspense>
      </main>
    </>  
  )
}

export default SharedLayout