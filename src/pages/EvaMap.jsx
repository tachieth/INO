
import React from 'react';
import { Flex, Box, Heading, Text, Image, Grid, GridItem } from '@chakra-ui/react';

import { TeamModal, BoxModal } from '../components';

export default function EvaMap() {
  const [teamModal, setTeamModal] = React.useState(false)
  const [teamModalType, setTeamModalType] = React.useState('')
  const [boxModal, setBoxModal] = React.useState(false)
  const [boxModalType, setBoxModalType] = React.useState('')
  return (
    <>
      <Box maxW="1200px" mx="auto" w="100%" pb="50px">
        <Heading color="primary" fontSize="8xl">
          EVA MAP
        </Heading>
        <Box w="100%" h="3px" bg="primary" opacity="0.8" mt="20px" mb="40px"></Box>
        <Image src="/images/tree.png" />
        <Box w="100%" mt="150px">
          <Flex
            w="100%"
            h="150px"
            justifyContent="center"
            alignItems="center"
            className="detail-box"
            borderRadius="10px"
            mb="20px"
            onClick={() => {
              setBoxModalType('CORE VALUES');
              setBoxModal(true);
            }}
          >
            <Text fontSize="4xl" color="white">
              CORE VALUES
            </Text>
          </Flex>
          <Flex
            w="100%"
            h="150px"
            justifyContent="center"
            alignItems="center"
            className="detail-box"
            borderRadius="10px"
            mb="20px"
            onClick={() => {
              setBoxModalType('BRAND');
              setBoxModal(true);
            }}
          >
            <Text fontSize="4xl" color="white">
              BRAND
            </Text>
          </Flex>
          <Flex
            w="100%"
            h="150px"
            justifyContent="center"
            alignItems="center"
            className="detail-box"
            borderRadius="10px"
            mb="20px"
            onClick={() => {
              setBoxModalType('PHYSICAL WORLD');
              setBoxModal(true);
            }}
          >
            <Text fontSize="4xl" color="white">
              PHYSICAL WORLD
            </Text>
          </Flex>
          <Flex
            w="100%"
            h="150px"
            justifyContent="center"
            alignItems="center"
            className="detail-box"
            borderRadius="10px"
            mb="20px"
            onClick={() => {
              setBoxModalType('PHYSICAL WORLD');
              setBoxModal(true);
            }}
          >
            <Text fontSize="4xl" color="white">
              BRIDGE
            </Text>
          </Flex>
          <Flex
            w="100%"
            h="150px"
            justifyContent="center"
            alignItems="center"
            className="detail-box"
            borderRadius="10px"
            mb="20px"
            onClick={() => {
              setBoxModalType('ROOTS');
              setBoxModal(true);
            }}
          >
            <Text fontSize="4xl" color="white">
              ROOTS
            </Text>
          </Flex>
          <Flex
            w="100%"
            h="150px"
            justifyContent="center"
            alignItems="center"
            className="detail-box"
            borderRadius="10px"
            mb="20px"
            onClick={() => {
              setBoxModalType('CONNECT');
              setBoxModal(true);
            }}
          >
            <Text fontSize="4xl" color="white">
              CONNECT
            </Text>
          </Flex>
        </Box>
        <Box mt="80px">
          <Heading color="primary" fontSize="8xl">
            TEAM
          </Heading>
          <Box w="100%" h="3px" bg="primary" opacity="0.8" mt="20px" mb="40px"></Box>
          <Box py="50px" maxW="500px" mx="auto">
            <Grid templateRows="repeat(3, 120px)" templateColumns="repeat(3, 150px)" gap={8}>
              <GridItem
                rowSpan={2}
                colSpan={1}
                className="detail-box"
                borderRadius="10px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                onClick={() => {
                  setTeamModalType('PR');
                  setTeamModal(true);
                }}
              >
                <Text color="white" fontSize="4xl">
                  PR
                </Text>
              </GridItem>
              <GridItem
                rowSpan={1}
                colSpan={2}
                className="detail-box"
                borderRadius="10px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                onClick={() => {
                  setTeamModalType('MARKETING');
                  setTeamModal(true);
                }}
              >
                <Text color="white" fontSize="4xl">
                  MARKETING
                </Text>
              </GridItem>
              <GridItem
                rowSpan={1}
                colSpan={1}
                className="detail-box"
                borderRadius="10px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                onClick={() => {
                  setTeamModalType('ART');
                  setTeamModal(true);
                }}
              >
                <Text color="white" fontSize="4xl">
                  ART
                </Text>
              </GridItem>
              <GridItem
                rowSpan={2}
                colSpan={1}
                className="detail-box"
                borderRadius="10px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                onClick={() => {
                  setTeamModalType('DEV');
                  setTeamModal(true);
                }}
              >
                <Text color="white" fontSize="4xl">
                  DEV
                </Text>
              </GridItem>
              <GridItem
                rowSpan={1}
                colSpan={2}
                className="detail-box"
                borderRadius="10px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                onClick={() => {
                  setTeamModalType('COMMUNITY');
                  setTeamModal(true);
                }}
              >
                <Text color="white" fontSize="4xl">
                  COMMUNITY
                </Text>
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </Box>
      {teamModal && (
        <TeamModal
          type={teamModalType}
          onClose={() => {
            setTeamModalType('');
            setTeamModal(false);
          }}
        />
      )}
      {boxModal && (
        <BoxModal
          type={boxModalType}
          onClose={() => {
            setBoxModalType('');
            setBoxModal(false);
          }}
        />
      )}
    </>
  );
}
