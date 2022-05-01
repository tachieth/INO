import { Flex, Heading } from '@chakra-ui/react';

export default function Demo() {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" position="relative" minH="100%" py="30px">
      <Heading color="white" mb="30px">NFT Game</Heading>
      <video id="video" controls>
        <source src="/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Flex>
  );
}
