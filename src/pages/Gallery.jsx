import { Box, Heading, Image, Text } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const images = new Array(18).fill().map((_, i) => i);

export default function Gallery() {
    const settings = {
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 8000,
      pauseOnHover: false,
      cssEase: 'linear',
      infinite: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 8000,
            pauseOnHover: false,
            cssEase: 'linear',
            infinite: true,
            arrows: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 8000,
            pauseOnHover: false,
            cssEase: 'linear',
            infinite: true,
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 8000,
            pauseOnHover: false,
            cssEase: 'linear',
            infinite: true,
            arrows: false,
          },
        },
      ],
    };
  return (
    <Box py="30px" id="gallery">
      <Heading
        color="white"
        fontSize="6xl"
        fontWeight="bold"
        my="50px"
        textAlign="center"
      >
       Gallery
      </Heading>
      <Text fontSize="2xl" mb="30px" textAlign="center" color="white">
        All DUMMY Holders will be included in our mining project too.
      </Text>
      <Slider {...settings}>
        {images.map(img => (
          <Image key={img} src={require(`../assets/${img + 1}.jpeg`)} />
        ))}
      </Slider>
    </Box>
  );
}
