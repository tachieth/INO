import React from 'react';
import { Flex, Box, Heading, Text, Image, Link } from '@chakra-ui/react'
import { AiFillTwitterCircle, AiFillInstagram, AiFillMediumCircle } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';

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
    <Box maxW="1200px" mx="auto" pb="80px" px={{ base: '20px', md: '0' }}>
      <Heading color="primary" fontSize={{ base: '35px', md: '76px' }}>
        WELCOME TO THE PROJECT INO
      </Heading>
      <Box w="100%" h="3px" bg="primary" opacity="0.8" mt="20px" mb="40px"></Box>
      <Box mt="40px">
        <Heading color="primary" fontSize={{ base: '30px', md: '50px' }} mb="20px">
          Planet E1
        </Heading>
        <Text fontSize={{ base: '24px', md: '40px' }} color="primary" mb="20px">
          Enter our Manifesto
        </Text>
        <Text fontSize={{ base: '24px', md: '40px' }} color="primary" mb="40px">
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
          <Text color="primary" fontSize={{ base: '18px', md: '24px' }} lineHeight="1.2" mb="20px">
            Project INO is a story-driven and perks-inclusive collection starring an open-world
            narrative around Planet E1 where wonders and unexpected realities occur. Our goal stands
            to represent web3 travellers to venture beyond Planet E1 in the form of Ino. You live
            the life of an Ino, undertake new experiences and aid out in changing our planet. You're
            co-existing amongst other Ino and you have every right and capability to make a change.
            Your enemy is the droids.
          </Text>
          <Text color="primary" fontSize={{ base: '18px', md: '24px' }} lineHeight="1.2" mb="20px">
            Ino is a collection of 7,777 non-fungible tokens (NFTs) that is hosted on the Ethereum
            Blockchain. In the process of building the project, we take into account the narrative
            and main goal of Ino living on Planet E1. EVA Labs successfully creates imagery through
            unique and related traits to the storyline of our open-world narration including
            weapons, outfits, accessories and more to express Ino's path in E1. Each trait is
            carefully handcrafted and goes through the generation process to create the origin of
            Ino.
          </Text>
          <Text
            color="primary"
            fontSize={{ base: '18px', md: '24px' }}
            lineHeight="1.2"
            my="20px"
            fontWeight="bold"
          >
            Life of Ino & Vision
          </Text>
          <Flex justifyContent="space-around" alignItems="center" mt="80px">
            <Image src="/images/forest.png" maxW={{ base: '150px', md: '400px' }} />
            <Image src="/images/city.png" maxW={{ base: '150px', md: '400px' }} />
          </Flex>
        </Box>
        <Box my="80px">
          <Text color="primary" fontSize={{ base: '18px', md: '24px' }} lineHeight="1.2" mb="20px">
            Everything starts with a root. We’re born. We’re connecting. We’re inventing. We’re in a
            never-ending cycle of an imaginary world limitless in creativity. You’re now born as Ino
            on our world, Planet E1. Your main task is to connect and build a strong indestructible
            community together for the survival of E1. It’s more than just a project, it’s what
            brings us together as one. We build and grow together in our world; scavenging around in
            hopes of survival. Artefacts and tools will be dropped and provided to assist you
            throughout your journey to our Planet.
          </Text>
          <Text color="primary" fontSize={{ base: '18px', md: '24px' }} lineHeight="1.2" mb="20px">
            We’re all from different nations or biomes. However, our faction and connection between
            one Ino to another is what brings us together as one. Factions according to their
            personality divide Ino and give Ino each of their unique identities. You can be
            courageous, afraid or the ones who are not fond of rules; rebels or deviants. You are
            who you truly are. You are Ino.
          </Text>
          <Text color="primary" fontSize={{ base: '18px', md: '24px' }} lineHeight="1.2" mb="20px">
            Planet E1 is found with endless possibilities from biomes, factions, resources,
            abilities and unexpected visuals that have yet to be discovered from tainted oceans,
            abandoned cities, deserts and swamps. Planet E1 is an abandoned world with multiple
            series of different species from humans, animals and droids that are all in competition
            with one another. The truth is, we’re living in a society where only the fittest can
            continue fending for themselves to survive. However, what stands in front of the weak
            and meek are the strong Inos. We’re a family. We’re one together. We may all have
            differences but despite the diversity, we are one.
          </Text>
          <Flex justifyContent="space-around" alignItems="center" mt="80px">
            <Image src="/images/beach.png" maxW={{ base: '150px', md: '400px' }} />
            <Image src="/images/swamp.png" maxW={{ base: '150px', md: '400px' }} />
          </Flex>
        </Box>
        <Text
          color="primary"
          fontSize={{ base: '18px', md: '24px' }}
          lineHeight="1.2"
          mb="20px"
          fontWeight="bold"
        >
          We stand for E1. We stand for peace. We stand for Ino.
        </Text>
        <Text color="primary" fontSize={{ base: '18px', md: '24px' }} lineHeight="1.2" mb="20px">
          The world is yours. As an Ino, we are no longer unhanding our rights as caretakers of our
          own Planet E1. We will stand firm on what we believe, on what’s meant for us and unmask
          the rigged system of felony and misdemeanour the droids have escalated in E1. We will show
          our wits and capabilities of fighting for what we love and cherish. We will fight despite
          the struggle and fear of uncertainty. We will stand as one for our planet and for our the
          following generation to come.
        </Text>
        <Text color="primary" fontSize={{ base: '18px', md: '24px' }} lineHeight="1.2" mb="20px">
          In times of darkness and despair, the only shed of light and hope for the Inos were the
          faint sound of chirping and the flock of doves that run and fly freely on the skies of E1.
          The thought of such magnificent angelic creatures that continuously reminds us of the
          light at the end of the tunnel awakened the Inos. There is still hope for humanity. There
          can still be peace. There is time.
        </Text>
        <Text color="primary" fontSize={{ base: '18px', md: '24px' }} lineHeight="1.2" mb="20px">
          As pioneers of the era where droids built a monopoly of dishonourable and immoral
          implementation on Planet E1, we will form an unbeatable alliance of venerable Inos. Our
          resistance army will be filled with diverse Inos from different factions and will hold
          tight grip on what we envision E1 to be for the future of all travellers. The world is
          ours, Inos. And it will never be anybody else's, not especially the droids.We stand for
          peace. We stand for Ino.
        </Text>
        <Box borderColor="primary" borderWidth="4px" maxW="1000px" mx="auto" my="50px">
          <Image src="/images/lab.png" />
        </Box>
        <Text color="primary" fontSize={{ base: '18px', md: '24px' }} lineHeight="1.2" mb="20px">
          EVA Labs, based in Singapore – Southeast Asian team scattered across the globe. With a
          solid team behind the project of more than 20+ members handling different departments, EVA
          Labs trusts the process and the vision behind the project. Many of our members come from
          diverse backgrounds from IP building, streetwear, tech, artist to animation. We'll never
          stop growing from here onwards.
        </Text>
        <Text color="primary" fontSize={{ base: '18px', md: '24px' }} lineHeight="1.2" mb="20px">
          We're creating an immersive visualisation brand through the form of an open world and an
          ongoing narrative in the form of Web3. We aim to allow audiences from both webs (Web2 &
          Web3) to participate, enjoy the ongoing narrative EVA Labs brings to our ecosystem and
          most importantly, the exciting utilities our audience will receive.
        </Text>
        <Text
          color="primary"
          fontSize={{ base: '18px', md: '24px' }}
          lineHeight="1.2"
          mb="20px"
          mt="50px"
          fontWeight="bold"
        >
          IP (Intellectual Property) Agreements
        </Text>
        <Text color="primary" fontSize={{ base: '18px', md: '24px' }} lineHeight="1.2" mb="20px">
          Project INO will be placed under the CC0 terms providing IP rights to consumers of the NFT
          Project, “Project INO” giving freedom to use your NFT in the terms of CC0. You may use Ino
          as your digital representative of yourself (Profile picture), sell your Ino and monetise
          your Ino in forms of collectibles and merchandise.
        </Text>
        <Text color="primary" fontSize={{ base: '18px', md: '24px' }} lineHeight="1.2" mb="20px">
          To explore and know more about Project INO, enter our Planet through our official social
          media links below:
        </Text>
        <Flex mb="20px">
          <Link href="https://twitter.com/theProjectINO" color="primary" isExternal mr="20px">
            <AiFillTwitterCircle size="45" />
          </Link>
          <Link href="https://discord.gg/evalabs/" color="primary" isExternal mr="20px">
            <SiDiscord size="45" />
          </Link>
          <Link
            href="https://instagram.com/theprojectino?igshid=YmMyMTA2M2Y="
            color="primary"
            isExternal
            mr="20px"
          >
            <AiFillInstagram size="45" />
          </Link>
          <Link href="https://evalabs.com/" color="primary" isExternal mr="20px">
            <CgWebsite size="45" />
          </Link>
          <Link href="https://medium.com/@evalabs" color="primary" isExternal>
            <AiFillMediumCircle size="45" />
          </Link>
        </Flex>
        <Text color="primary" fontSize={{ base: '18px', md: '24px' }} lineHeight="1.2" mb="20px">
          See you on Planet E1, Travelling Ino.
        </Text>
      </Box>
    </Box>
  );
}
