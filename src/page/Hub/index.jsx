import { Fragment, useMemo, useRef, useState, useEffect } from "react";
import { throttle } from 'lodash';
import { Visible } from "react-grid-system";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";
import { useTheme } from "styled-components";

import Section from "@/component/Partials/Section";
import ArrowLeftIcon from "@/component/svg/ArrowLeftIcon";
import ArrowRightIcon from "@/component/svg/ArrowRightIcon";
import Bugfix from "./Bugfix";
import ZoomDiv from "@/component/ZoomDiv";



import {
  HubLayout,
  Img,
  NavDiv,
  Button,
  LinkCTA,
  LinkKR,
  LinkENG,
  ImgDiv,
  DesktopImgWrapper,
  DesktopSwiperWrapper,
} from "./styles";

import "swiper/css";

import styles from './Hub.module.scss';
import { useParams } from "react-router-dom";
import { config1, config2 } from "./config";

const configSerial = (serial)=>{
  switch(serial){
    case '1':{
      return config1;
    }
    case '2':{
      return config2;
    }
  }
}

export default () => {
  const theme = useTheme();

  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  const [showSwiperDesktop, setShowSwiperDesktop] = useState(false);

  const params = useParams();

  const config = configSerial(params.serial);

  const desktopConfig = useMemo(() => {
    const oldArray = [...config];
    const newArray = [];

    while (oldArray.length) {
      if (newArray.length === 0 || oldArray.length === 1) {
        const el = oldArray.shift();
        newArray.push([el]);
      } else {
        const el1 = oldArray.shift();
        const el2 = oldArray.shift();
        newArray.push([el1, el2]);
      }
    }

    return newArray;
  }, [config]);

  useEffect(() => {
    const handleScroll = throttle((e) => {
      const direction = e.deltaY > 0;

      if (Math.abs(e.deltaY) < 4) return;

      // wheel up
      if(direction) {
        nextButtonRef.current.click();
      } else {
        prevButtonRef.current.click();
      }
    }, 750);

    document.body.addEventListener('wheel', handleScroll);
    return () => {
      document.body.removeEventListener('wheel', handleScroll);
    };
  }, []);

  
  const control = (symbol)=>{
    const target = document.querySelector(`.swiper-slide-active .${symbol}`);
    target.click();
  }

  return (
    <Section
      paddingY={{ top: false, bottom: false }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0px",
        height: "100%",
      }}
      className={styles.hubLayout}
    >
      <HubLayout>
        <Visible xs sm md>
          <Swiper
            className="swiper"
            simulateTouch={false}
            centeredSlides={true}
            loop={false}
            slidesPerView={"auto"}
            spaceBetween={20}
            modules={[A11y, Navigation]}
            a11y={true}
            speed={450}
            navigation={{
              prevEl: prevButtonRef.current || "#swiper-nav-prev",
              nextEl: nextButtonRef.current || "#swiper-nav-next",
            }}
            Swiper={false}
          >
            {config.map((item, i) => {
              const { id, button, adButton } = item;

              return (
                <SwiperSlide key={`slide-mobile-${i}`} className={`section${params.serial}_${i+1}`}>
                  <ZoomDiv
                    controlStyle={{
                      width:0,
                      height:0,
                      overflow:'hidden',
                    }}
                  >
                    <Img src={`/image/hub/${params.serial}/${id}.jpg`} alt="newspaper" />
                    {button && (
                      <LinkCTA to={button.to} target="_blank">
                        <LinkKR>{button.textKR}</LinkKR>
                        <LinkENG>{button.textEN}</LinkENG>
                      </LinkCTA>
                    )}
                    {adButton && (
                      <a href={adButton.href} style={{position:'absolute', left:'50%', top:'20px', width:'67vw', height:'53vw', transform:'translate(-50%,0)'}}/>
                    )}
                  </ZoomDiv>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Visible>

        <Visible lg xl xxl>
          <DesktopSwiperWrapper style={{ opacity: showSwiperDesktop ? 1 : 0}}>
            <Swiper
              className="swiper"
              simulateTouch={false}
              centeredSlides={true}
              loop={false}
              slidesPerView={"auto"}
              spaceBetween={100}
              breakpoints={{
                [`${theme.breakpoints.xl}`]: {
                  spaceBetween: 150,
                },
                [`${theme.breakpoints.xxl}`]: {
                  spaceBetween: 250,
                },
              }}
              modules={[A11y, Navigation]}
              a11y={true}
              speed={450}
              navigation={{
                prevEl: prevButtonRef.current || "#swiper-nav-prev",
                nextEl: nextButtonRef.current || "#swiper-nav-next",
              }}
            >
              {desktopConfig.map((items, i) => (
                <SwiperSlide key={`slide-desktop-${i}`} className={`section${params.serial}_${i+1}`}>
                  <ZoomDiv
                    controlStyle={{
                      // position: "absolute",
                      // left: "50%",
                      // bottom: 5,
                      // transform: "translateX(-50%)",
                      width:0,
                      height:0,
                      overflow:'hidden',
                    }}
                  >
                    <DesktopImgWrapper>
                      {items.map((item, j) => {
                        const { id, button, adButton } = item;

                        return (
                          <Fragment key={`${i}-${j}`}>
                            <ImgDiv>
                              <Img
                                src={`/image/hub/${params.serial}/${id}.jpg`}
                                alt="newspaper"
                              />
                              {button && (
                                <LinkCTA to={button.to} target="_blank">
                                    <LinkKR>{button.textKR}</LinkKR>
                                    <br />
                                    <LinkENG>{button.textEN}</LinkENG>
                                </LinkCTA>
                              )}
                              {adButton && (
                                <a href={adButton.href} style={{position:'absolute', left:'50%', top:'20px', width:'500px', height:'400px', transform:'translate(-50%,0)'}}/>
                              )}
                            </ImgDiv>
                          </Fragment>
                        );
                      })}
                    </DesktopImgWrapper>
                  </ZoomDiv>
                </SwiperSlide>
              ))}

              <Bugfix setShowSwiperDesktop={setShowSwiperDesktop} />
            </Swiper>
          </DesktopSwiperWrapper>
        </Visible>

        <NavDiv className={`${styles.navDiv}`}>
          <Button id="swiper-nav-prev" ref={prevButtonRef}>
            <ArrowLeftIcon aria-label="Previous" />
          </Button>
          <Button id="swiper-nav-next" ref={nextButtonRef}>
            <ArrowRightIcon aria-label="Next" />
          </Button>
          <div className="zoomButton">
            <button onClick={()=>control('minus')} className="minus"/>
            <button onClick={()=>control('plus')} className="plus"/>
          </div>
        </NavDiv>
      </HubLayout>
    </Section>
  );
};
