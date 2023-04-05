import React from 'react'
import { Container, VStack, Heading ,Input, Button ,Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container
    p={'16'}
    h={'100vh'}
    maxW={'container.xl'}
>
    <form>
        <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full','96']}
            m={'auto'}
            my={'16'}
        >
            <Heading
            textAlign={'center'}
            >
                Sign Up Chief
            </Heading>
            <Input 
                placeholder={'Name'}
                type={'text'}
                required
                focusBorderColor={'purple.500'}
            />
            <Input 
                placeholder={'Email'}
                type={'Email'}
                required
                focusBorderColor={'purple.500'}
            />
            <Input 
                placeholder={'Password'}
                type={'password'}
                required
                focusBorderColor={'purple.500'}
            />
            <Button
                colorScheme={'purple'}
                type={'submit'}
            >
                Signup
            </Button>
            <Text 
                textAlign={'right'}
            >
                Already Registered?{"  "}
                <Button
                variant={'link'}
                colorScheme={'purple'}
                type={'submit'}
            >
                <Link to={'/login'}>
                Login
                </Link>
            </Button>
            </Text>
        </VStack>
    </form>
</Container>
  )
}

export default Signup