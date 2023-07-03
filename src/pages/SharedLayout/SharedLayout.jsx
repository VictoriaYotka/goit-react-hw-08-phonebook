import { Badge, Button, Container, Heading, Icon } from '@chakra-ui/react'
import { AtSignIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import React, { Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { fetchLogout } from 'redux/fetchUser'
import { selectToken, selectUserEmail } from 'redux/selectors'
import { badge, button, header, title } from './SharedLayoutStyles'



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
    <Container as={'header'} sx={header}>
    <Heading as='h1'sx={title}>Phonebook</Heading>
      {isAuth
      ?
          <>
            <Badge sx={badge}>
              <Icon as={AtSignIcon} mr='8px'/>
              {email}</Badge>
            <Button onClick={handleLogoutClick} sx={button}>Log out
            <Icon as={ArrowForwardIcon} ml='8px'/></Button>
          </>
       :
          <>
            <Button as={Link} to='/' sx={button}>
            Log in
            </Button>
            <Button as={Link} to='/register' sx={button}>
            Sign up
            </Button>
          </>
        } 
    </Container>

      <main>
        <Container p='16px'>
        <Suspense fallback={<p>...Loading</p>}>
          <Outlet />
      </Suspense>
      </Container>
      </main>
    </>  
  )
}

export default SharedLayout