import { Flex, Heading } from '@chakra-ui/react';

import TeamCard from '../components/TeamCard';
import Benji from '../assets/benji.jpeg';
import Giovanni from '../assets/giovanni.jpeg';
import Matt from '../assets/matt.jpeg';
import Paul from '../assets/paul.jpeg';

export default function About() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      py="30px"
      id="team"
      px={{ base: '20px', md: 0 }}
    >
      <Flex
        maxW="1200px"
        mx="auto"
        justifyContent="flex-start"
        flexDirection="column"
        alignItems="center"
      >
        <Heading color="white" fontSize="6xl" fontWeight="bold" mt="50px" mb="30px">
          Team
        </Heading>
        <Flex
          justifyContent={{ base: 'flex-start', md: 'space-between' }}
          alignItems={{ base: 'center', md: 'flex-start' }}
          flexWrap="wrap"
        >
          <TeamCard name="DUMMY" image={Benji} position="Co-founder and Business Expert" />
          <TeamCard name="DUMMY" image={Giovanni} position="Co-founder and Community Expert" />
          <TeamCard name="DUMMY" image={Matt} position="Marketing expert" />
          <TeamCard name="DUMMY" image={Paul} position="nft advisor" />
          <TeamCard
            name="DUMMY"
            image="roberto.jpeg"
            position="Co-founder and Blockchain Developer"
          />
          <TeamCard name="DUMMY" image="zane.jpeg" position="DUMMY artists" />
        </Flex>
      </Flex>
    </Flex>
  );
}
