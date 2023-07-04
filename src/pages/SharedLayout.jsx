import { Badge, Button, Container, Flex, Heading, Icon } from '@chakra-ui/react'
import { AtSignIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import React, { Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { fetchLogout } from 'redux/fetchUser'
import { selectToken, selectUserEmail } from 'redux/selectors'
import Loader from 'components/Loader'

const button = {
  color: 'white',
  backgroundColor: 'blue.500',
}

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
    <Flex as={'header'} 
      justify='space-between' 
      alignItems='center'
      wrap='wrap'
      gap='12px'
      p={{base: '16px', sm: '24px'}} 
      maxW='1200px' 
      mr='auto' ml='auto'
      borderBottom='2px solid' borderColor='blue.500'
    >
    <Heading as='h1'fontSize={{base: '16px', sm: '24px', md: '32px', lg: '40px'}}>Phonebook</Heading>
      {isAuth
      ?
          <Flex gap={{base: '12px', sm: '24px'}}>
            <Badge textTransform='lowercase' borderRadius='8px' p={{base: '8px', sm: '12px'}}>
              <Icon as={AtSignIcon} mr='8px'/>
              {email}</Badge>
            <Button onClick={handleLogoutClick} p={{base: '8px', sm: '12px'}} sx={button}>Log out
            <Icon as={ArrowForwardIcon} ml='8px'/></Button>
          </Flex>
       :
          <Flex gap={{base: '12px', sm: '24px'}}>
            <Button as={Link} to='/' p={{base: '8px', sm: '12px'}} sx={button}>
            Log in
            </Button>
            <Button as={Link} to='/register' p={{base: '8px', sm: '12px'}} sx={button}>
            Sign up
            </Button>
          </Flex>
        } 
    </Flex>

      <main>
        <Container p='16px'>
        <Suspense fallback={<Loader />}>
          <Outlet />
      </Suspense>
      </Container>
      </main>
    </>  
  )
}

export default SharedLayout