import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';

export default function TeamModal({ onClose }) {
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
        <Flex flexDirection="column" px="30px" justifyContent="center" textAlign="left">
          <Heading color="primary" fontSize="6xl" mb="20px">
            TEAM
          </Heading>
          <Text color="primary" mb="30px">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem ipsum sit quae harum,
            aliquam deserunt nobis error, debitis modi sequi repellendus quisquam.
          </Text>
          <Box mb="30px">
            <Text color="primary" fontWeight="bold">
              Lorem ipsum dolor
            </Text>
            <Text color="primary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem ipsum sit quae harum,
              aliquam deserunt nobis error, debitis modi sequi repellendus quisquam.
            </Text>
          </Box>
          <Box mb="30px">
            <Text color="primary" fontWeight="bold">
              Lorem ipsum dolor
            </Text>
            <Text color="primary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem ipsum sit quae harum,
              aliquam deserunt nobis error, debitis modi sequi repellendus quisquam.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
