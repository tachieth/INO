import { Flex, Text, Heading, Image, Box } from '@chakra-ui/react';

export default function About() {
  return (
    <>
      {/* <Flex
        maxW="1200px"
        mx="auto"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        py="10px"
        mt="80px"
        id="about"
        px={{ base: '20px', md: 0 }}
      >
        <Flex
          mb="40px"
          maxW="1000px"
          mx="auto"
          w="100%"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-around"
        >
          <Flex
            mb={{ base: '20px', md: 0 }}
            alignItems="center"
            justifyContent="center"
            w="300px"
            h="90px"
            bg="blue"
          >
            {' '}
            <Heading fontWeight="bold" color="white">
              Transparency
            </Heading>
          </Flex>
          <Box color="white">
            <Text textAlign={{ base: 'justify', md: 'none' }} mx="auto" maxW="500px">
              We aim to be an authentic NFT community fueled by real people, for real people. No
              cold, robotic interfaces here- just easy and fun gameplay inspired by classic board
              games.
            </Text>
          </Box>
        </Flex>

        <Flex
          mb="40px"
          maxW="1000px"
          mx="auto"
          w="100%"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-around"
        >
          <Flex
            mb={{ base: '20px', md: 0 }}
            alignItems="center"
            justifyContent="center"
            w="300px"
            h="90px"
            bg="green"
          >
            {' '}
            <Heading fontWeight="bold" color="white">
              Empowerment
            </Heading>
          </Flex>
          <Box color="white">
            <Text textAlign={{ base: 'justify', md: 'none' }} mx="auto" maxW="500px">
              The Territorian family grows together and supports each other’s growth. This means not
              only financial empowerment, but personal and professional development.
            </Text>
          </Box>
        </Flex>

        <Flex
          mb="40px"
          maxW="1000px"
          mx="auto"
          w="100%"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-around"
        >
          <Flex
            mb={{ base: '20px', md: 0 }}
            alignItems="center"
            justifyContent="center"
            w="300px"
            h="90px"
            bg="purple"
          >
            {' '}
            <Heading fontWeight="bold" color="white">
              Integration
            </Heading>
          </Flex>
          <Box color="white">
            <Text textAlign={{ base: 'justify', md: 'none' }} mx="auto" maxW="500px">
              We work hard to seamlessly integrate blockchain assets ($TERR) onto our NFT
              mobile-first gaming platform. Our assets are designed to continually increase in value
              and can be measured and tracked on Rarity Sniper.
            </Text>
          </Box>
        </Flex>

        <Flex
          mb="40px"
          maxW="1000px"
          mx="auto"
          w="100%"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-around"
        >
          <Flex
            mb={{ base: '20px', md: 0 }}
            alignItems="center"
            justifyContent="center"
            w="300px"
            h="140px"
            bg="red"
          >
            {' '}
            <Heading fontWeight="bold" color="white">
              Community
            </Heading>
          </Flex>
          <Box color="white">
            <Text textAlign={{ base: 'justify', md: 'none' }} mx="auto" maxW="500px">
              Territorian is a place to join with fellow members to form alliances and work together
              to take more control of more land.
            </Text>
            <Text mb="20px" mx="auto" maxW="500px">
              Some methods to accomplish community:
            </Text>
            <Text mx="auto" maxW="500px">
              1. Join the Discord channel
            </Text>
            <Text mx="auto" maxW="500px">
              2. Form In-game alliances
            </Text>
          </Box>
        </Flex>
      </Flex> */}

      {/* <Flex
        mt="20px"
        maxW="900px"
        mx="auto"
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="space-around"
        w="100%"
        alignItems="center"
      >
        <Box>
          <Image mb={{ base: '20px', md: 0 }} w="300px" src="/images/terr.png" />
        </Box>

        <Box textAlign={{ base: 'center', md: 'left' }} color="white" maxW="550px" mx="auto">
          <Heading fontSize="45px" mb={{ base: '10px', md: '30px' }}>
            {' '}
            $TERR
          </Heading>

          <Text mb="20px">
            $TERR $TERR Token will be our native token; it will be used for all in-game transactions
            and staking protocols. $TERR is hosted on the ultra-scaleable Polygon blockchain.
          </Text>
          <Text mb="20px">
            The Polygon network can currently achieve a speed of 7,200 transactions per second
            (TPS), which makes it an extremely lucrative network and worthy of our backing.
          </Text>
          <Text mb="20px">
            All tokenomics for the $TERR token will be announced in the coming months.
          </Text>
        </Box>
      </Flex>

      <Flex
        flexDirection="column"
        maxW="1200px"
        py="10px"
        mx="auto"
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          flexDirection="column"
          maxW="1000px"
          textAlign="center"
          mx="auto"
          mt={{ base: '20px', md: '80px' }}
          w="100%"
          color="white"
          alignItems="center"
          justifyContent="center"
        >
          <Heading fontSize="45px" mb="30px">
            {' '}
            Mobile Friendly
          </Heading>

          <Text mb="20px">
            Territorian is a mobile-first NFT Game where users can hold environment tiles to earn
            our native token called $TERR, which is backed on Polygon (an Ethereum-based crypto).
          </Text>
          <Text mb="20px">
            Games rule the mobile app world. That’s why Territorian is working to make the
            Territorian game, a mobile first iOS and Android application.
          </Text>
          <Text mb="20px">
            We are in the process of discovering the technical requirements to host our game on
            these platforms, and will be making further announcements regarding this in the future.
          </Text>
        </Flex>

        <Flex
          flexDirection="column"
          maxW="1000px"
          textAlign="center"
          mx="auto"
          mt={{ base: '20px', md: '50px' }}
          w="100%"
          color="white"
          alignItems="center"
          justifyContent="center"
        >
          <Heading fontSize="43px" mb="30px">
            {' '}
            Holder Incentives
          </Heading>

          <Text mb="20px">
            In Territorian NFT, there are 10,000 individual Territorians looking for opportunities
            to earn more resources, TERR.
          </Text>
          <Text mb="20px">
            The TERR is very important for all Territorians for their next generation and also to
            protect their tiles from others and earn more income.
          </Text>
          <Text mb="20px">
            Users that hold both Male and Female Territorian characters are able to breed the 2 NFTs
            to mint a new Junior Territorian NFT, which can be used to stake additional land.
          </Text>
          <Text mb="20px">
            Territorians are able to create and join Alliances, which adds an additional layer of
            protection to their environmental land tiles, creating passive tokens.
          </Text>
          <Text mb="20px">
            Territorian NFT Holders are able to compete against each other, in the Territorian game,
            in order to win land and start earning passive tokens.
          </Text>
        </Flex>
      </Flex>

      <Flex
        mt="20px"
        maxW="900px"
        mx="auto"
        justifyContent="space-around"
        w="100%"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
      >
        <Box>
          <Image mb={{ base: '20px', md: 0 }} w="300px" src="/images/game.png" />
        </Box>

        <Box textAlign={{ base: 'center', md: 'left' }} color="white" maxW="500px" mx="auto">
          <Heading fontSize="45px" mb={{ base: '10px', md: '30px' }}>
            {' '}
            In-Game Items
          </Heading>

          <Text mb="20px">
            There are opportunities within the game to purchase items. All items are purchasable
            through $TERR tokens, such as tile protection (shields).
          </Text>
          <Text mb="20px">
            Shields expire within different time denominations, so purchase and use them wisely.
          </Text>
          <Text mb="20px">
            Additional consumable items will be available in the Territorian ecosystem to improve
            the user experience within our game application.
          </Text>
        </Box>
      </Flex> */}

      <Flex
        backgroundSize="cover"
        minH="100vh"
        py="10px"
        backgroundPosition="center"
        backgroundImage="/images/page.png"
        backgroundRepeat="no-repeat"
        w="100%"
        justifyContent={{ base: 'center', md: 'left' }}
      >
        <Flex
          ml={{ base: '0', md: '90px' }}
          px="20px"
          flexDirection="column"
          color="black"
          h={{ base: '500px', md: '400px' }}
          maxW={{ base: '350px', md: '500px' }}
          className="page"
        >
          <Heading mt="30px" mb="10px" fontSize="50px" fontWeight="bold">
            Land Tiles
          </Heading>
          <Text mb="20px">
            The Territorian Game Map is built out of Land Tiles. We are estimating that there will
            be 5000 Vacant Land Tiles in the game available for staking when the game begins,
            however this value may change due to our developing Tokenomics.
          </Text>
          <Text>
            Land Tiles staked by users will produce passive tokens, paid out in $TERR Token. Vacant
            Land Tiles will be unoccupied to be taken over by the users except for a certain amount
            of land tiles that will be designated for infrastructure such as roads and buildings in
            game, which can not be staked on.
          </Text>
        </Flex>
      </Flex>

      {/* <Flex
        flexDirection="column"
        maxW="1200px"
        py="10px"
        mx="auto"
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          flexDirection="column"
          maxW="1000px"
          textAlign="center"
          mx="auto"
          mt={{ base: '20px', md: '80px' }}
          w="100%"
          color="white"
          alignItems="center"
          justifyContent="center"
        >
          <Heading fontSize="45px" mb={{ base: '10px', md: '30px' }}>
            {' '}
            Breeding System
          </Heading>

          <Text mb="20px">
            Territorian NFTs will come equipped with an NFT breeding mechanism, however there are
            more male NFTs than there are female (70/30).
          </Text>
          <Text mb="20px">
            Breeding will be an important component to optimizing your passive token intake, as it
            will give you an additional opportunity to stake an NFT on a Land Tile.
          </Text>
          <Text mb="20px">
            When you produce Junior NFTs through breeding, you gain an additional NFT to play with
            in the game, giving you an additional character to stake more land with. To breed, you
            must have 1200 $TERR tokens to burn, as well as both a male and female NFT staking their
            own separate land.
          </Text>
        </Flex>

        <Flex
          flexDirection="column"
          maxW="1000px"
          textAlign="center"
          mx="auto"
          mt={{ base: '20px', md: '50px' }}
          w="100%"
          color="white"
          alignItems="center"
          justifyContent="center"
        >
          <Heading fontSize="45px" mb={{ base: '10px', md: '30px' }}>
            {' '}
            Clans
          </Heading>

          <Text fontSize="25px" fontWeight="bold" mb="20px">
            Protect your game tiles by forming clans with other players.
          </Text>
          <Text mb="20px">
            In the Territorian game, the clan system is built in to make Territorian feel as if
            you’re part of a family. Clans help you protect your staked tiles and help fellow clan
            members protect theirs through strategic clan membership. A special passive bonus will
            be active when one clan owns an entire continent.
          </Text>
          <Text mb="20px">
            Users that hold both Male and Female Territorian characters are able to breed the 2 NFTs
            to mint a new Junior Territorian NFT, which can be used to stake additional land.
          </Text>
          <Text mb="20px">
            Clan members are able to protect each others’ tile when the hero is absent from their
            tile. So any clan member of yours can compete and protect land for you, while you are
            away from the game. In the game of Territorian NFT, you are able to join an existing
            clan, or to create your own clan.
          </Text>
          <Text mb="20px">
            To create a clan, as the Clan master you must hold a tile for staking and burn $2000
            TER. To join an existing clan, you must hold a Tile for staking and burn 500 $TERR.
          </Text>
        </Flex>
      </Flex>

      <Flex
        mt="20px"
        maxW="900px"
        mx="auto"
        justifyContent="space-around"
        w="100%"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
      >
        <Box>
          <Image mb={{ base: '20px', md: 0 }} w="300px" src="/images/come.png" />
        </Box>

        <Box textAlign={{ base: 'center', md: 'left' }} color="white" maxW="500px" mx="auto">
          <Heading fontSize="45px" mb={{ base: '10px', md: '30px' }}>
            Competition
          </Heading>

          <Text fontSize="20px" fontWeight="bold" mb="20px">
            In order to win tiles to stake and earn passive tokens, your Territorian NFT will have
            to compete and win in order to earn the territory and stake the land.
          </Text>
          <Text mb="20px">
            Competition is done through mastering a board-game-like duel, similar to the popular
            board game Othello.
          </Text>
          <Text mb="20px">
            If you hold the tile and you’re being challenged, win this board-game style duel once to
            successfully defend your tile. If you are challenging a current tile holder, you must
            win two games in a row to win your opponent’s tile.
          </Text>
          <Text mb="20px">
            If you lose a competition, you have to wait an extended time before you can try to
            attack again, this amount of time is yet to be determined and may change upon user
            feedback
          </Text>
        </Box>
      </Flex>

      <Flex
        mt="40px"
        maxW="900px"
        mx="auto"
        justifyContent="space-around"
        w="100%"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
      >
        <Box textAlign={{ base: 'center', md: 'left' }} color="white" maxW="500px" mx="auto">
          <Heading fontSize="45px" mb={{ base: '20px', md: '30px' }}>
            Competition
          </Heading>

          <Text fontSize="20px" fontWeight="bold" mb="20px">
            In order to win tiles to stake and earn passive tokens, your Territorian NFT will have
            to compete and win in order to earn the territory and stake the land.
          </Text>
          <Text mb="20px">
            Competition is done through mastering a board-game-like duel, similar to the popular
            board game Othello.
          </Text>
          <Text mb="20px">
            If you hold the tile and you’re being challenged, win this board-game style duel once to
            successfully defend your tile. If you are challenging a current tile holder, you must
            win two games in a row to win your opponent’s tile.
          </Text>
          <Text mb="20px">
            If you lose a competition, you have to wait an extended time before you can try to
            attack again, this amount of time is yet to be determined and may change upon user
            feedback
          </Text>
        </Box>

        <Box>
          <Image mb={{ base: '20px', md: 0 }} w="300px" src="/images/mint.png" />
        </Box>
      </Flex>

      <Flex
        mt="20px"
        maxW="900px"
        mx="auto"
        justifyContent="space-around"
        w="100%"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
      >
        <Box display={{ base: 'none', md: 'block' }}>
          <Image w="300px" src="/images/holder.png" />
        </Box>

        <Box textAlign={{ base: 'center', md: 'left' }} color="white" maxW="500px" mx="auto">
          <Heading fontSize="45px" mb={{ base: '10px', md: '30px' }}>
            All Holders’ Benefits
          </Heading>

          <Text fontSize="20px" fontWeight="bold" mb="20px">
            All holders will have whitelist opportunities from partnership NFT projects.
          </Text>
          <Text mb="20px">
            Also, people who hold Territorian NFT collection will be provided $TERR Token and a tile
            per NFT collection. Moreover people who holds both female and male, they can breed
            Juniors.
          </Text>
        </Box>
        <Box display={{ base: 'block', md: 'none' }}>
          <Image w="300px" src="/images/holder.png" />
        </Box>
      </Flex>

      <Flex
        mt="40px"
        maxW="900px"
        mx="auto"
        justifyContent="space-around"
        w="100%"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
      >
        <Box textAlign={{ base: 'center', md: 'left' }} color="white" maxW="500px" mx="auto">
          <Heading mb={{ base: '20px', md: '30px' }}>Rarity of Territorians</Heading>

          <Text fontSize="20px" fontWeight="bold" mb="20px">
            Rarity plays a huge role in determining the value of certain NFTs as well as the utility
            that may be offered through an NFT’s traits.
          </Text>
          <Text mb="20px">
            When it comes to NFT, there are 4 tiers of rarity: Common, Rare, Super Rare, and
            Legendary. Rarity can be tracked using tools such as Rarity Sniper, which we discussed
            in previous sections of this whitepaper.
          </Text>
          <Text mb="20px">
            Also, we set the gender rate at 7:3 which means there are 7000 male collections and only
            3000 female collections. We decided to less female numbers to control Junior’s value.
          </Text>
        </Box>

        <Box mb={{ base: '20px', md: 0 }}>
          <Image w="300px" src="/images/rare.png" />
        </Box>
      </Flex> */}
    </>
  );
}
