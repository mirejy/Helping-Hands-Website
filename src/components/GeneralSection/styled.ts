import styled from "styled-components";
import CrossImage  from "../../static/img/dog-image.svg";

const mobile = "500px";

export const GeneralSectionContainer = styled.div` 
  height: calc(100% - 74px);
  width: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-image: url(${CrossImage}); 
`

export const ContainerContent = styled.div` 
  height: 91%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: ${mobile}){ 
    width: 100%; 
    align-items: center;
  }
`

export const Title = styled.p`
	color: #FFF;
  font-family: Inter;
  font-size: 62px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  background: #02C6CC;
  max-width: 940px;
  padding: 5px;

  @media screen and (max-width: ${mobile}){ 
    text-align: center;
    font-size: 32px; 
    background: none;
  }

  @media screen and (max-width: 1000px) and (min-width: 500px){ 
    font-size: 50px;
  }

`

export const SubTitle = styled.p`
	color: #FFF;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;

  @media screen and (max-width: ${mobile}){ 
    background: #02C6CC;
    max-width: 289px;
    padding: 5px;
  }
`

export const BlockText = styled.div` 
  display: flex;
  gap: 12px;
  flex-direction: column;

  @media screen and (max-width: ${mobile}){  
    align-items: center;
  }
`

export const Button = styled.button` 
  width: 364px;
  height: 78.402px;
  text-align: center;
  border-radius: 40px;
  background: #02C6CC;
  color: #FFF;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  border: none;
  cursor: pointer;

  @media screen and (max-width: ${mobile}){ 
    height: 56.402px;
    width: 81%;
    font-size: 19px;
    max-width: 364px; 
  }

&:hover {
	content: "";
	opacity: 0.9;
}
;
`
