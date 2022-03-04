import { Flex, Text, Heading, Image, Box } from '@chakra-ui/react';

import Image1 from '../assets/1.jpeg';
import Image2 from '../assets/2.jpeg';
import Banner from '../assets/banner.jpeg';

export default function About() {
  return (
    <Flex
      maxW="1200px"
      mx="auto"
      flexDirection="column"
      alignItems="center"
      py="30px"
      id="about"
      px={{ base: '20px', md: 0 }}
    >
      <Heading color="white" fontSize="6xl" fontWeight="bold" mt="50px" mb="80px">
        About
      </Heading>
      <Flex mb="50px" flexDirection={{ base: 'column', md: 'row' }}>
        <Box mr={{ base: 0, md: '50px' }}>
          <Heading color="white" mb="20px" textAlign={{ base: 'center', md: 'left' }}>
            DUMMY
          </Heading>
          <Text
            color="white"
            mb="50px"
            maxW="500px"
            minW="300px"
            mx="auto"
            textAlign="justify"
            px={{ base: '20px', md: 0 }}
          >
            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </Box>
        <Box position="relative" w="400px">
          <Image
            src={Image1}
            maxW="320px"
            position="absolute"
            top="50%"
            left="50%"
            className="inside-image"
          />
        </Box>
      </Flex>
      <Flex mb="50px" flexDirection={{ base: 'column-reverse', md: 'row' }}>
        <Box position="relative" w="400px">
          <Image
            src={Image2}
            maxW="320px"
            position="absolute"
            top="50%"
            left="50%"
            className="inside-image"
          />
        </Box>
        <Box ml={{ base: 0, md: '50px' }}>
          <Heading color="white" mb="20px" textAlign={{ base: 'center', md: 'left' }}>
            DUMMY
          </Heading>
          <Text
            mb="50px"
            maxW="500px"
            minW="300px"
            mx="auto"
            textAlign="justify"
            px={{ base: '20px', md: 0 }}
            color="white"
          >
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour, or randomised words which don't
            look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the middle of text. All the
            Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
            making this the first true generator on the Internet.
          </Text>
        </Box>
      </Flex>
      <Flex flexDirection={{ base: 'column', md: 'row' }}>
        <Box mr={{ base: 0, md: '50px' }}>
          <Heading color="white" mb="20px" textAlign={{ base: 'center', md: 'left' }}>
            DUMMY
          </Heading>
          <Text
            mb="50px"
            maxW="500px"
            minW="300px"
            mx="auto"
            textAlign="justify"
            px={{ base: '20px', md: 0 }}
            color="white"
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
            the cites of the word in classical literature, discovered the undoubtable source. Lorem
            Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
            Extremes of Good and Evil) by Cicero, written in 45 BC.
          </Text>
        </Box>
        <Box position="relative" w="400px">
          <Image
            src={Banner}
            maxW="320px"
            position="absolute"
            top="50%"
            left="50%"
            className="inside-image"
          />
        </Box>
      </Flex>
    </Flex>
  );
}
