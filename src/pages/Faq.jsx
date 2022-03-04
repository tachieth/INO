import {
  Box,
  Heading,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

const data = [
  {
    title: 'What is the total supply of Frontier Legends?',
    content: 'The total supply of Frontier Legends is 3,333.',
  },
  {
    title: 'How much will it cost?',
    content: 'Each Frontier Legend will cost 0.33 SOL to mint.',
  },
  {
    title: 'When?',
    content: 'We will launch January 1st!',
  },
  {
    title: 'Who is the team?',
    content:
      'The team is composed of a group of friends from around the globe who share a passion for cryptocurrency, defi, and NFTs!',
  },
  {
    title: 'Which Solana wallet can I use?',
    content: 'You will be able to use three of Solana’s main wallets Phantom, Sollet and Solflare.',
  },
  {
    title: 'Where will I be able to buy or sell my Legend after mint?',
    content:
      'You will be able to buy and sell them on the main Solana marketplaces, those details will be worked out after the mint.',
  },
];

const config = {
  animate: true,
};

export default function FAQ() {
  const styles = {
    bgColor: '#f5f5f1',
    rowTitleColor: '#181817',
    rowContentColor: '#181817',
    rowTitleTextSize: 'large',
  };
  return (
    <Flex
      minH="100vh"
      py="30"
      bg="bg"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      id="faq"
    >
      <Heading
        color="black"
        textTransform="uppercase"
        mb="20px"
        fontSize="6xl"
        fontWeight="bold"
        textAlign="center"
      >
        FAQs
      </Heading>
      <Box maxW="700px" px={{ base: '20px', md: 0 }}>
        <Accordion allowMultiple allowToggle>
          {data.map((faq) => (
            <AccordionItem key={faq.title}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {faq.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {faq.content}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Flex>
  );
}
