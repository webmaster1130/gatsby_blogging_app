import styled from 'styled-components'

export const FirstWeEatSideBg = styled.div`
  position: absolute;
  margin: 110px 0;
  height: 440px;
  width: 512px;
  background-color: #d8d8d8;
  z-index: 9;
  right: 0;
  top: 0;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

export const FirstWeEatMain = styled.div`
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
  @media only screen and (max-width: 600px) {
    max-width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
`

export const InfoDetail = styled.div`
  font-size: 20px;
  width: 640px;
  padding: 80px 0 125px 60px;
  flex: 1;

  & > p {
    margin-top: 50px;
  }
  
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 200px 10px 60px 10px;
  }
  @media only screen and (max-width: 550px) {
    width: 100%;
    padding: 180px 10px 60px 10px;
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
    padding: 180px 10px 60px 10px;
  }
  @media only screen and (max-width: 420px) {
    width: 100%;
    padding: 150px 10px 60px 10px;
  }
  @media only screen and (max-width: 400px) {
    width: 100%;
    padding: 120px 10px 60px 10px;
  }
`
