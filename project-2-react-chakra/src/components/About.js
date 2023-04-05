import React from 'react'
import { Box, Image, Heading, Container, Stack, Text } from '@chakra-ui/react';


const About = () => {
  return (
    <Box>
        <Container
            minHeight={'75vh'}
        >
            <Heading
                mt={'10'}
                textAlign={'center'}
            >About US</Heading>
            <Text
                letterSpacing={'wider'}
                p= {["3","12"]} 
                textAlign={'center'}
            >
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio beatae, ipsam voluptatum, deserunt, adipisci sapiente praesentium quisquam possimus a nobis eligendi labore earum sed vel fugiat. Nobis totam minus illo commodi sunt iste laudantium impedit laboriosam similique quod blanditiis, placeat ex error iusto odit harum repellat provident architecto corporis sed aliquam eum, quo eligendi excepturi. Nobis obcaecati praesentium molestias asperiores debitis suscipit quis quaerat dolores sunt, optio harum exercitationem.
            </Text>
        </Container>
    </Box>
  )
}

export default About