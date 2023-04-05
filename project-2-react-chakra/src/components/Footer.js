import React from 'react'
import {Box,Stack, VStack , Heading, HStack, Button, Input, Text} from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box
        bgColor={"blackAlpha.900"}
        minH= {"40"}
        p="16"
        color={"white"}
    >

        <Stack
            direction={["column","row"]}
        >
            <VStack
                alignItems={"stretch"}
                w={'full'}
                px={'4'}
            >
                <Heading 
                size={"md"} 
                textTransform={"uppercase"}
                textAlign={'center'}
                >
                    Lorem ipsum dolor sit amet.
                </Heading>
                <HStack
                    borderBottom={'2px solid white'}
                    py='2'
                >
                    <Input 
                        placeholder='Enter Your Email'
                        border={'none'}
                        borderRadius={'none'}
                        outline={'none'}
                        // focusBorderColor='none'
                    />
                    <Button
                    p={'0'}
                    colorScheme={'purple'}
                    variant={'ghost'}
                    borderRadius={'0 20px 20px 0'}
                    >
                        <AiOutlineSend />
                    </Button>
                </HStack>
            </VStack>
            <VStack
                w={'full'}
                borderLeft={["none","1px solid white"]}
                borderRightt={["none","1px solid white"]}
            >
            <Heading
                textAlign={['center','left']}
                textTransform={'uppercase'}
                size={'md'}
            >
                Lorem, ipsum.
            </Heading>
            <Text>All rights reserved @Siddharth 2023</Text>
            </VStack>
            <VStack
                w={'full'}
                borderLeft={["none","1px solid white"]}
                borderRightt={["none","1px solid white"]}
            >
                <Heading
                    size={'md'}
                    textTransform={'uppercase'}
                >
                    Our Socials
                </Heading>
                <Button
                    variant={'link'}
                    colorScheme={'white'}
                >
                    <a href="https://siddharthbisht.netlify.app/" target='_blank'>Website</a>
                </Button>
                <Button
                    variant={'link'}
                    colorScheme={'white'}
                >
                    <a href="https://www.linkedin.com/in/siddharth-bisht-57084b198/" target='_blank'>LinkedIn</a>
                </Button>
                <Button
                    variant={'link'}
                    colorScheme={'white'}
                >
                    <a href="https://github.com/OfficialSiddharthBisht" target='_blank'>GitHub</a>
                </Button>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer