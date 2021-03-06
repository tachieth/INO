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

export default function Career() {
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
        px={{ base: '20px', md: '0' }}
      >
        <Box borderBottomWidth="2px" borderColor="primary">
          <Heading
            mb="20px"
            fontWeight="bold"
            fontSize={{ base: '35px', md: '76px' }}
            color="primary"
          >
            CAREER
          </Heading>
        </Box>
      </Flex>
    </Flex>
  );
}
