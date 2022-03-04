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
  const [placement] = React.useState('right');

  return (
    <>
      <Box className="header" p="15px">
        <Flex maxW="1200px" mx="auto" justifyContent="space-between" alignItems="center">
          <Heading color="white">DUMMY</Heading>

          <Box display={{ base: 'none', md: 'block' }}>
            <Link href="#about" className="link" mr="15px" color="white">
              About
            </Link>
            <Link href="#roadmap" className="link" mr="15px" color="white">
              Roadmap
            </Link>
            <Link href="#gallery" className="link" mr="15px" color="white">
              Gallery
            </Link>

            <Link href="#team" className="link" color="white" mr="15px">
              Team
            </Link>
          </Box>
          {!address ? (
            <Flex
              as="button"
              bg="green.700"
              width="200px"
              h="40px"
              color="white"
              borderRadius="5px"
              justifyContent="center"
              alignItems="center"
              className="desktop-btn"
              display={{ base: 'none', lg: 'flex' }}
              onClick={onConnect}
            >
              Connect Wallet
            </Flex>
          ) : (
            <Box
              bg="green.700"
              px="20px"
              py="10px"
              borderRadius="5px"
              display={{ base: 'none', lg: 'flex' }}
            >
              <Text color="white">{shortenAddress(address || '')}</Text>
            </Box>
          )}
          <Box
            as="button"
            bg="white"
            p="2"
            onClick={onOpen}
            display={{ base: 'block', md: 'none' }}
          >
            <HiMenu color="black" size="30" />
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
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <Link
              href="#about"
              className="link"
              display="block"
              color="black"
              fontSize="18px"
              py="15px"
            >
              About
            </Link>
            <Link
              href="#roadmap"
              className="link"
              display="block"
              color="black"
              fontSize="18px"
              py="15px"
            >
              Roadmap
            </Link>
            <Link
              href="#gallery"
              className="link"
              display="block"
              color="black"
              fontSize="18px"
              py="15px"
            >
              Gallery
            </Link>

            <Link
              href="#team"
              display="block"
              className="link"
              color="black"
              fontSize="18px"
              py="15px"
            >
              Team
            </Link>

            {!address ? (
              <Flex
                className="mobile-btn"
                as="button"
                bg="green.700"
                width="200px"
                h="40px"
                color="white"
                borderRadius="5px"
                justifyContent="center"
                alignItems="center"
                onClick={onConnect}
              >
                Select Wallet
              </Flex>
            ) : (
              <Box bg="green.700" px="20px" py="10px" borderRadius="5px">
                <Text color="white">{shortenAddress(address || '')}</Text>
              </Box>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
