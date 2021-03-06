import styled from 'styled-components'
import { Link } from 'gatsby'

export const CustomLink = styled(Link)`
  opacity: 0.6;
  color: #FFFFFF;
  font-size: 20px;
  letter-spacing: 0.67px;
  line-height: 24px;
  font-weight: 300;
  text-decoration: none;

  & span {
    padding: 10px;
    border-bottom: none;
  }

  @media (max-width: 600px) {
    margin: 0 10px;
  }
`

export const Wrapper = styled.footer`
  height: 100px;
  width: 100%;
  background-color: #000;

  @media (max-width: 600px) {
    display: none;
  }
`

export const MobileFooter = styled.footer`
  display: none;

  @media (max-width: 600px) {
    background: #000;
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
  }
`

export const Container = styled.div`
  width: 960px;
  height: 100px;
  margin: auto;
  display: flex;
  align-items: center;

  @media (min-width: 600px) and (max-width: 1000px) {
    width: 100%;
    padding: 0 20px;
  }
`

export const FlexContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Links = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  height: 36px;
  padding-right: 30px;
  margin: 0;
  margin-top: 8px;

  @media (max-width: 600px) {
    padding-right: 0;
  }
`
