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
      zIndex="999"
      justifyContent="center"
      alignItems="center"
      onClick={onClose}
    >
      <Flex
        bg="white"
        maxW="800px"
        w="100%"
        h="550px"
        justifyContent="center"
        alignItems="center"
        position="relative"
        overflow="hidden"
      >
        <Box position="absolute" right="20px" top="20px" as="button" onClick={onClose}>
          <AiOutlineClose size="25" />
        </Box>
        <Image src={`/images/e1_img_${activeImg}.png`} maxW="500px" />
      </Flex>
    </Flex>
  );
}
