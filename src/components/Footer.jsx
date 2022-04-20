import { Box, Flex, Link, Heading, Text } from '@chakra-ui/react';

import { SiDiscord } from 'react-icons/si';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

export default function Footer() {
  return (
    <Box py="20px" px="20px">
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="space-around"
        alignItems="center"
        maxW="1200px"
        mx="auto"
      >
        <Flex mb={{ base: '10px', md: 0 }} alignItems="center" justifyContent="center">
          {' '}
          <Link
            href="https://www.discord.com/"
            className="link"
            isExternal
            color="bgLight"
            mr="10px" 
          >
            <SiDiscord size="50" />
          </Link>
          <Link
            href="https://www.discord.com/"
            className="link"
            isExternal
            color="bgLight"
            // mr="15px"
          >
            <Heading>Discord</Heading>
          </Link>
        </Flex>

        <Flex mb={{ base: '10px', md: 0 }} alignItems="center" justifyContent="center">
          {' '}
          <Link href="https://www.twitter.com/" className="link" isExternal color="blue" mr="10px" >
            <AiOutlineTwitter size="50" />
          </Link>
          <Link
            href="https://www.twitter.com/"
            className="link"
            isExternal
            color="bgLight"
            // mr="15px"
          >
            <Heading>Twitter</Heading>
          </Link>
        </Flex>

        <Flex mb={{ base: '10px', md: 0 }} alignItems="center" justifyContent="center">
          {' '}
          <Link href="https://www.instgram.com/" className="link" isExternal color="red" mr="10px" >
            <AiOutlineInstagram size="50" />
          </Link>
          <Link
            href="https://www.instagram.com/"
            className="link"
            isExternal
            color="bgLight"
            // mr="15px"
          >
            <Heading>Instagram</Heading>
          </Link>
        </Flex>


      </Flex>
    </Box>
  );
}
