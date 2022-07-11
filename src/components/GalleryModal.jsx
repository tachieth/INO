import { Box, Flex, Heading, Text, Image, Link } from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';

export default function GalleryModal({ onClose, activeImg }) {
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
        maxW={{ base: '100%', md: '600px', lg: '800px' }}
        w="100%"
        h={{ base: '600px', md: '550px' }}
        justifyContent="center"
        alignItems="center"
        position="relative"
        overflow="hidden"
        p={{ base: '10px', md: 0 }}
        zIndex="999"
      >
        <Box position="absolute" right="20px" top="20px" as="button" onClick={onClose}>
          <AiOutlineClose size="25" />
        </Box>
        <Image src={`/images/e1_img_${activeImg}.png`} maxW={{ base: '100%', md: '500px' }} />
      </Flex>
    </Flex>
  );
}
