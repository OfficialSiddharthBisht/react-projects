import { Box, Image, Heading, Container, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container minH={'100vh'} maxW={'container.xl'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={"auto"}
        >
          Services
        </Heading>
        <Stack
          h="full"
          p ={"4"}
          alignItems={"center"}
          direction={["column","row"]}
        >
        <Image src={img5} h={["40","400"]} filter={'hue-rotate(-130deg'} />
        <Text letterSpacing={"widest"} lineHeight={"190%"} p= {["4","16"]} textAlign={'center'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio beatae, ipsam voluptatum, deserunt, adipisci sapiente praesentium quisquam possimus a nobis eligendi labore earum sed vel fugiat. Nobis totam minus illo commodi sunt iste laudantium impedit laboriosam similique quod blanditiis, placeat ex error iusto odit harum repellat provident architecto corporis sed aliquam eum, quo eligendi excepturi. Nobis obcaecati praesentium molestias asperiores debitis suscipit quis quaerat dolores sunt, optio harum exercitationem.
        </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;

const MyCarousel = () => (
  <Carousel
    infiniteLoop
    autoPlay
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch the future
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.800'} color={'black'} {...headingOptions}>
        Future Is Gaming
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming Console
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'whiteAlpha.800'} color={'black'} {...headingOptions}>
        Gaming Night Tournaments
      </Heading>
    </Box>
  </Carousel>
);
