import { Flex, Text, Heading, Image, Box } from '@chakra-ui/react';

export default function About() {
  return (
    <Flex
      maxW="1200px"
      mx="auto"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      py="10px"
      id="mission"
      px={{ base: '20px', md: 0 }}
      pb="50px"
    >
      <Flex
        mt="20px"
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="space-around"
        w="100%"
        alignItems="center"
      >
        <Box>
          <Image mb={{ base: '20px', md: 0 }} w="500px" src="/images/mision.png" />
        </Box>

        <Box color="white" maxW="550px" mx="auto">
          <Heading
            textAlign={{ base: 'center', md: 'left' }}
            fontSize="45px"
            mb={{ base: '10px', md: '30px' }}
          >
            {' '}
            Mission
          </Heading>

          <Text mb="20px">
            Our mission is to provide an engaging, user-first NFT game that feels like you’re
            playing with family members. We believe that NFT games should be more accessible to all
            and that the community should be welcoming and positive.
          </Text>
          <Text mb="20px">
            Our mobile-first gaming experience provides stable passive tokens through in-game
            breeding and holding opportunities within the Territorian economy.
          </Text>
          <Text mb="20px">
            In- game competitions incentivize users to earn passive tokens through our native
            cryptocurrency, $TERR.
          </Text>
          <Heading
            fontSize="45px"
            color="white"
            textAlign={{ base: 'center', md: 'left' }}
            maxW="1100px"
            mt="40px"
            mb={{ base: '10px', md: '20px' }}
          >
            Vision
          </Heading>
          <Text color="white" mb="30px" textAlign={{ base: 'center', md: 'left' }} maxW="1100px">
            Territorian is an NFT based game that allows users to earn passive tokens with our play
            to earn economy. Our vision would not exist without our community, because Territorian
            is synonymous with the community built around it.
          </Text>
          <Text color="white" mb="30px" textAlign={{ base: 'center', md: 'left' }} maxW="1100px">
            Our vision for how users interact with the Territorian ecosystem will continue to expand
            over time, and it’s important to note that we will grow and expand through observing
            user gameplay and user feedback.
          </Text>
          <Text color="white" mb="20px" textAlign={{ base: 'center', md: 'left' }} maxW="1100px">
            Territorian feels more like playing your favorite board game around the table with good
            company rather than engaging with a complicated platform. We noticed that the current
            NFT games on the market felt a little cold and robotic, so we created Territorian to be
            human- friendly and accessible for all- embracing newcomers and experienced holders
            alike.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
