import { Box, Flex, Link, Heading, Text } from '@chakra-ui/react';

import { SiDiscord } from 'react-icons/si';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

export default function Footer() {
  return (
    <>
      <Box py="20px" px="20px">
        <Flex
          py="10px"
          pt={{ base: '30px', md: '100px' }}
          borderBottomWidth="1px"
          maxW="1200px"
          px="10px"
          mx="auto"
          justifyContent="space-between"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems="center"
        >
          <Box>
            <Heading mb="10px" color="text">
              Join The Club
            </Heading>
            <Text mb="10px" color="text">
              Become a member of the strongest and fast growing DeFi gambling community.
            </Text>
            <Flex
              flexDirection={{ base: 'column', md: 'row' }}
              mb={{ base: '10px', md: '30px' }}
              w="100%"
              mt={{ base: '20px', md: '0' }}
              alignItems="center"
            >
              <Flex
                mb={{ base: '20px', md: '0' }}
                mr={{ base: '0', md: '10px' }}
                borderRadius="5px"
                bg="#1da1f2"
                w={{ base: '300px', md: '110px' }}
                h="34px"
                alignItems="center"
                justifyContent={{ base: 'center', md: 'space-between' }}
                px={{ base: '0px', md: '20px' }}
              >
                <Link href="https://www.twitter.com/" isExternal color="white">
                  <AiOutlineTwitter size="20" />
                </Link>
                <Link
                  href="https://www.twitter.com/"
                  isExternal
                  color="white"
                  fontSize="15px"
                  fontWeight="bold"
                >
                  Twitter
                </Link>
              </Flex>

              <Flex
                mb={{ base: '20px', md: '0' }}
                mr={{ base: '0', md: '10px' }}
                borderRadius="5px"
                bg="#1da1f2"
                w={{ base: '300px', md: '115px' }}
                h="34px"
                alignItems="center"
                justifyContent={{ base: 'center', md: 'space-between' }}
                px="10px"
              >
                <Link href="https://www.instgram.com/" isExternal color="white">
                  <AiOutlineInstagram size="20" />
                </Link>
                <Link
                  href="https://www.instgram.com/"
                  isExternal
                  color="white"
                  fontSize="15px"
                  fontWeight="bold"
                >
                  Instagram
                </Link>
              </Flex>

              <Flex
                mb={{ base: '20px', md: '0' }}
                borderRadius="5px"
                bg="#7289da"
                w={{ base: '300px', md: '110px' }}
                h="34px"
                alignItems="center"
                justifyContent={{ base: 'center', md: 'space-between' }}
                px="15px"
              >
                <Link href="https://www.discord.com/" isExternal color="white">
                  <SiDiscord size="20" />
                </Link>
                <Link
                  href="https://www.discord.com/"
                  isExternal
                  color="white"
                  fontSize="15px"
                  fontWeight="bold"
                >
                  Discord
                </Link>
              </Flex>
            </Flex>
          </Box>

          <Flex
            alignItems="center"
            justifyContent="center"
            bg="white"
            w="180px"
            h="45px"
            mb={{ base: '20px', md: '0' }}
            borderWidth="2px"
            borderRadius="5px"
            borderColor="black"
            fontWeight="bold"
          >
            <Link href="#about">
              {' '}
              <Text> MINT YOUR TICKET</Text>
            </Link>
          </Flex>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          maxW="1200px"
          mx="auto"
          w="100%"
          py="10px"
          flexDirection={{ base: 'column', md: 'row' }}
          pb="20px"
        >
          {' '}
          <Text mb={{ base: '15px', md: 0 }}>
            &copy; {new Date().getFullYear()} ISLAND NFT. All rights reserved.
          </Text>
          <Text color="white">Terms & Conditions</Text>
        </Flex>
      </Box>
    </>
  );
}
