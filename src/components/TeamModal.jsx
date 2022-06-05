import { Box, Flex, Heading, Text, Image, Link } from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';

const data = {
  PR: [
    {
      image: 'Moy.png',
      name: 'Moy',
      twitter: 'https://twitter.com/moy_nft',
    },
  ],
  ART: [
    {
      image: 'Motion.png',
      name: 'Motionscorp',
      twitter: 'https://twitter.com/motionscorp',
    },
    {
      image: 'Claire.png',
      name: 'Claire Tea',
      twitter: 'https://twitter.com/KwentongI',
    },
    {
      image: 'Yeezi.png',
      name: 'Yeezi',
      twitter: 'https://twitter.com/yeezi_eth',
    },
  ],
  MARKETING: [
    {
      image: 'Bubz.png',
      name: 'Bubz',
      twitter: 'https://twitter.com/thebubzlife',
    },
    {
      image: 'Jamsboy.png',
      name: 'Jamsboy',
      twitter: 'https://twitter.com/jamsboooy',
    },
  ],
  DEV: [
    {
      image: 'Tachi.png',
      name: 'Tachi',
      twitter: 'https://twitter.com/ETHTachi',
    },
    {
      image: 'EVA Labs.png',
      name: 'EVA Labs',
      twitter: 'https://twitter.com/EVALabsLLC',
    },
  ],
  COMMUNITY: [
    {
      image: 'Crush.png',
      name: 'Crush',
      twitter: 'https://twitter.com/Crush_NFT_',
    },
    {
      image: 'CurryD.png',
      name: 'Curry',
      twitter: 'https://twitter.com/MzzPeter',
    },
    {
      image: 'InoCruncher.png',
      name: 'InoCruncher',
      twitter: 'https://twitter.com/InoCruncher',
    },
    {
      image: 'Pengu.png',
      name: 'Pengu',
      twitter: 'https://twitter.com/PenguxnNFT',
    },
  ],
};

export default function TeamModal({onClose, type}) {
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
          {data[type].map((user, i) => (
            <Box
              textAlign="center"
              mr={i + 1 === data[type].length ? 0 : '20px'}
              maxW="180px"
              key={user.image}
            >
              <Image src={`/images/${user.image}`} maxW="180px" />
              <Heading color="primary" fontSize="2xl" my="10px">
                {user.name}
              </Heading>
              <Link href={user.twitter} isExternal>
                <Text color="primary">@twitter</Text>
              </Link>
            </Box>
          ))}
          {/* <Box textAlign="center" mr="20px" maxW="180px">
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
          </Box> */}
        </Flex>
      </Flex>
    </Flex>
  );
}
