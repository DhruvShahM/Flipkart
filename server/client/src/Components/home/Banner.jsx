import Carousel from 'react-multi-carousel';

import {styled} from '@mui/material';
import { bannerData } from '../../Constants/data';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 1
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1
    }
  };

const Image=styled('img')(({theme})=>({
    width:'100%',
    height:280,
    [theme.breakpoints.down('md')]:{
      objectFit:'cover',
      height:180
    }
}));

const Banner = () => {
    return (
        <Carousel
        additionalTransfrom={0}
        autoPlay={true}
        arrows
        autoPlaySpeed={4000}
        centerMode={false}
        className=""
        containerClass="carousel-container"
        dotListClass=""
        draggable={false}
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable={false}
      >
            {
                bannerData.map(data=>{
                    console.log(data.id);   
                 return <Image key={data.id} src={data.url} alt="banner" />   
                })
            }
        </Carousel>
    )
}

export default Banner;