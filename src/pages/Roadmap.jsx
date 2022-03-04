import { Box, Text, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Roadmap() {
  const arrowStyle = {
    borderRightColor: '#2B6CB0',
  };
  const contentStyle = {
    background: '#2B6CB0',
    boxShadow: 'none',
  };
  const iconStyle = {
    background: '#2B6CB0',
    width: 30,
    height: 30,
    marginLeft: -14,
    boxShadow: 'none',
    top: 15,
  };
  return (
    <Box maxW="1024px" mx="auto" py="30px" id="roadmap">
      <Heading
        color="white"
        fontSize="6xl"
        fontWeight="bold"
        my="50px"
        textAlign="center"
      >
        Roadmap
      </Heading>
      <VerticalTimeline className="timeline">
        <VerticalTimelineElement
          className="timeline-box left"
          contentArrowStyle={arrowStyle}
          contentStyle={contentStyle}
          iconStyle={iconStyle}
        >
          <Heading className="roadmap-heading" color="white">
            Level 1
          </Heading>
          <UnorderedList>
            <ListItem color="white">
              t is a long established fact that a reader will be distracted by
            </ListItem>
            <ListItem color="white">
              Content here, content here', making it look like readable English
            </ListItem>
            <ListItem color="white">
              the readable content of a page when looking at its layout.
            </ListItem>
          </UnorderedList>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-box left"
          contentArrowStyle={arrowStyle}
          contentStyle={contentStyle}
          iconStyle={iconStyle}
        >
          <Heading className="roadmap-heading" color="white">
            Level 2
          </Heading>
          <UnorderedList color="white">
            <ListItem>
              There are many variations of passages of Lorem Ipsum available,
            </ListItem>
            <ListItem>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet.
            </ListItem>
          </UnorderedList>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-box left"
          contentArrowStyle={arrowStyle}
          contentStyle={contentStyle}
          iconStyle={iconStyle}
        >
          <Heading className="roadmap-heading">Level 3</Heading>
          <UnorderedList color="white">
            <ListItem>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </ListItem>
            <ListItem>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form,
            </ListItem>
            <ListItem>It has roots in a piece of classical Latin</ListItem>
          </UnorderedList>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-box left"
          contentArrowStyle={arrowStyle}
          contentStyle={contentStyle}
          iconStyle={iconStyle}
        >
          <Heading className="roadmap-heading">Level 4</Heading>
          <UnorderedList color="white">
            <ListItem>
              "But I must explain to you how all this mistaken idea of
              denouncing
            </ListItem>
            <ListItem>
              I will give you a complete account of the system, and expound the
              actual teachings of the great explorer of the truth, the
              master-builder
            </ListItem>
          </UnorderedList>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-box left"
          contentArrowStyle={arrowStyle}
          contentStyle={contentStyle}
          iconStyle={iconStyle}
        >
          <Heading className="roadmap-heading">Level 5</Heading>
          <UnorderedList color="white">
            <ListItem>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias
            </ListItem>
            <ListItem>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms
            </ListItem>
          </UnorderedList>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  );
}
