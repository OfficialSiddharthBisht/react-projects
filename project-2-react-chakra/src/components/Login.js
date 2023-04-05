import { Container, VStack, Heading ,Input, Button ,Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
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
                <Heading>
                    Welcom Again Chief
                </Heading>
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
                    variant={'link'}
                    alignSelf={'flex-end'}
                >
                    Forgot Password
                </Button>
                <Button
                    colorScheme={'purple'}
                    type={'submit'}
                >
                    Login
                </Button>
                <Text 
                    textAlign={'right'}
                >
                    New User?{"  "}
                    <Button
                    variant={'link'}
                    colorScheme={'purple'}
                    type={'submit'}
                >
                    <Link to={'/signup'}>
                    Signup
                    </Link>
                </Button>
                </Text>
            </VStack>
        </form>
    </Container>
  )
}

export default Login