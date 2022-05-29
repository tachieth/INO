import React, { useState } from 'react';
import {
  Box,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
import { Header } from '../components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const factions = new Array(5).fill(0).map((_, i) => i);

const data = [
  {
    title: 'What is Project Ino?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus explicabo error in ut ratione omnis, eius vero corporis aut doloremque adipisci nam minus iusto consequatur. Eveniet corrupti eius alias fuga.',
  },
  {
    title: 'What is Project Ino?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus explicabo error in ut ratione omnis, eius vero corporis aut doloremque adipisci nam minus iusto consequatur. Eveniet corrupti eius alias fuga.',
  },
  {
    title: 'What is Project Ino?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus explicabo error in ut ratione omnis, eius vero corporis aut doloremque adipisci nam minus iusto consequatur. Eveniet corrupti eius alias fuga.',
  },
  {
    title: 'What is Project Ino?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus explicabo error in ut ratione omnis, eius vero corporis aut doloremque adipisci nam minus iusto consequatur. Eveniet corrupti eius alias fuga.',
  },
];

export default function E1() {
  const [activeFraction, setActiveFraction] = useState(0);
  return (
    <>
      <Flex
        minH={{ base: '100vh', md: '100vh' }}
        position="relative"
        w="100%"
        py="20px"
        flexDirection="column"
        pb="80px"
      >
        <Flex
          h={{ base: '100%', md: '100%' }}
          maxW="1200px"
          mx="auto"
          w="100%"
          flexDirection="column"
        >
          <Box borderBottomWidth="2px" borderColor="primary">
            <Heading mb="20px" fontWeight="bold" fontSize="75px" color="primary">
              PLANET E1
            </Heading>
          </Box>
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            py="40px"
            w="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              as="button"
              onClick={() => {}}
              mb={{ base: '20px', md: '0' }}
              h="260px"
              w="260px"
              bg="primary"
            >
              <Image src={`https://source.unsplash.com/random/260x260?sig=299`} w="100%" />
            </Box>
            <Box
              as="button"
              onClick={() => {}}
              mb={{ base: '20px', md: '0' }}
              h="260px"
              w="260px"
              bg="primary"
            >
              <Image src={`https://source.unsplash.com/random/260x260?sig=500`} w="100%" />
            </Box>
            <Box
              as="button"
              onClick={() => {}}
              mb={{ base: '20px', md: '0' }}
              h="260px"
              w="260px"
              bg="primary"
            >
              <Image src={`https://source.unsplash.com/random/260x260?sig=124`} w="100%" />
            </Box>
            <Box
              as="button"
              onClick={() => {}}
              mb={{ base: '0', md: '0' }}
              h="260px"
              w="260px"
              bg="primary"
            >
              <Image src={`https://source.unsplash.com/random/260x260?sig=134`} w="100%" />
            </Box>
          </Flex>

          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            pb="10px"
            w="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              mb={{ base: '20px', md: '0' }}
              h="260px"
              w={{ base: '350px', md: '570px' }}
              bg="primary"
              as="button"
              onClick={() => {}}
            >
              <Image src={`https://source.unsplash.com/random/600x300?sig=140`} w="100%" />
            </Box>
            <Box
              mb={{ base: '20px', md: '0' }}
              h="260px"
              w="260px"
              bg="primary"
              as="button"
              onClick={() => {}}
            >
              <Image src={`https://source.unsplash.com/random/260x260?sig=1442`} w="100%" />
            </Box>
            <Box h="260px" w="260px" bg="primary" as="button" onClick={() => {}}>
              <Image src={`https://source.unsplash.com/random/260x260?sig=14`} w="100%" />
            </Box>
          </Flex>

          <Flex
            px={{ base: '20px', md: '0' }}
            py="30px"
            w="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box h="260px" w="1200px" bg="primary" as="button" onClick={() => {}}>
              <Image src={`https://source.unsplash.com/random/1200x300?sig=122`} w="100%" />
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        bg="primary"
        minH={{ base: '100vh', md: '100vh' }}
        position="relative"
        w="100%"
        py="20px"
        flexDirection="column"
      >
        <Flex
          h={{ base: '100%', md: '100%' }}
          maxW={{ base: 'auto', md: '1200px' }}
          mx="auto"
          w="100%"
          flexDirection="column"
        >
          <Box px={{ base: '20px', md: '0' }} pt={{ base: '0px', md: '50px' }}>
            <Heading color="#FEFAEF" mb="20px" fontWeight="bold" fontSize="75px">
              FACTIONS
            </Heading>
            <Text mb="20px" textAlign="justify" color="#FEFAEF">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </Text>
          </Box>

          <Flex
            flexDirection={{ base: 'column-reverse', md: 'row' }}
            py="40px"
            justifyContent="space-between"
            w="100%"
            alignItems="center"
          >
            <Flex
              mr={{ base: '10px', md: '0' }}
              px={{ base: '20px', md: '0' }}
              flexDirection={{ base: 'row', md: 'column' }}
            >
              {factions.map((faction) => (
                <Box
                  ml={{ base: '10px', md: '0' }}
                  mb="20px"
                  borderColor="#FEFAEF"
                  borderBottomWidth={{ base: '2px', md: '0' }}
                  borderLeftWidth={{ base: '0', md: '2px' }}
                  opacity={activeFraction === faction ? 1 : 0.5}
                  as="button"
                  onClick={() => {
                    setActiveFraction(faction);
                  }}
                  key={faction}
                >
                  <Image
                    pl={{ base: '0', md: '"20px"' }}
                    mb={{ base: '10px', md: '0' }}
                    src="/images/cube.png"
                  />
                </Box>
              ))}
            </Flex>

            <Box
              mb={{ base: '20px', md: '0' }}
              w={{ base: '350px', md: '1000px' }}
              borderRadius="20px"
              h="55vh"
              bg="#FEFAEF"
              overflow="hidden"
            >
              <Image
                src={`https://source.unsplash.com/random/1000x700?sig=${activeFraction}`}
                w="100%"
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        minH={{ base: '100vh', md: '100vh' }}
        position="relative"
        w="100%"
        py="20px"
        flexDirection="column"
        pb="80px"
      >
        <Flex
          h={{ base: 'calc(100vh - 118px)', md: '100%' }}
          maxW="1200px"
          mx="auto"
          w="100%"
          flexDirection="column"
        >
          <Box pt="80px" borderBottomWidth="2px" borderColor="primary">
            <Heading mb="20px" fontWeight="bold" fontSize="75px" color="primary">
              FAQ
            </Heading>
          </Box>
          <Box py="50px" maxW="90%" mx="auto" w="100%" px={{ base: '20px', md: 0 }}>
            <Accordion allowMultiple allowToggle>
              {data.map((faq) => (
                <AccordionItem key={faq.title} bg="primary" borderRadius="20px" mb="20px" px="40px">
                  <h2>
                    <AccordionButton h="70px">
                      <Box flex="1" textAlign="left">
                        <Heading fontSize="30px" color="#FEFAEF">
                          {faq.title}
                        </Heading>
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <Text fontSize="20px" color="#FEFAEF">
                      {faq.content}
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
