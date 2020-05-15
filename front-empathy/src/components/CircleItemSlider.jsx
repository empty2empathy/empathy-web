import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import ArrowRight from "assets/svg/arrowRight";

// slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderWrapper = styled(Slider)`
  background: #999999;
  .item {
    .circle {
      width: 50px;
      height: 50px;
      box-sizing: border-box;
      margin: 0 auto 4px;
      border-radius: 25px;
      //background-image: url(/* bg-noise-texture.png */);
      border: 1.5px dotted #ffffff;
    }
    .title {
      height: 15px;
      margin: 0;
      overflow: visible;
      color: #fcfcfc;
      text-align: center;
      font-size: 10px;
      line-height: 1.5;
      font-weight: 500;
    }
  } 
`;

const CircleItemSliderWrapper = styled.div`
  position: relative;
  .arrows {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

const ArrowWrapper = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(1px);
`;

const CircleItemSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <CircleItemSliderWrapper>
      <SliderWrapper {...settings}>
        {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, i) => (
          <div className="item" key={i}>
            <div className="circle">

            </div>
            <p className="title">Location</p>
          </div>
        ))}
      </SliderWrapper>
      <div className="arrows">
        <ArrowWrapper>
          <ArrowRight width={20} height={20} color={"white"} style={{ transform: 'rotate(180deg)' }}/>
        </ArrowWrapper>
        <ArrowWrapper>
          <ArrowRight width={20} height={20} color={"white"}/>
        </ArrowWrapper>
      </div>
    </CircleItemSliderWrapper>
  );
};

export default CircleItemSlider;
