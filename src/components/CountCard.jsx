import { Flex, Text } from '@chakra-ui/react';

export default function CountCard({text, noMargin, type}) {
  return (
    <>
      <Flex flexDirection="column" py="20px" justifyContent="center" alignItems="center" className="glass" mr={noMargin ? "0" : "20px"} minW="200px">
        <Text color="white" fontSize="5xl" fontWeight="bold">{text}</Text>
        <Text color="white" fontSize="2xl" fontWeight="bold" mt="10px">{type}</Text>
      </Flex>
    </>
  )
}
