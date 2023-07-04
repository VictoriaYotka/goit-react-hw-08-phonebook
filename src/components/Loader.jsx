import { Flex, Spinner } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Flex justify='center' alignItems='center' pt='24px'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
</Flex>
  )
}

export default Loader