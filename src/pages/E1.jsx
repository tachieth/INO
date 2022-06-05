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

import GalleryModal from '../components/GalleryModal';

const factions = new Array(5).fill(0).map((_, i) => i);

const data = [
  {
    title: 'What is Project INO?',
    content:
      'Project INO is a story-driven and perks-inclusive collection starring an open-world narrative around Planet E1 where wonders and unexpected realities occur. Dive into our world of Planet E1 to venture out the MMORPG experience EVA Labs seeks out to create.',
  },
  {
    title: 'How many NFTs are in Project INO NFT Collection? ',
    content:
      'Ino is a collection of 9,999 non-fungible tokens (NFTs) that is hosted on the Ethereum Blockchain.',
  },
  {
    title: 'Who founded Project Ino?',
    content:
      'Project Ino is powered by EVA Labs — founded by Tachi; an enthusiast of tech, world-building and MMORPG experience.',
  },
  {
    title: 'Who made the art?',
    content:
      'With the creative director, Tachi, has explored possibilities and passed on the visions of Planet E1, inclusive of the storyline occurred in Planet E1 towards our Artists: Claire Tea, Motionscorp and Yeezi.',
  },
  {
    title: 'What is our aim?',
    content:
      'Our goal stands to represent web3 travellers to venture beyond Planet E1 in the form of Ino. You live the life of an Ino, undertake new experiences and aid out in changing our planet. You\'re co-existing amongst other Ino and you have every right and capability to make a change. Your enemy is the droids.',
  },
];

const factionData = [
  {
    name: 'The Selfless – Ganko 頑固 (WE’RE NOT FOND OF RULES):',
    description: `Don't follow rules, leaders themselves, trouble maker // Following the rules was never an option for these rebels and deviants. They are the leaders themselves and they command the control of the alliance. They're reckless trouble makers that cause havoc but still do the job by the end of the day.`,
    image: 'e1_faction_5.png',
  },
  {
    name: 'The Acceptance – Yurushi 許し (THE ACCEPTANCE & FORGIVENESS):',
    description: `Soft people, forgive and joyful //  They are the forgiving ones. They put their hearts and emotions firsthand before acting up. They have a great sense of acceptance and they're very careful and meticulous with their actions for the safety of the rest of the travellers.`,
    image: 'e1_faction_4.png',
  },
  {
    name: 'The Fearless – Yukan 勇敢 (THE BRAVE):',
    description: `They do not have any ounce of fear in their system. They are the bravest ones with the greatest influence in the movement of the resistance army against the droids. They are never afraid to shed blood for the Inos to win every war on the battlefield.`,
    image: 'e1_faction_3.png',
  },
  {
    name: 'The Artful - Waké 分け (THE DIVISION):',
    description: `Divides people, segregates // They are the brains of the system. They're accountable for the careful selection of segregation of the Inos to their respective roles and duties as a traveller. `,
    image: 'e1_faction_2.png',
  },
  {
    name: 'The Curious - Miru',
    description: `They hold great power of intellect who relies on their rationality rather than their emotions and feelings. They bring the Inos together as one to pursue mastering the art of learning more complex form of intelligence and strategy against the droids.`,
    image: 'e1_faction_1.png',
  },
];

export default function E1() {
  const [activeFraction, setActiveFraction] = useState(0);
  const [activeNum, setActiveNum] = useState(null);
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
              mb={{ base: '20px', md: '0' }}
              h="260px"
              w="260px"
              bg="primary"
              onClick={() => setActiveNum(1)}
            >
              <Image src="/images/e1_img_1.png" w="100%" />
            </Box>
            <Box
              as="button"
              onClick={() => setActiveNum(2)}
              mb={{ base: '20px', md: '0' }}
              h="260px"
              w="260px"
              bg="primary"
            >
              <Image src="/images/e1_img_2.png" w="100%" />
            </Box>
            <Box
              as="button"
              onClick={() => setActiveNum(3)}
              mb={{ base: '20px', md: '0' }}
              h="260px"
              w="260px"
              bg="primary"
            >
              <Image src="/images/e1_img_3.png" w="100%" />
            </Box>
            <Box
              as="button"
              onClick={() => setActiveNum(4)}
              mb={{ base: '0', md: '0' }}
              h="260px"
              w="260px"
              bg="primary"
            >
              <Image src="/images/e1_img_4.png" w="100%" />
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
              onClick={() => setActiveNum(5)}
              overflow="hidden"
            >
              <Image src="/images/e1_img_5.png" w="100%" />
            </Box>
            <Box
              mb={{ base: '20px', md: '0' }}
              h="260px"
              w="260px"
              bg="primary"
              as="button"
              onClick={() => setActiveNum(6)}
            >
              <Image src="/images/e1_img_6.png" w="100%" />
            </Box>
            <Box h="260px" w="260px" bg="primary" as="button" onClick={() => setActiveNum(7)}>
              <Image src="/images/e1_img_7.png" w="100%" />
            </Box>
          </Flex>

          <Flex
            px={{ base: '20px', md: '0' }}
            py="30px"
            w="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex
              alignItems="center"
              h="260px"
              w="1200px"
              bg="primary"
              as="button"
              onClick={() => setActiveNum(8)}
              overflow="hidden"
            >
              <Image src="/images/e1_img_8.png" w="100%" />
            </Flex>
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
              The factions were created with the hopes of eliminating future war and violence
              against the droids overruling Planet E1. Each Ino must select their respective
              factions and focus on their faction's morals to maintain balance in the monopoly for
              everyone to retain equality and prevent any further conflicts. The factions are each
              dedicated to the cultivation of a particular virtue for the prosperity of Planet E1.
            </Text>
            <Text mb="20px" textAlign="justify" color="#FEFAEF">
              We are a total of five factions. These factions will play a key role in unique
              identities within biomes or throughout the population. Factions will be playing out as
              a personality trait that identifies who they are as a person putting them in specific
              factions.
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
            {factionData.map((faction, index) => (
              <Flex
                alignItems="center"
                key={index}
                display={activeFraction === index ? 'flex' : 'none'}
              >
                <Box
                  mb={{ base: '20px', md: '0' }}
                  borderRadius="20px"
                  w={{ base: '250px', md: '350px' }}
                  bg="#FEFAEF"
                  overflow="hidden"
                  mr="30px"
                >
                  <Image src={`/images/${faction.image}`} w="100%" />
                </Box>
                <Box maxW="550px">
                  <Text color="white" fontWeight="bold" fontSize="24px" mb="10px">
                    {faction.name}
                  </Text>
                  <Text color="white" fontSize="20px">
                    {faction.description}
                  </Text>
                </Box>
              </Flex>
            ))}
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
      {activeNum && <GalleryModal onClose={() => setActiveNum(null)} activeImg={activeNum} />}
    </>
  );
}
