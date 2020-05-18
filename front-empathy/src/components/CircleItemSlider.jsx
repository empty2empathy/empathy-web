import React, { useRef, useState } from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import ArrowRight from "assets/svg/arrowRight";

// slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderWrapper = styled(Slider)`
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

const ArrowWrapper = styled.div`
  visibility: ${props => props.show ? 'visible' : 'hidden'};
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

const CircleItemSliderWrapper = styled.div`
  .title {
    margin: 0 0 16px;
    color: rgba(252, 252, 252, 0.5);
    font-size: 13px;
    line-height: 1.5;
    font-weight: 500;
  }

  .slide {
    position: relative;
    ${ArrowWrapper} {
      &.left {
        position: absolute;
        top: 0;
        left: 0;
      }
      &.right {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
`;

const CircleItemSlider = () => {
  const sliderEl = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrow, setShowArrow] = useState({ left: false, right: true });
  const slickItems = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  // TODO: useCallback으로 감싸야하는지 공부하고 개선
  const onLeftArrowClick = () => {
    sliderEl.current.slickPrev();
  };
  const onRightArrowClick = () => {
    sliderEl.current.slickNext();
  };

  const _beforeChange = (nextIdx, lastIdx) => {
    if (nextIdx !== 0) {
      if (!showArrow.left) {
        setShowArrow({ ...showArrow, left: true });
      }
    } else {
      setShowArrow({ ...showArrow, left: false });
    }

    if (lastIdx <= slickItems.length) {
      if (!showArrow.right) {
        setShowArrow({ ...showArrow, right: true });
      }
    } else {
      setShowArrow({ ...showArrow, right: false });
    }
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    arrows: false,
    beforeChange: (currIdx, nextIdx) => {
      console.log('before: ', currIdx, nextIdx);
      const slidesToShow = sliderEl.current.props.slidesToShow;
      const lastIdx = nextIdx + slidesToShow;
      _beforeChange(nextIdx, lastIdx)
    },
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 7,
          beforeChange: (currIdx, nextIdx) => {
            console.log('breakpoint: 500 before: ', currIdx, nextIdx);
            const slidesToShow = sliderEl.current.props.slidesToShow;
            const lastIdx = nextIdx + slidesToShow;
            _beforeChange(nextIdx, lastIdx)
          }
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 6,
          beforeChange: (currIdx, nextIdx) => {
            console.log('breakpoint: 500 before: ', currIdx, nextIdx);
            const slidesToShow = sliderEl.current.props.slidesToShow;
            const lastIdx = nextIdx + slidesToShow;
            _beforeChange(nextIdx, lastIdx)
          }
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 5,
          beforeChange: (currIdx, nextIdx) => {
            console.log('breakpoint: 380 before: ', currIdx, nextIdx);
            const slidesToShow = 5;
            const lastIdx = nextIdx + slidesToShow;
            console.log(slidesToShow, lastIdx);
            _beforeChange(nextIdx, lastIdx)
          }
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 4,
          beforeChange: (currIdx, nextIdx) => {
            console.log('breakpoint: 320 before: ', currIdx, nextIdx);
            const slidesToShow = sliderEl.current.props.slidesToShow;
            const lastIdx = nextIdx + slidesToShow;
            _beforeChange(nextIdx, lastIdx)
          }
        }
      }
    ]
  };
  return (
    <CircleItemSliderWrapper>
      <h4 className="title">Upcoming event's location</h4>
      <div className="slide">
        <SliderWrapper ref={sliderEl}  {...settings}>
          {slickItems.map((v, i) => (
            <div className="item" key={i}>
              <div className="circle" onClick={() => console.log('hi')}>

              </div>
              <p className="title">Location</p>
            </div>
          ))}
        </SliderWrapper>
        <ArrowWrapper className="left" onClick={onLeftArrowClick} show={showArrow.left}>
          <ArrowRight width={20} height={20} color={"white"} style={{ transform: 'rotate(180deg)' }}/>
        </ArrowWrapper>
        <ArrowWrapper className="right" onClick={onRightArrowClick} show={showArrow.right}>
          <ArrowRight width={20} height={20} color={"white"}/>
        </ArrowWrapper>
      </div>
    </CircleItemSliderWrapper>
  );
};

export default CircleItemSlider;
