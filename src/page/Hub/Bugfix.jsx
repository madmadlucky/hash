import { useEffect } from "react";
import { useSwiper } from "swiper/react";

export default ({ setShowSwiperDesktop = () => {} }) => {
  const swiper = useSwiper();

  useEffect(() => {
    let timeIntervalId = null;

    timeIntervalId = setInterval(() => {
      if (swiper.activeIndex === 0) {
        setShowSwiperDesktop(true);
        clearInterval(timeIntervalId);
      }

      swiper.slideTo(0, 0);
    }, 100);

    // const onActiveIndexChange = (e) => {
    //   console.log(e.activeIndex);
    // };
    // swiper.on("activeIndexChange", onActiveIndexChange);

    return () => {
      if (timeIntervalId) clearInterval(timeIntervalId);
    };
  }, []);

  return null;
};
