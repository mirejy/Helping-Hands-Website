import styled from "styled-components";
import CrossImage  from "../../static/img/dog-image.svg";


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
`

export const Title = styled.p`
	color: #FFF;
font-family: Inter;
font-size: 64px;
font-style: normal;
font-weight: 900;
line-height: normal;
`

export const SubTitle = styled.p`
	color: #FFF;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 900;
line-height: normal;
`

export const BlockText = styled.div` 
display: flex;
gap: 12px;
flex-direction: column;
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

&:hover {
	content: "";
	opacity: 0.9;
}
;
`
