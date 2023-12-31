import styled from "styled-components";
import {ReactComponent as ArrowDown} from "../../static/icon/arrow-down.svg"
 
const mobile = "600px";

export const ArrowDownIcon = styled(ArrowDown)<{accordion: boolean}>` 
	width: 21px;
	height: 31px;
	transform: ${({accordion}) => (accordion ? "" : "rotate(180deg)")}; 
	transition: all 200ms;
    min-width: 21px;
	min-height: 31px; 
`;

export const NeedHelpContainer = styled.div`
width: 100%;
min-height: 1238px;
height: max-content;
display: flex;
flex-direction: column;
align-items: center;
gap: 39px;
padding: 63px 0px;  
`; 

const Flex = styled.div` 
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const BlockSubtitle = styled(Flex)`
	width: 90%;
	height: max-content;
	min-height: 146px; 
	border-radius: 5px;
	background: #02C6CC;
`;

export const AccordionContainer = styled(Flex)`
	width: 100%;
	height: max-content;
	min-height: 787px; 
	background: #02C6CC;
	
`;

export const AccordionBlock = styled.div`
max-width: 790px;
width: 80%;
min-height: 526px;
height: max-content;
position: relative;
z-index: 1;

&::before {
	content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 22px;
    left: -15px;
    z-index: -1;
    background-color: #CA2D54;
}
`;

export const AccordionElement = styled.div`
width: 100%; 
height: max-content;
background: #FCD11F;
`;
 
export const AccordionHeader = styled.div`
	width: 100%;
    height: 85px;
    background: #FCD11F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 27px;
    padding: 0px 20px;
    cursor: pointer;
    user-select: none; 

	@media screen and (max-width: ${mobile}){  
    	font-size: 18px;
  	}

`;

export const AccordionContent = styled.div<{accordion: boolean}>`
	    width: 94%;
	${({accordion}) => (accordion ? `
		height: 100px !important;
		opacity: 1 !important;
		padding: 10px 47px!important;
	` : "")}; 
	height: 0;
	background: #FCD11F;
	transition: all 1s;
	opacity: 0;
    padding: 0;
    font-size: 18px;

	@media screen and (max-width: ${mobile}){  
		font-size: 14px;
    	padding: 10px 24px !important; 
		${({accordion}) => (accordion ? `
			height: 130px !important; 
	` : "")}; 
  	} 
`;

const defaultText = styled.p` 
	font-family: Inter;
	font-style: normal;
	font-weight: 900;
	line-height: normal;
`;


export const SubTitle = styled(defaultText)`
	color: #FFF; 
	text-align: center; 
	font-size: 26px;   

	@media screen and (max-width: ${mobile}){ 
		font-size: 21px;
  	}
	@media screen and (max-width: 320px){  
		font-size: 19px;
	}
`;

export const TitleAboutUs = styled(defaultText)`
	color: #FFF; 
		font-size: 33px;

	@media screen and (max-width: ${mobile}){ 
 		font-size: 34px;
  	} 
	
	@media screen and (max-width: 350px){  
		font-size: 30px;
	} 
`;

export const BlockTitleAboutUs = styled(Flex)`
	width: 39vw;
	min-height: 155px; 
	background-color: #E71649;
	border-radius: 5px; 
	position: relative; 
    min-width: 240px;
	text-align: center;
	@media screen and (max-width: ${mobile}){ 
		width: 300px; 
    	min-height: 112px;
  	}

	@media screen and (max-width: 350px){  
		width: 240px; 
	} 

	&::after {
		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #FCD11F;
		top: -11%;
    	left: -9%;
		border-radius: 5px; 
		z-index: -2;
	} 

`; 
