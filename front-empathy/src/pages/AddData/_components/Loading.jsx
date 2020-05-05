import React from 'react';
import styled from 'styled-components';

const LoadingWrapper = styled.h1`
  color: #fcfcfc;
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      Loading...
    </LoadingWrapper>
  );
};

export default Loading;
