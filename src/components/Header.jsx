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
  Heading,
} from '@chakra-ui/react';
import { HiMenu } from 'react-icons/hi';

import { shortenAddress } from '../candy-machine';

export default function Header({ address, onConnect }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = React.useState('left');

  return (
    <>
      <Box p="15px" left="20px" position="absolute" top="20px" zIndex="5">
        <Flex maxW="1200px" mx="auto" justifyContent="space-between" alignItems="center">
          {/* <Heading color="white">DUMMY</Heading> */}

          {/* <Box display={{ base: 'none', md: 'block' }}>
            <Link href="#about" className="link" mr="25px" color="white">
              About
            </Link>
            <Link href="#roadmap" className="link" mr="25px" color="white">
              Roadmap
            </Link>
            <Link href="#gallery" className="link" mr="25px" color="white">
              Gallery
            </Link>

            <Link href="#team" className="link" color="white">
              Team
            </Link>
          </Box> */}
          {/* {address ? (
            <Flex
              as="button"
              bg="blue"
              width="260px"
              h="60px"
              color="white"
              borderRadius="35px"
              justifyContent="center"
              alignItems="center"
              className="desktop-btn"
              display={{ base: 'none', lg: 'flex' }}
              onClick={onConnect}
            >
              Connect Wallet
            </Flex>
          ) : (
            <Flex
              bg="blue"
                w="260px"
                h="60px"
                borderRadius="35px"
                justifyContent="center"
                alignItems="center"
              display={{ base: 'none', lg: 'flex' }}
            >
              <Text color="white">{shortenAddress(address || '')}</Text>
            </Flex>
          )} */}
          <Box
            as="button"
            bg="#32492d"
            p="2"
            onClick={onOpen}
            display={{ base: 'block', md: 'block' }}
          >
            <HiMenu color="white" size="30" />
          </Box>
        </Flex>
      </Box>
      <Drawer
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
        display={{ base: 'block', md: 'block' }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader bg="#32492d" color="white" borderBottomWidth="1px">
            Menu
          </DrawerHeader>
          <DrawerBody bg="#32492d" color="white">
            <Link
              href="#about"
              className="link"
              display="block"
              // color="black"
              fontSize="18px"
              py="15px"
            >
              About
            </Link>
            <Link
              href="#roadmap"
              className="link"
              display="block"
              // color="black"
              fontSize="18px"
              py="15px"
            >
              Roadmap
            </Link>
            {/* <Link
              href="#mission"
              className="link"
              display="block"
              // color="black"
              fontSize="18px"
              py="15px"
            >
              Mission
            </Link> */}

            <Link
              href="#team"
              display="block"
              className="link"
              // color="black"
              fontSize="18px"
              py="15px"
            >
              Team
            </Link>
            <Link
              href="/Whitepaper.pdf"
              className="link"
              display="block"
              // color="black"
              fontSize="18px"
              py="15px"
              isExternal
            >
              Whitepaper
            </Link>

            {!address ? (
              <Flex
                className="mobile-btn"
                as="button"
                bg="#cc9967"
                width="200px"
                h="50px"
                color="white"
                borderRadius="25px"
                justifyContent="center"
                alignItems="center"
                onClick={onConnect}
                mt="15px"
              >
                Connect Wallet
              </Flex>
            ) : (
              <Flex
                bg="#cc9967"
                width="200px"
                h="50px"
                borderRadius="25px"
                justifyContent="center"
                alignItems="center"
                mt="15px"
              >
                <Text color="white">{shortenAddress(address || '')}</Text>
              </Flex>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
