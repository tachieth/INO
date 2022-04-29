import { Flex, Text, Heading, Image, Box } from '@chakra-ui/react';
import { HiArrowSmUp, HiArrowSmDown } from 'react-icons/hi';

export default function About() {
  return (
    <Flex
      maxW="1200px"
      mx="auto"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      py={{ base: '0', md: '50px' }}
      id="about"
      px={{ base: '20px', md: 0 }}
    >
      <Flex
        mt={{ base: '0', md: '20px' }}
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="space-around"
        w="100%"
        alignItems="center"
      >
        <Box mb={{ base: '20px', md: 0 }}>
          <Image w="500px" src="/images/logo.png" />
        </Box>

        <Box color="text" maxW="550px" mx="auto">
          <Heading fontSize="45px" mb={{ base: '10px', md: '30px' }} color="darkGreen">
            Territorian Lore
          </Heading>

          <Text mb="20px">
            Territoria is a benevolent planet with peaceful, tree- like creatures. Meet the
            Territorians- population, 10,000. Everyone on beautiful Territoria enjoyed their days
            playing board games and spent their nights rooting energy.
          </Text>
          <Text mb="20px">
            The Territorians are gentle and peaceful manner creatures without knowing any
            violence... until one day..
          </Text>
          <Text mb="20px">
            Another small planet crashed into Territoria, changing the lives of all civilians
            overnight. The collision created a giant hole in their breathable ozone, making
            Territoria a hostile place to live. Now, all Territorians must battle for land in order
            to maintain their energy and gather resources.
          </Text>
          <Text>
            The friendly games they played to settle arguments are now a fierce means of survival.
          </Text>

          <Flex
            mt="40px"
            w="100%"
            maxW="800px"
            mx="auto"
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="space-around"
          >
            <Flex
              mb={{ base: '20px', md: 0 }}
              // bg="white"
              color="darkGreen"
              borderWidth="1px"
              w="250px"
              h="50px"
              borderColor="darkGreen"
              justifyContent="center"
              alignItems="center"
              position="relative"
            >
              <Heading fontSize="30px">1</Heading>

              <Flex position="absolute" right="10px" flexDirection="column">
                <Box as="button">
                  <HiArrowSmUp color="#EFFAFF" size="15" />
                </Box>
                <Box as="button">
                  <HiArrowSmDown color="#EFFAFF" size="15" />
                </Box>
              </Flex>
            </Flex>

            <Box color="black" bg="darkGreen" borderRadius="20px" w="250px" h="50px" as="button">
              <Heading fontSize="20px">CONNECT WALLET</Heading>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
