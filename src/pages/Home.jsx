import React, {useState} from 'react';
import { Flex, Image } from '@chakra-ui/react';

export default function Home() {
  let videoRef = React.useRef(null);
  const [playing, setPlaying] = useState(false)

  const handleClick = () => {
    if (videoRef) {
      if (playing) {
        setPlaying(false)
        videoRef?.current?.pause();
      } else {
        setPlaying(true);
        videoRef?.current?.play();
      }
    }
  }
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="center"
        minH={{ base: 'calc(100vh - 118px)', md: 'calc(100vh - 155px)' }}
        position="relative"
        w="100%"
        flexDirection="column"
      >
        <Flex
          h={{ base: 'calc(100vh - 118px)', md: '100%' }}
          maxW="1200px"
          mx="auto"
          w="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Image src="images/bg.png" w="100%" opacity="30%" />
          <video className="home-video" ref={videoRef} onClick={handleClick} loop>
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
        </Flex>
      </Flex>
    </>
  );
}
