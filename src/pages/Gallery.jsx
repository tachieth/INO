import { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Heading,
  Text,
  Image,
  Input,
  Grid,
  GridItem,
  Switch,
} from '@chakra-ui/react';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import ReactPaginate from 'react-paginate';

import { rarityStore } from '../helpers/rarity';
import { DetailsModal } from '../components';

const PAGE_LIMIT = 20;

export default function Gallery({ traits, count, meta }) {
  const [tokens, setTokens] = useState([]);
  const [token, setToken] = useState(null);
  const [searchToken, setsearchToken] = useState(null);
  const [tokenId, setTokenId] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [filter, setFilter] = useState({
    page: 1,
    traitCount: [],
    traits: [],
    sortBy: sortBy || 'id',
  });

  useEffect(() => {
    const sort = sortBy || 'id';
    if (filter.sortBy !== sort) {
      setFilter({
        ...filter,
        page: 1,
        sortBy: sort,
      });
    }
  }, [sortBy]);

  useEffect(() => {
    getPages();
  }, [filter]);

  const handleSort = () => {
    if (sortBy === null) {
      setSortBy('rank');
    } else {
      setSortBy(null);
    }
  }

  const getPages = () => {
    const updatedTokens = rarityStore.getPage({
      limit: PAGE_LIMIT,
      offset: (filter.page - 1) * PAGE_LIMIT,
      sortBy: filter.sortBy,
      traits: filter.traits,
      traitCount: filter.traitCount,
    });
    console.log('updatedTokens', updatedTokens);
    setTokens(updatedTokens);
  };

  const openToken = () => {
    const updatedTokens = rarityStore.getById(searchToken);
    console.log({ data: [updatedTokens], total: 1 });
    setTokens({ data: [updatedTokens], total: 1 });
  };
  
  const handleOnInputChange = (e) => {
    const { value } = e.target;
    if (!!value) {
      if (Number(value) > 0 && Number(value) <= 7999) {
        setsearchToken(value);
      }
    } else {
      setsearchToken('');
    }
  };

  const handlePageClick = (e) => {
    setFilter((prevState) => ({
      ...prevState,
      page: e.selected + 1
    }))
    
  };

  const formatImage = (image) => {
    const imageStr = image.split('ipfs://')[1];
    return `https://gateway.pinata.cloud/ipfs/${imageStr}`;
  }

  return (
    <Flex
      minH={{ base: '100vh', md: '100vh' }}
      position="relative"
      w="100%"
      py="20px"
      flexDirection="column"
      pb="80px"
    >
      <Flex
        h={{ base: '100%', md: '100%' }}
        maxW="1200px"
        mx="auto"
        w="100%"
        flexDirection="column"
        px={{ base: '20px', md: '0' }}
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          borderBottomWidth="2px"
          borderColor="primary"
        >
          <Heading
            mb="20px"
            fontWeight="bold"
            fontSize={{ base: '35px', md: '76px' }}
            color="primary"
          >
            GALLERY
          </Heading>

          <Heading
            mb={{ base: '10px', md: '0' }}
            fontSize={{ base: '25px', md: '46px' }}
            color="primary"
          >
            7,999 INOS
          </Heading>
        </Flex>

        <Flex w="100%" alignItems="center" justifyContent="flex-end" mt="50px">
          <Text color="primary" fontWeight="bold" mr="10px">
            Sort By Rank:
          </Text>
          <Switch id="sort-switch" size="lg" onChange={handleSort} />
        </Flex>

        <Flex
          py="10px"
          pt="40px"
          alignItems={{ base: 'center', md: 'flex-start' }}
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'center', md: 'space-between' }}
          w="100%"
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            mr={{ base: 0, md: '30px' }}
          >
            <Flex alignItems="center" justifyContent="space-between" w="250px">
              <Input
                type="number"
                placeholder="Search your for your Ino..."
                mb="10px"
                color="primary"
                borderWidth="0"
                className="gallery-filter-input"
                value={searchToken}
                onKeyUp={(e) => {
                  if (e.key === 'Enter' && searchToken) openToken();
                }}
                onChange={handleOnInputChange}
              />
              {searchToken && (
                <Box
                  as="button"
                  onClick={() => {
                    getPages();
                    setsearchToken('');
                  }}
                >
                  <AiOutlineClose color="#096069" />
                </Box>
              )}
            </Flex>
            <Box w="100%">
              <Accordion allowMultiple allowToggle className="gallery-filter">
                {Object.keys(traits).map((trait) => (
                  <AccordionItem
                    key={trait}
                    borderTopColor="primary"
                    borderTopWidth="2px"
                    py="5px"
                    w="100%"
                  >
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <Flex alignItems="center" flex="1" textAlign="left">
                              <Heading fontSize="16px" fontWeight="bold" color="primary">
                                {trait}
                              </Heading>
                            </Flex>
                            {isExpanded ? (
                              <AiOutlineMinus size="20" color="#096069" />
                            ) : (
                              <AiOutlinePlus size="20" color="#096069" />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel>
                          {Object.keys(traits[trait]).map((traitType) => (
                            <Flex
                              alignItems="center"
                              mb="10px"
                              as="button"
                              onClick={() => {
                                setFilter({
                                  ...filter,
                                  page: 1,
                                  traits: filter.traits.includes(traitType)
                                    ? filter.traits.filter((trait) => trait !== traitType)
                                    : [...filter.traits, traitType],
                                });
                              }}
                            >
                              {filter.traits.includes(traitType) ? (
                                <ImCheckboxChecked size="20px" color="#096069" />
                              ) : (
                                <ImCheckboxUnchecked size="20px" color="#096069" />
                              )}
                              <Text
                                fontSize="16px"
                                color="primary"
                                ml="10px"
                              >{`${traitType} (${traits[trait][traitType].count})`}</Text>
                            </Flex>
                          ))}
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
          </Flex>

          <Flex flexDirection="column" w="100%" mt={{ base: '50px', md: '20px' }}>
            <Grid
              templateColumns={{
                base: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)',
              }}
              templateRows="repeat(5, 1fr)"
              gap={2}
            >
              {tokens.data &&
                tokens.data.map((nft) => (
                  <GridItem key={nft.image}>
                    <Flex
                      maxW="200px"
                      mx="auto"
                      flexDirection="column"
                      alignItems="center"
                      pb="20px"
                      as="button"
                      onClick={() => {
                        setTokenId(nft.edition);
                        setToken(nft);
                      }}
                    >
                      <Box
                        w="150px"
                        h="150px"
                        borderRadius="15px"
                        overflow="hidden"
                        bg="rgba(9, 96, 105, 0.2)"
                        mb="10px"
                      >
                        <Image
                          mb="10px"
                          borderRadius="20px"
                          src={formatImage(nft.image)}
                          w="100%"
                          objectFit="cover"
                        />
                      </Box>
                      <Text color="primary" fontWeight="bold" textAlign="center">
                        INO
                      </Text>
                      <Text color="primary" fontWeight="bold" textAlign="center">
                        {`#${nft.edition}`}
                      </Text>
                    </Flex>
                  </GridItem>
                ))}
            </Grid>
            {tokens.total && tokens.total >= 20 && (
              <Box className="pagination-container">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel="Next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={Math.round(tokens.total / PAGE_LIMIT)}
                  previousLabel="< Prev"
                  renderOnZeroPageCount={null}
                />
              </Box>
            )}
          </Flex>
        </Flex>
      </Flex>
      {tokenId && (
        <DetailsModal
          onClose={() => {
            setTokenId('');
            setToken(null);
          }}
          id={tokenId}
          data={token}
        />
      )}
    </Flex>
  );
}
