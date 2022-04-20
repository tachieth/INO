import { Flex, Heading } from '@chakra-ui/react';

import TeamCard from '../components/TeamCard';

export default function About() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      id="team"
      px={{ base: '20px', md: 0 }}
      py="50px"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        justifyContent="flex-start"
        flexDirection="column"
        alignItems="center"
      >
        <Heading color="white" fontSize="6xl" fontWeight="bold" mt="30px" mb="30px">
          Team
        </Heading>
        <Flex
          justifyContent={{ base: 'flex-start', md: 'space-between' }}
          alignItems={{ base: 'center', md: 'flex-start' }}
          flexWrap="wrap"
        >
          <TeamCard name="Frank Choi" image="/images/t1.jpg" position="Founder" />
          <TeamCard name="Social Gravity" image="/images/t2.jpg" position="Marketing Director" />
          <TeamCard name="Hansan" image="/images/t3.jpg" position="Art Director" />
          <TeamCard
            name="Faisal Ali"
            image="/images/t4.jpg"
            position="Smart Contract & Developer"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
