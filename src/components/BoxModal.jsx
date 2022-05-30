import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';

const data = {
  'CORE VALUES': {
    title: 'CORE VALUES',
    text1:
      'Welcome to the birth of Ino on Planet E1. You’re at the beginning of an awakening population of stars. Who are we? What do we stand for? Why are we here and how do we do it?',
    head1: 'BIRTH',
    text2:
      "It all starts with a thought, a vision. People become entangled as a result of an idea. It is the CORE of the community and the CORE of the culture. And that's where we start: with a product, events, and activities that revolve around the community.",
    head2: 'VENTING',
    text3:
      'We cherish our community members at Ino, whether they are departing or entering. Everyone is invited to freely express their praise or criticism. As a result, we are more receptive to suggestions for improvements and new ideas.',
    head3: 'VISION',
    text4:
      "Our VISION is our highest priority in Ino. VISION is the glue that holds communities together. The longevity of creating worlds, stories, events and enthusiasm is defined by vision. With visions in Ino, we're here to break the norm and take our own metaverse path.",
  },
  BRAND: {
    title: 'Planet E1',
    text1: 'A long root embarking on a mark for the metaverse marathon – decentralised activities.',
    head1: 'ESTABLISHMENT',
    text2:
      "Embark on a journey to Planet E1 and prepare a community for exploration. On Planet E1, Travelling Ino, we've finally awoken. Awakening in  Planet E1 is merely the beginning; prepare and rest your eyes before the combat with the droids.",
    head2: 'CONNECTIVITY',
    text3:
      'Ino meets Ino, we’re a family and a story. We’re running from trends and creating our own world. We’re not here for a rush, take a rest Ino. Settle down, E1’s been such a hassle from the droids. Let’s connect.',
    head3: 'ACTION',
    text4:
      'Once awakened on Planet E1, Ino takes action. Expand the team, expand the vision; calling all creators. Launch secret missions, actions to our missions. Move the missions to success. Never settle, continue to walk the Planet.',
    head4: 'Exploration of Multichain Usage',
    text5:
      'Our aim is to create something as sufficient, smooth and cost of gas as low as possible to create an enjoyable user’s experience. Exploration is in progress.',
  },
  'PHYSICAL WORLD': {
    title: 'Physical World',
    text1: undefined,
    head1: 'IRL Events',
    text2:
      'As we come along the path of Ino, we seek to connect with our Travelling Ino to host crazy events. Rock and wild vibes throughout our events allow our Ino and outsiders to experience the community and atmosphere of being a part of the Planet E1 ecosystem and family. Live life like in the movies, Ino.',
    head2: 'Partnerships',
    text3:
      'Moving into our world, establishment between Web2 & Web3 from industries of technology, streetwear, entertainment and many more industries to explore to establish and expand EVA Labs.',
    head3: 'Merchandise & Collectibles',
    text4:
      'Establishing a clothing line under the name of EVA Labs throughout the assisting of collaborations. Explore possibilities on creating a real-life product and turning it into a scannable NFT visible on the blockchain.',
    head4: 'Real World Marketplace',
    text5:
      'Exploration of the creating a real-world marketplace with low royalties on each sales to provide emphasis on user’s experience.',
  },
  BRIDGE: {
    title: 'Bridge',
    text1:
      'Connecting the lines between the physical realm and the digital realm, creating dreams and visions into reality. ',
    head1: 'World Building',
    text2:
      'EVA Labs emphasises on building the world of Planet E1 as an Open-World feel towards the ecosystem EVA Labs is creating. Through biomes, species, droids and factions. Experience our Planet through Web 2 & Web 3 technologies – merchandise, toys, animation, photography and many more!',
    head2: 'Video Censorship System',
    text3:
      'As we explore Web2 technology and integrate it with Web3 technology, we believe that it is best to provide an exclusive touch to our holders by implementing an inspired Netflix screenshot/screen sharing censorship system to our website.',
    head3: 'Game Verification',
    text4:
      'Dive into an open-world game – we seek for better security through advanced censorship and verification systems to prevent bypass cases of non-holders of EVA Lab’s collections to receive the full experience of Planet E1.',
    head4: 'Heeka Bot',
    text5:
      'Aiming to improve the security of our holders and providing a better user experience on verifying your NFT assets from EVA Labs.',
  },
  ROOTS: {
    title: 'Roots',
    text1:
      'Settle and strengthen our roots, it’s all a journey for Inos to explore E1. Establish connections in the space and seek for expansion.',
    head1: 'Story Building',
    text2:
      'Dive into an on-going storyline of Planet E1 through artefacts, hidden plot-twists, factions, biomes and many more throughout the storyline! EVA Labs will continue to develop the ecosystem through hidden NFT drops and expansion of our ecosystem.',
    head2: 'Dilution',
    text3:
      'The exploration of our expansion for EVA Labs sets soon to create a solid user experience between the storyline and the brand.',
    head3: 'Games',
    text4:
      'Explore Open-World Metaverses MMORPG for 3D characters and views to provide the real-life experience for Planet E1.',
  },
  CONNECT: {
    title: 'CONNECT',
    text1:
      'Criticism is one of Ino’s main priorities which we wish to explore and improve. Vent out your emotions and ideas – Let’s build a journey for Ino a beautiful one.',
    head1: '',
    text2: '',
    head2: '',
    text3: '',
    head3: '',
    text4: '',
  },
};

export default function TeamModal({ onClose, type }) {
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
        h={type === 'BRAND' ? '650px' : '550px'}
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Box position="absolute" right="20px" top="20px" as="button" onClick={onClose}>
          <AiOutlineClose size="25" />
        </Box>
        <Flex flexDirection="column" px="30px" justifyContent="center" textAlign="left">
          <Heading color="primary" fontSize="6xl" mb="20px">
            {data[type].title}
          </Heading>
          {!!data[type]?.text1 && (
            <Text color="primary" mb="30px">
              {data[type].text1}
            </Text>
          )}
          <Box mb="30px">
            <Text color="primary" fontWeight="bold">
              {data[type].head1}
            </Text>
            <Text color="primary">{data[type].text2}</Text>
          </Box>
          <Box mb="30px">
            <Text color="primary" fontWeight="bold">
              {data[type].head2}
            </Text>
            <Text color="primary">{data[type].text3}</Text>
          </Box>
          {!!data[type]?.head3 && (
            <Box mb="30px">
              <Text color="primary" fontWeight="bold">
                {data[type].head3}
              </Text>
              <Text color="primary">{data[type].text4}</Text>
            </Box>
          )}
          {!!data[type]?.head4 && (
            <Box mb="30px">
              <Text color="primary" fontWeight="bold">
                {data[type].head4}
              </Text>
              <Text color="primary">{data[type].text5}</Text>
            </Box>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
