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

export default function Gallery() {
  return (
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
            GALLERY
          </Heading>
        </Box>
      </Flex>
    </Flex>
  );
}
