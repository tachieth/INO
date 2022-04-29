import { Box, Text, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Roadmap() {
  const arrowStyle = {
    borderRightColor: 'transparent',
  };
  const contentStyle = {
    background: 'transparent',
    boxShadow: 'none',
  };
  const iconStyle = {
    background: '#265E88',
    width: 30,
    height: 30,
    marginLeft: -14,
    boxShadow: 'none',
    top: 15,
  };
  return (
    <>
      <Box display={{ base: 'none', md: 'block' }} maxW="1024px" mx="auto" py="30px" id="roadmap">
        <Heading color="darkGreen" fontSize="6xl" fontWeight="bold" my="50px" textAlign="center">
          Roadmap
        </Heading>
        <VerticalTimeline className="timeline">
          <VerticalTimelineElement
            className="timeline-box left"
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            iconStyle={iconStyle}
          >
            <Heading textAlign="right" className="roadmap-heading" color="darkGreen">
              Step 1
            </Heading>

            <Text textAlign="right" color="text">
              {' '}
              NFT Development -
            </Text>
            <Text textAlign="right" color="text">
              {' '}
              Social Media Launch -
            </Text>
            <Text textAlign="right" color="text">
              {' '}
              Website Development -
            </Text>
            <Text textAlign="right" color="text">
              {' '}
              Whitepaper Release -
            </Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-box left"
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            iconStyle={iconStyle}
          >
            <Heading className="roadmap-heading" color="white">
              Step 2
            </Heading>

            <Text color="text">- Influencer Promotions</Text>
            <Text color="text">- Giveaways & Whitelist</Text>
            <Text color="text">- NFT Minting</Text>
            <Text color="text">- Token Release ($TERR)</Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-box left"
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            iconStyle={iconStyle}
          >
            <Heading textAlign="right" className="roadmap-heading">
              Step 3
            </Heading>

            <Text color="text" textAlign="right">
              Staking Begins -
            </Text>
            <Text color="text" textAlign="right">
              Game Development -
            </Text>
            <Text color="text" textAlign="right">
              Beta Testing -
            </Text>
            <Text color="text" textAlign="right">
              Character Breeding -
            </Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-box left"
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            iconStyle={iconStyle}
          >
            <Heading className="roadmap-heading">Step 4</Heading>

            <Text color="text">- Public Game Release</Text>
            <Text color="text">- Own Market Place</Text>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Box>

      <Box display={{ base: 'block', md: 'none' }} maxW="1024px" mx="auto" py="30px" id="roadmap">
        <Heading color="white" fontSize="6xl" fontWeight="bold" my="50px" textAlign="center">
          Roadmap
        </Heading>
        <VerticalTimeline className="timeline">
          <VerticalTimelineElement
            className="timeline-box left"
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            iconStyle={iconStyle}
          >
            <Heading  className="roadmap-heading" color="white">
              Step 1
            </Heading>

            <Text  color="white">
              {' '}
              - NFT Development
            </Text>
            <Text  color="white">
              {' '}
              - Social Media Launch
            </Text>
            <Text  color="white">
              {' '}
              - Website Development
            </Text>
            <Text  color="white">
              {' '}
              - Whitepaper Release
            </Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-box left"
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            iconStyle={iconStyle}
          >
            <Heading className="roadmap-heading" color="white">
              Step 2
            </Heading>

            <Text color="white">- Influencer Promotions</Text>
            <Text color="white">- Giveaways & Whitelist</Text>
            <Text color="white">- NFT Minting</Text>
            <Text color="white">- Token Release ($TERR)</Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-box left"
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            iconStyle={iconStyle}
          >
            <Heading  className="roadmap-heading">
              Step 3
            </Heading>

            <Text color="white" >
             - Staking Begins 
            </Text>
            <Text color="white" >
             - Game Development 
            </Text>
            <Text color="white" >
             - Beta Testing 
            </Text>
            <Text color="white" >
            -  Character Breeding 
            </Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-box left"
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            iconStyle={iconStyle}
          >
            <Heading className="roadmap-heading">Step 4</Heading>

            <Text color="white">- Public Game Release</Text>
            <Text color="white">- Own Market Place</Text>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Box>
    </>
  );
}
