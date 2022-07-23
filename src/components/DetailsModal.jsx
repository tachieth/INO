import { Box, Flex, Heading, Text, Image, Link, Grid, GridItem } from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';

export default function DetailsModal({ onClose, id, data }) {
  const formatId = (str) => {
    if (str.length === 1) {
      return `000${str}`;
    } else if (str.length === 2) {
      return `00${str}`;
    } else if (str.length === 3) {
      return `0${str}`
    } else {
      return str;
    }
  }
  const formatImage = () => {
    return `https://projectino.app/images/${Number(id) - 1}.png`;
  };
  return (
    <Flex
      bg="rgba(0, 0, 0, 0.5)"
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex="998"
      justifyContent="center"
      alignItems="center"
      px={{ base: '20px', md: '0' }}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        w="100%"
        h="100%"
        onClick={onClose}
      ></Box>
      <Flex
        bg="white"
        maxW="1100px"
        w="100%"
        h={{ base: '90%', md: '350px' }}
        my={{ base: 'auto', md: 0 }}
        justifyContent="center"
        alignItems="center"
        position="relative"
        zIndex="999"
        overflowY={{ base: 'scroll', md: 'auto' }}
      >
        <Box position="absolute" right="20px" top="20px" as="button" onClick={onClose}>
          <AiOutlineClose size="25" />
        </Box>
        <Flex py="10px" textAlign="left" w="100%" flexDirection={{ base: 'column', md: 'row' }}>
          <Box bg="rgba(9, 96, 105, 0.2)" w="350px" h="350px">
            <Image src={formatImage()} w="100%" h="100%" objectFit="cover" />
          </Box>
          <Box py="20px" px={{ base: '20px', md: '0' }} ml={{ base: 0, md: '20px' }} w="100%">
            <Flex alignItems="center" mb="50px">
              <Heading color="primary" fontSize="24px">
                {`INO #${formatId(id.toString())}`}
              </Heading>
              <Link
                href={`https://opensea.io/assets/ethereum/0xf5427f53bb7362d2cedcd143bcf0a6a16ecb916a/${id}`}
                isExternal
                ml="10px"
              >
                <Image src="/images/opensea-black.svg" w="40px" />
              </Link>
            </Flex>
            <Grid
              templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
              templateRows="repeat(4, 1fr)"
              gap={2}
            >
              {data.attributes.map((attr, i) => (
                <GridItem key={i} display="flex" alignItems="center">
                  <Text fontSize="18px" fontWeight="bold" mr="10px">{`${attr.trait_type}:`}</Text>
                  <Text fontSize="16px">{`${attr.value} (${attr.percentile.toFixed(2)})`}</Text>
                </GridItem>
              ))}
            </Grid>

            <Text fontSize="18px" fontWeight="bold" mt="50px">{`Rank: ${data.rank}`}</Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
