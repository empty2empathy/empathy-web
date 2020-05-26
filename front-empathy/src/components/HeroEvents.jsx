import React from 'react';
import styled from 'styled-components';

const img1 = 'data:image/jpeg;base64,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';
const img2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92zsWV_vNs07387Zz7GEBF6EhV0zRY7zoHw9FmHuEmPWZCeQjRA&s';
const img3 = 'https://post-phinf.pstatic.net/MjAxODExMTJfMTc5/MDAxNTQyMDA3MTY3NzQy.O0d6SoUIwXLTZuXX1u-YrFl7PBerW-jejxVa-LVrbKIg.NwhSX0_UwtMjn_5wwD4X7utEQujtHx-3MxDnkslaJa4g.JPEG/%EA%B9%80%EC%98%A4%ED%82%A4_%ED%94%84%EB%A1%9C%ED%95%84%EC%82%AC%EC%A7%84.JPG?type=w1200';

const HeroEventsWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 8px;
  height: 320px;
  
  .item-wrapper{
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
  }
`;

const Item = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   box-sizing: border-box;
   height: 100%;
   padding: 16px 20px;
   background: linear-gradient(180deg, rgba(252, 252, 252, 0) 0%, rgb(26, 26, 26, 100%));
      
   .sub-title {
      color: #fcfcfc;
   }
         
   .title {
      margin: 8px 0 0;
      text-shadow: 1px 2px 10px rgba(0, 0, 0, 0.75);
      color: #fcfcfc;
      font-size: ${props => props.smallTitle ? '16px' : '32px'};
      font-weight: 600;
      line-height: 1.2;
   }
`;

const RbBadge = styled.span`
  padding: 2px 3px 2px 3px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const HeroEvents = () => {
  return (
    <HeroEventsWrapper>
      <div className="item-wrapper" style={{ backgroundImage: `url(${img1})` }}>
        <Item>
          <div className="sub-title">
            <RbBadge>Evans Lounge</RbBadge>
          </div>
          <h1 className="title">Mac miller with Evans</h1>
        </Item>
      </div>
      <div className='item-wrapper' style={{ backgroundImage: `url(${img2})` }}>
        <Item smallTitle={true}>
          <div className="sub-title">
            <RbBadge>Bogie Woogie</RbBadge>
          </div>
          <h2 className="title">Uncle's saxophone</h2>
        </Item>
      </div>
      <div className='item-wrapper' style={{ backgroundImage: `url(${img3})` }}>
        <Item smallTitle={true}>
          <div className="sub-title">
            <RbBadge>Soap Seoul</RbBadge>
          </div>
          <h2 className="title">Soap's performance</h2>
        </Item>
      </div>
    </HeroEventsWrapper>
  );
};

export default HeroEvents;