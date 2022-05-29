import React from 'react';
import { Flex, Box, Heading, Text, Image } from '@chakra-ui/react'

export default function Mainifesto() {
  let videoRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);

  const handleClick = () => {
    if (videoRef) {
      if (playing) {
        setPlaying(false);
        videoRef?.current?.pause();
      } else {
        setPlaying(true);
        videoRef?.current?.play();
      }
    }
  };
  return (
    <Box maxW="1200px" mx="auto" pb="80px">
      <Heading color="primary" fontSize="76px">
        WELCOME TO THE PROJECT INO
      </Heading>
      <Box w="100%" h="3px" bg="primary" opacity="0.8" mt="20px" mb="40px"></Box>
      <Box mt="40px">
        <Heading color="primary" fontSize="50px" mb="20px">
          Planet E1
        </Heading>
        <Text fontSize="40px" color="primary" mb="20px">
          Enter our Manifesto
        </Text>
        <Text fontSize="40px" color="primary" mb="40px">
          Awaken, Travelling one. Welcome to Planet E1, Ino.
        </Text>
        <Box position="relative" className="mainifesto-video" mb="50px">
          <video ref={videoRef} onClick={handleClick} loop>
            <source src="/homepage_video.mp4" type="video/mp4" />
          </video>
          {!playing && (
            <Image
              onClick={handleClick}
              cursor="pointer"
              position="absolute"
              src="images/videoplayer_icon.png"
            />
          )}
        </Box>

        <Box my="50px">
          <Text color="primary" fontSize="24px" lineHeight="1.2" mb="20px">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi dolorum veritatis
            amet dolores tempora illo hic tempore libero, repellendus quam adipisci cum illum
            repellat, consequatur corrupti? Quasi modi sequi adipisci?Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Eligendi dolorum veritatis amet dolores tempora illo hic
            tempore libero, repellendus quam adipisci cum illum repellat, consequatur corrupti?
            Quasi modi sequi adipisci?
          </Text>
          <Text color="primary" fontSize="24px" lineHeight="1.2" mb="20px">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi dolorum veritatis
            amet dolores tempora illo hic tempore libero, repellendus quam adipisci cum illum
            repellat, consequatur corrupti? Quasi modi sequi adipisci?Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Eligendi dolorum veritatis amet dolores tempora illo hic
            tempore libero, repellendus quam adipisci cum illum repellat, consequatur corrupti?
            Quasi modi sequi adipisci?
          </Text>
          <Text color="primary" fontSize="24px" lineHeight="1.2" my="20px" fontWeight="bold">
            Life of Ino & Vision
          </Text>
          <Flex justifyContent="space-around" alignItems="center" mt="80px">
            <Image src="/images/forest.png" maxW="400px" />
            <Image src="/images/city.png" maxW="400px" />
          </Flex>
        </Box>
        <Box my="80px">
          <Text color="primary" fontSize="24px" lineHeight="1.2" mb="20px">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi dolorum veritatis
            amet dolores tempora illo hic tempore libero, repellendus quam adipisci cum illum
            repellat, consequatur corrupti? Quasi modi sequi adipisci?Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Eligendi dolorum veritatis amet dolores tempora illo hic
            tempore libero, repellendus quam adipisci cum illum repellat, consequatur corrupti?
            Quasi modi sequi adipisci?
          </Text>
          <Text color="primary" fontSize="24px" lineHeight="1.2" mb="20px">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi dolorum veritatis
            amet dolores tempora illo hic tempore libero, repellendus quam adipisci cum illum
            repellat, consequatur corrupti? Quasi modi sequi adipisci?Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Eligendi dolorum veritatis amet dolores tempora illo hic
            tempore libero, repellendus quam adipisci cum illum repellat, consequatur corrupti?
            Quasi modi sequi adipisci?
          </Text>
          <Text color="primary" fontSize="24px" lineHeight="1.2" mb="20px">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi dolorum veritatis
            amet dolores tempora illo hic tempore libero, repellendus quam adipisci cum illum
            repellat, consequatur corrupti? Quasi modi sequi adipisci?Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Eligendi dolorum veritatis amet dolores tempora illo hic
            tempore libero, repellendus quam adipisci cum illum repellat, consequatur corrupti?
            Quasi modi sequi adipisci?
          </Text>
          <Flex justifyContent="space-around" alignItems="center" mt="80px">
            <Image src="/images/beach.png" maxW="400px" />
            <Image src="/images/swamp.png" maxW="400px" />
          </Flex>
        </Box>
        <Text color="primary" fontSize="24px" lineHeight="1.2" mb="20px" fontWeight="bold">
          We stand for E1. We stand for peace. We stand for Ino.
        </Text>
        <Text color="primary" fontSize="24px" lineHeight="1.2" mb="20px">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi dolorum veritatis amet
          dolores tempora illo hic tempore libero, repellendus quam adipisci cum illum repellat,
          consequatur corrupti? Quasi modi sequi adipisci?Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Eligendi dolorum veritatis amet dolores tempora illo hic tempore libero,
          repellendus quam adipisci cum illum repellat, consequatur corrupti? Quasi modi sequi
          adipisci?
        </Text>
        <Text color="primary" fontSize="24px" lineHeight="1.2" mb="20px">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi dolorum veritatis amet
          dolores tempora illo hic tempore libero, repellendus quam adipisci cum illum repellat,
          consequatur corrupti? Quasi modi sequi adipisci?Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Eligendi dolorum veritatis amet dolores tempora illo hic tempore libero,
          repellendus quam adipisci cum illum repellat, consequatur corrupti? Quasi modi sequi
          adipisci?
        </Text>
        <Text color="primary" fontSize="24px" lineHeight="1.2" mb="20px">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi dolorum veritatis amet
          dolores tempora illo hic tempore libero, repellendus quam adipisci cum illum repellat,
          consequatur corrupti? Quasi modi sequi adipisci?Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Eligendi dolorum veritatis amet dolores tempora illo hic tempore libero,
          repellendus quam adipisci cum illum repellat, consequatur corrupti? Quasi modi sequi
          adipisci?
        </Text>
        <Box borderColor="primary" borderWidth="4px" maxW="1000px" mx="auto" my="50px">
          <Image src="/images/lab.png" />
        </Box>
        <Text color="primary" fontSize="24px" lineHeight="1.2" mb="20px">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi dolorum veritatis amet
          dolores tempora illo hic tempore libero, repellendus quam adipisci cum illum repellat,
          consequatur corrupti? Quasi modi sequi adipisci?Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Eligendi dolorum veritatis amet dolores tempora illo hic tempore libero,
          repellendus quam adipisci cum illum repellat, consequatur corrupti? Quasi modi sequi
          adipisci?
        </Text>
        <Text color="primary" fontSize="24px" lineHeight="1.2" mb="20px">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi dolorum veritatis amet
          dolores tempora illo hic tempore libero, repellendus quam adipisci cum illum repellat,
          consequatur corrupti? Quasi modi sequi adipisci?Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Eligendi dolorum veritatis amet dolores tempora illo hic tempore libero,
          repellendus quam adipisci cum illum repellat, consequatur corrupti? Quasi modi sequi
          adipisci?
        </Text>
      </Box>
    </Box>
  );
}
