import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';

export default function TeamModal({onClose}) {
  return (
    <Flex
      bg="rgba(0, 0, 0, 0.5)"
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex="999"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        bg="white"
        maxW="1100px"
        w="100%"
        h="550px"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Box position="absolute" right="20px" top="20px" as="button" onClick={onClose}>
          <AiOutlineClose size="25" />
        </Box>
        <Flex justifyContent="center" alignItems="center">
          <Box textAlign="center" mr="20px" maxW="180px">
            <Image src="/images/1.png" maxW="180px" />
            <Heading color="primary" fontSize="2xl" my="10px">
              User 1
            </Heading>
            <Text color="primary">@twitter</Text>
          </Box>
          <Box textAlign="center" mr="20px" maxW="180px">
            <Image src="/images/2.png" maxW="180px" />
            <Heading color="primary" fontSize="2xl" my="10px">
              User 2
            </Heading>
            <Text color="primary">@twitter</Text>
          </Box>
          <Box textAlign="center" mr="20px" maxW="180px">
            <Image src="/images/3.png" maxW="180px" />
            <Heading color="primary" fontSize="2xl" my="10px">
              User 3
            </Heading>
            <Text color="primary">@twitter</Text>
          </Box>
          <Box textAlign="center" maxW="180px">
            <Image src="/images/4.png" maxW="180px" />
            <Heading color="primary" fontSize="2xl" my="10px">
              User 4
            </Heading>
            <Text color="primary">@twitter</Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
