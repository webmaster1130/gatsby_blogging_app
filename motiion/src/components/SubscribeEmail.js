import React, { Component } from 'react'
import styled from 'styled-components'

import RoundBtn from './RoundBtn'
import PaddingDiv from './PaddingDiv'
import { FlexContainer } from '../layouts/header/components';

class SubscribeEmail extends Component {
  render() {
    return (
      <PaddingDiv top={6} bottom={6} left={6} right={6}
        style={{
          backgroundColor: '#fff',
          borderRadius: 5,
          width: '100%',
        }}
      >
      <FlexContainer justifyContent="space-between">
        <SearchInput placeholder="Enter email" />
          <RoundBtn size={16} color={'#fff'} bgColor={'#1e22aa'}>
            Subscribe
          </RoundBtn>
      </FlexContainer>
      </PaddingDiv>
    )
  }
}

export default SubscribeEmail;

const SearchInput = styled.input`
  border: none;
  color: #000;
  font-size: 20px;
  letter-spacing: 0.3px;
  height: 48px;
  padding: 0 20px;
  flex: 1;
  margin-right: 10px;
`