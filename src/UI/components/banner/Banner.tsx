// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";

import img1 from "../../../assets/images/slideImg.png";

// import required modules
import { Autoplay, EffectCreative } from "swiper/modules";
const slideImges = [img1, img1];

function Banner() {
  return (
    <>
      <Swiper
        rewind={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[Autoplay, EffectCreative]}
        className="mySwiper"
      >
        {slideImges.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt="slide image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Banner;
