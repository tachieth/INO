import React, { useState } from 'react';
import { Box, Flex, Text, Heading, Input, Image } from '@chakra-ui/react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Header} from '../components';


export default function Home({data = {}, onConnect, address, onMint}) {
  const [count, setCount] = useState(1);
  const { maxSupply = 10000, totalSupply = 0, maxMintAmount = 10, cost = 0.06, loading=false } = data;

  return (
    <Box
      // minH={{ base: '35vh', md: '125vh' }}
      // backgroundSize={{ base: '100%', md: '100%' }}
      // backgroundPosition="top"
      // backgroundImage="/images/bg.jpg"
      // backgroundRepeat="no-repeat"
      position="relative"
    >
      <Image  src="/images/bg.jpg" w="100vw" />
      <Header onConnect={onConnect} address={address} />

      {/* <Box
        position="absolute"
        left="0"
        right="0"
        top="0"
        bottom="0"
        bg="black"
        opacity="0.55"
      ></Box> */}
      {/* <Box maxW="1200px" mx="auto" position="relative" zIndex="2" h="100vh">
        {/* <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          h="100%"
          px={{ base: '20px', md: 0 }}
        >
          {/* <Flex flexDirection="column" justifyContent="center" alignItems="center" my="20px">
            <Heading color="white" fontSize="4xl" mb="15px">
              {`${totalSupply}/${maxSupply}`}
            </Heading>
            <Text color="white" fontSize="2xl">
              {` Mint ${count} DUMMY for ${Number(count * cost).toFixed(2)} ETH`}
            </Text>
            <Flex justifyContent="space-between" mt="30px" alignItems="center">
              <Flex
                as="button"
                bg="green.700"
                color="white"
                px="20px"
                h="50px"
                minW="50px"
                justifyContent="center"
                alignItems="center"
                borderRadius="5px"
                borderRightRadius="0px"
                onClick={() => {
                  if (Number(count) > 1) {
                    setCount(count - 1);
                  }
                }}
              >
                <AiOutlineMinus size="50" />
              </Flex>
              <Input
                type="number"
                h="50px"
                color="black"
                bg="white"
                borderRadius="0px"
                min="1"
                max="10"
                minW="100px"
                textAlign="center"
                fontSize="xl"
                fontWeight="bold"
                value={count}
                onChange={(e) => {
                  const { value } = e.target;
                  if (Number(value) <= Number(maxMintAmount)) {
                    setCount(value);
                  }
                }}
              />
              <Flex
                as="button"
                bg="green.700"
                color="white"
                px="20px"
                h="50px"
                minW="50px"
                justifyContent="center"
                alignItems="center"
                borderRadius="5px"
                borderLeftRadius="0px"
                onClick={() => {
                  if (Number(count) < Number(maxMintAmount)) {
                    setCount(count + 1);
                  }
                }}
              >
                <AiOutlinePlus size="50" />
              </Flex>
            </Flex>
          </Flex> */}
      {/* <Flex mt="20px">
            <Box
              as="button"
              bg="green.700"
              color="white"
              px="20px"
              h="50px"
              justifyContent="center"
              alignItems="center"
              fontSize="xl"
              borderRadius="5px"
              fontWeight="bold"
              className={loading || totalSupply === maxSupply ? 'disabled' : ''}
              onClick={() => (loading ? {} : !address ? onConnect() : onMint(count))}
            >
              {totalSupply === maxSupply
                ? 'Sold out'
                : loading
                ? 'Please wait...'
                : 'Mint yours now'}
            </Box>
          </Flex> */}
      {/* <Flex flexDirection={{ base: 'column', md: 'row' }}>
            <Heading color="white" mr="20px">
              This is a heading
            </Heading>
            <Text color="red" mr="50px">
              This isa text
            </Text>
            <Image w="200px" src="/images/1.jpeg" />
          </Flex> */}
      {/* </Flex> */}
      {/* </Box> */}
    </Box>
  );
}
