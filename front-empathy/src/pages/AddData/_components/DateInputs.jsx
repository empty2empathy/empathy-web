import React from 'react';
import styled from 'styled-components';

const LabelName = styled.p`
    width: 100%;
    height: 14px;
    margin: 0 0 4px;
    color: #666666;
    font-size: 12px;
    font-weight: 500;
`;

const InputWrapper = styled.div`
    display: flex;
`;

const Input = styled.input`
    display: flex;
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    padding: 8px;
    background: #fcfcfc;
    border-radius: 4px;
    border: 1px solid #e7e7e7;
    &:first-child {
        margin: 0 8px 0 0;
    }
`;

const DateInputs = ({ handleDateChange, labelName, inputNames }) => {
  return (
    <div>
      <label>
        <LabelName>{labelName}</LabelName>
        <InputWrapper>
          <Input type='date' name={inputNames[0]} onChange={handleDateChange}/>
          <Input type='date' name={inputNames[1]} onChange={handleDateChange}/>
        </InputWrapper>
      </label>
    </div>
  )
};

export default DateInputs;
