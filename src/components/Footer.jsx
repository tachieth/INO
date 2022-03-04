import { Box, Flex, Link, Text } from '@chakra-ui/react';

import { SiDiscord } from 'react-icons/si';
import { AiOutlineInstagram } from 'react-icons/ai';

export default function Footer() {
  return (
    <Box bg="lightBlack" py="20px" px="20px">
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        maxW="1200px"
        mx="auto"
      >
        <Text color="bgLight" mb={{ base: '15px', md: 0 }}>
          &copy; {new Date().getFullYear()} DUMMY.
        </Text>
        <Flex mb={{ base: '15px', md: 0 }}>
          <Link href="#about" className="link" mr="15px" color="bgLight">
            About
          </Link>
          <Link href="#roadmap" className="link" mr="15px" color="bgLight">
            Roadmap
          </Link>
          <Link href="#gallery" className="link" mr="15px" color="bgLight">
            Gallery
          </Link>
         
          <Link href="#team" className="link" color="bgLight">
            Team
          </Link>
        </Flex>
        <Flex>
          <Link
            href="https://www.instagram.com/"
            className="link"
            isExternal
            color="bgLight"
            mr="15px"
          >
            <AiOutlineInstagram />
          </Link>
          <Link
            href="https://discord.gg/"
            className="link"
            isExternal
            color="bgLight"
          >
            <SiDiscord />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
