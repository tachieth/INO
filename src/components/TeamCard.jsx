import { Flex, Heading, Image, Text, Box } from '@chakra-ui/react';
export default function TeamCard({ image, name, position ="" }) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      w={{ base: '100%', md: '50%', lg: '30%' }}
    >
      <Flex justifyContent="center" position="relative" w="250px">
        <Image src={image} maxW="200px" />
      </Flex>
      <Heading mt="30px" color="white">
        {name}
      </Heading>
      {position && (
        <Text mb="30px" color="white">
          {position}
        </Text>
      )}
    </Flex>
  );
}
