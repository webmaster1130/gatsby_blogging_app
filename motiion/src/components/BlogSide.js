import React from 'react'
import styled from 'styled-components'

const BlogSide = ({ style, isMobile }) => {
  return (
    <Container style={{ ...style }}>
      <FlexContainer>
        <Line />
        <Text>BLOG</Text>
      </FlexContainer>
    </Container>
  )
}

export default BlogSide

const Container = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`

const FlexContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 760px;
  transform: translate(-45%,360px) scaleX(-1) scaleY(-1) rotate(90deg);
`

const Line = styled.div`
  background: #fff;
  opacity: 0.4;
  height: 1px;
  flex: 1;
`

const Text = styled.div`
  opacity: 0.6;
  color: #FFFFFF;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 200;
  letter-spacing: 7.5px;
  line-height: 48px;
  text-align: center;
  padding: 0 40px;
`
