import React from 'react';
import { Flex, Box, Heading, Text, Image } from '@chakra-ui/react';

export default function Mint() {
  const [count, setCount] = React.useState(1);
  return (
    <Box maxW="1200px" mx="auto" w="100%" pb="50px" px={{ base: '20px', md: '0' }}>
      <Heading color="primary" fontSize={{ base: '35px', md: '76px', lg: '8xl' }}>
        MINT YOUR INO{' '}
        <Box display="inline-block" opacity="0.8">
          (PHASE X)
        </Box>
      </Heading>
      <Box w="100%" h="3px" bg="primary" opacity="0.8" mt="20px" mb="40px"></Box>
      <Flex flexDirection="column" alignItems="center">
        <Text color="primary" fontSize={{ base: '20px', md: '32px' }} fontWeight="bold">
          <Box display="inline-block" opacity="0.8">
            X
          </Box>
          /10,000 REMAINING
        </Text>
        <Image src="/images/mint_banner.jpeg" maxW={{ base: '100%', md: '500px' }} my="30px" />
        <Text color="primary" fontSize={{ base: '20px', md: '32px' }} fontWeight="bold">
          HOW MANY INO DO YOU WANT TO MINT?
        </Text>
        <Flex my="20px">
          <Flex
            as="button"
            opacity={Number(count) === 1 ? '1' : '0.8'}
            justifyContent="center"
            alignItems="center"
            backgroundImage="/images/mint_num_1.png"
            backgroundPosition="center"
            backgroundSize="cover"
            w={{ base: '50px', md: '80px' }}
            h={{ base: '50px', md: '80px' }}
            onClick={() => setCount(1)}
          >
            <Text color="white" fontSize={{ base: '20px', md: '32px' }} fontWeight="bold">
              1
            </Text>
          </Flex>
          <Flex
            as="button"
            opacity={Number(count) === 2 ? '1' : '0.8'}
            justifyContent="center"
            alignItems="center"
            backgroundImage="/images/mint_num_1_3.png"
            backgroundPosition="center"
            backgroundSize="cover"
            w={{ base: '50px', md: '80px' }}
            h={{ base: '50px', md: '80px' }}
            onClick={() => setCount(2)}
          >
            <Text color="white" fontSize={{ base: '20px', md: '32px' }} fontWeight="bold">
              2
            </Text>
          </Flex>
          <Flex
            as="button"
            opacity={Number(count) === 3 ? '1' : '0.8'}
            justifyContent="center"
            alignItems="center"
            backgroundImage="/images/mint_num_1_3.png"
            backgroundPosition="center"
            backgroundSize="cover"
            w={{ base: '50px', md: '80px' }}
            h={{ base: '50px', md: '80px' }}
            onClick={() => setCount(3)}
          >
            <Text color="white" fontSize={{ base: '20px', md: '32px' }} fontWeight="bold">
              3
            </Text>
          </Flex>
          <Flex
            as="button"
            opacity={Number(count) === 4 ? '1' : '0.8'}
            justifyContent="center"
            alignItems="center"
            backgroundImage="/images/mint_num_1_3.png"
            backgroundPosition="center"
            backgroundSize="cover"
            w={{ base: '50px', md: '80px' }}
            h={{ base: '50px', md: '80px' }}
            onClick={() => setCount(4)}
          >
            <Text color="white" fontSize={{ base: '20px', md: '32px' }} fontWeight="bold">
              4
            </Text>
          </Flex>
          <Flex
            as="button"
            opacity={Number(count) === 5 ? '1' : '0.8'}
            justifyContent="center"
            alignItems="center"
            backgroundImage="/images/mint_num_5.png"
            backgroundPosition="center"
            backgroundSize="cover"
            w={{ base: '50px', md: '80px' }}
            h={{ base: '50px', md: '80px' }}
            onClick={() => setCount(5)}
          >
            <Text color="white" fontSize={{ base: '20px', md: '32px' }} fontWeight="bold">
              5
            </Text>
          </Flex>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          // backgroundImage="/images/mint_btn.png"
          // backgroundPosition="center"
          // backgroundSize="100%"
          className="detail-box"
          w="250px"
          h={{ base: '60px', md: '70px' }}
          borderRadius="15px"
          as="button"
          mt="20px"
        >
          <Text color="white" fontSize={{ base: '18px', md: '24px' }} fontWeight="bold">
            MINT
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
