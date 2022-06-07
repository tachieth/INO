import React from 'react';
import {
  Box,
  Flex,
  Link,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Text,
  Image,
  Heading,
} from '@chakra-ui/react';
import { HiMenu } from 'react-icons/hi';
import { Link as RouteLink } from 'react-router-dom';
import { SiDiscord } from 'react-icons/si';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';

import { shortenAddress } from '../candy-machine';

export default function Header({ address, onConnect }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = React.useState('right');

  return (
    <>
      <Box py="20px" w="100%" position="relative" zIndex="5">
        <Flex
          // py="10px"
          // borderBottomWidth={{ base: '0', md: '1px' }}
          maxW="1200px"
          // px="10px"
          mx="auto"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* <Heading display={{ base: 'none', md: 'flex' }} color="white">
            ISLAND
          </Heading> */}
          <Image
            position="relative"
            zIndex="5"
            maxW={{ base: '78px', md: '111px' }}
            src="/images/logo.png"
          />

          <Flex alignItems="center" justifyContent="center">
            {' '}
            <Flex alignItems="center" fontSize="17px" display={{ base: 'none', md: 'flex' }}>
              <RouteLink to="/">
                <Box
                  backgroundImage="/images/home.png"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="100%"
                  p="20px"
                  color="white"
                >
                  HOME
                </Box>
              </RouteLink>
              {/* <RouteLink to="/mint">
                <Box
                  backgroundImage="/images/mint.png"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="100%"
                  p="25px"
                  color="white"
                >
                  MINT
                </Box>
              </RouteLink> */}
              <RouteLink to="/e1">
                <Box
                  backgroundImage="/images/e1.png"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="100%"
                  p="20px"
                  display="block"
                  color="white"
                >
                  E1
                </Box>
              </RouteLink>
              <RouteLink to="/evamap">
                <Box
                  backgroundImage="/images/galler.png"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="100%"
                  p="20px"
                  // mr="30px"
                  color="white"
                >
                  EVA MAP
                </Box>
              </RouteLink>
              <RouteLink to="/manifesto">
                <Box
                  // alignItems="center"
                  // justifyContent="center"
                  backgroundImage="/images/galler.png"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="100%"
                  p="10px"
                  // mr="30px"
                  color="white"
                >
                  MANIFESTO
                </Box>
              </RouteLink>
              <RouteLink to="/gallery">
                <Box
                  backgroundImage="/images/galler.png"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="100%"
                  p="20px"
                  // mr="30px"
                  color="white"
                >
                  GALLERY
                </Box>
              </RouteLink>
              <RouteLink to="/career">
                <Box
                  backgroundImage="/images/galler.png"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="100%"
                  p="20px"
                  // mr="30px"
                  color="white"
                >
                  CAREER
                </Box>
              </RouteLink>
              <Flex>
                {' '}
                <Link
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  backgroundImage="/images/twitter.png"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="100%"
                  p="15px"
                  href="https://twitter.com/theprojectino"
                  // mr="30px"
                  color="black"
                  isExternal
                >
                  <Image maxW="17px" mx="auto" src="/images/twiterimage.png" />
                </Link>
                <Link
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  backgroundImage="/images/discord.png"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="100%"
                  p="15px"
                  href="https://discord.gg/evalabs"
                  // mr="30px"
                  color="black"
                  isExternal
                >
                  <Image maxW="17px" mx="auto" src="/images/discord1.png" />
                </Link>
                <Link
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  backgroundImage="/images/insta.png"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="100%"
                  p="15px"
                  href="https://instagram.com/theprojectino?igshid=YmMyMTA2M2Y="
                  // mr="30px"
                  color="black"
                  isExternal
                >
                  <Image maxW="17px" mx="auto" src="/images/ig.png" />
                </Link>
              </Flex>
            </Flex>
          </Flex>
          <Box
            as="button"
            bg="transparent"
            p="2"
            onClick={onOpen}
            display={{ base: 'block', md: 'none' }}
          >
            <HiMenu color="primary" size="30" />
          </Box>
        </Flex>
      </Box>
      <Drawer
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
        display={{ base: 'block', md: 'none' }}
      >
        <DrawerOverlay />
        <DrawerContent bg="#FEFAEF">
          <DrawerHeader color="black" borderBottomWidth="1px">
            Menu
          </DrawerHeader>
          <DrawerBody>
            <Box
              // maxW="120px"
              // mx="auto"
              // alignItems="center"
              // w="100%"
              flexDirection="column"
              fontSize="17px"
              display={{ base: 'block', md: 'none' }}
            >
              <Link
                backgroundImage="/images/home.png"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="contain"
                p="20px"
                w="100px"
                href="#about"
                // mr="10px"
                color="white"
                display="block"
              >
                HOME
              </Link>

              <Link
                backgroundImage="/images/e1.png"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="contain"
                p="20px"
                display="block"
                w="70px"
                href="#about"
                color="white"
              >
                E1
              </Link>

              <Link
                backgroundImage="/images/galler.png"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="contain"
                p="20px"
                href="#about"
                display="block"
                w="120px"
                color="white"
              >
                EVA MAP
              </Link>
              <Link
                alignItems="center"
                justifyContent="center"
                backgroundImage="/images/galler.png"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="contain"
                p="10px"
                href="#about"
                display="block"
                w="120px"
                color="white"
              >
                <Text textAlign="center"> MANIFESTO</Text>
              </Link>
              <Link
                backgroundImage="/images/galler.png"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="contain"
                p="20px"
                href="#about"
                display="block"
                w="120px"
                color="white"
              >
                GALLERY
              </Link>
              <Link
                backgroundImage="/images/galler.png"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="contain"
                p="20px"
                href="#about"
                display="block"
                w="120px"
                color="white"
              >
                CAREER
              </Link>
              <Flex>
                {' '}
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  backgroundImage="/images/twitter.png"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="contain"
                  p="15px"
                  href="#about"
                  // mr="30px"
                  color="black"
                >
                  <Link href="https://www.twitter.com/" isExternal>
                    <Image maxW="17px" mx="auto" src="/images/twiterimage.png" />
                  </Link>
                </Flex>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  backgroundImage="/images/discord.png"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="contain"
                  p="15px"
                  href="#about"
                  // mr="30px"
                  color="black"
                >
                  <Link href="https://www.discord.com/" isExternal>
                    <Image maxW="17px" mx="auto" src="/images/discord1.png" />
                  </Link>
                </Flex>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  backgroundImage="/images/insta.png"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="contain"
                  p="15px"
                  href="#about"
                  // mr="30px"
                  color="black"
                >
                  <Link href="https://www.instagram.com/" isExternal>
                    <Image maxW="17px" mx="auto" src="/images/ig.png" />
                  </Link>
                </Flex>
              </Flex>
            </Box>

            {/* {!address ? (
              <Flex
                className="mobile-btn"
                as="button"
                mt="30px"
                bg="white"
                width="200px"
                h="40px"
                fontWeight="bold"
                color="black"
                borderRadius="5px"
                justifyContent="center"
                alignItems="center"
                borderWidth="2px"
                borderColor="black"
                onClick={onConnect}
              >
                CONNECT
              </Flex>
            ) : (
              <Box
                fontWeight="bold"
                bgGradient="linear(to-r, #FE9C28, #FADB37)"
                px="20px"
                py="10px"
                borderRadius="25px"
              >
                <Text color="black">{shortenAddress(address || '')}</Text>
              </Box>
            )} */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
