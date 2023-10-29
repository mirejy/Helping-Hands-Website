import styled from "styled-components";


const mobile = "810px";

const Flex = styled.div` 
	display: flex;
	justify-content: center;
	align-items: center;
`;

const defaultText = styled.p` 
	font-family: Inter;
	font-style: normal;
	font-weight: 900;
	line-height: normal;
`;
 
export const TitleAboutUs = styled(defaultText)`
	color: #FFF;
	font-size: 64px;

	@media screen and (max-width: ${mobile}){  
    	font-size: 43px;
  	}
`;

export const BlockTitleAboutUs = styled(Flex)`
	width: 440px;
	height: 155px; 
	background-color: #E71649;
	border-radius: 5px; 
	position: relative; 

	@media screen and (max-width: ${mobile}){  
    	width: 241px;
    	height: 106px;
  	}

	&::before {
		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #FCDA50;
		top: 16%;
    	left: 5%;
		border-radius: 5px; 
	}
	&::after {
		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #02C6CC;
		top: -11%;
    	left: -9%;
		border-radius: 5px; 
	}
	span::after {
		content: "O nas";
    	position: absolute;
    	top: 12%;
    	left: 25%;
    	z-index: 2; 
		
		@media screen and (max-width: ${mobile}){  
			top: 10%;
    		left: 18%;
  		}
    }

`; 

export const WrapperAboutUs = styled.div`
	width:  80%;
	height: 100%; 

	@media screen and (max-width: ${mobile}){  
		width: 100%;
	}
`;

export const AboutUsContainer = styled.div `
	width: 100%; 
	display: flex;
	justify-content: center;
	align-items: start;
	padding: 63px 0px;
`;

export const HeaderBlockContainer = styled.div`
	width:  100%; 
	padding: 35px 33px;
`;

export const WrapperContent = styled.div`
	width: 86%;
`;

export const WhoHelpList = styled.ol`
	width:  100%;  
	display: flex;
	flex-direction: column; 
	gap: 46px;
`;

export const HelpingList = styled.ul`
	width:  100%;  
	display: flex;
	flex-direction: column; 
	gap: 18px;
`;


export const WhoHelpLi = styled.li`
	width:  100%;  
`;

export const HelpingLi = styled.li`
	width:  100%;  
`;

export const Content = styled.div`
	width:  100%;     
    margin-top: 73px;
	display: flex;
	gap: 33px;

	@media screen and (max-width: ${mobile}){   
    	gap: 17px;
		height: unset;
		flex-direction: column-reverse;
  	 }
`;

export const ContainerSmallBlocks = styled.div`
	width:  50%;    
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 53px;

	@media screen and (max-width: ${mobile}){  
		width: 100%;
		gap: 17px;
	}
`;

export const WhoWeHelpBlock = styled.div`
	width:  50%;   
	display: flex;
    align-items: center;
    flex-direction: column; 
	border-radius: 5px;
	background: #FCD11F;
	padding: 0px 0px 25px 0px;

	@media screen and (max-width: ${mobile}){  
		width:  100%;  
   	}
`;

export const BlockWelcome = styled.div`
	width:  100%;  
	height: 55%;
	display: flex;
    align-items: center;
    flex-direction: column; 
	border-radius: 5px;
	background: #02C6CC;
	padding: 0px 0px 25px 0px;
`;

export const HowYouCanHelp = styled.div`
	width:  100%;  
	height: 45%;
	display: flex;
    align-items: center;
    flex-direction: column; 
	border-radius: 5px;
	background: #CA2D54;
	padding: 0px 0px 25px 0px;
`;


export const Header = styled(Flex)`
	width: 100%;  
`;

export const TitleWhoWeHelp = styled(defaultText)`
	color: #222;
	text-align: center; 
	font-size: 46px;

	@media screen and (max-width: ${mobile}){  
		font-size: 32px;
   	}
`;

export const TitleBlock = styled(defaultText)`
	color: #FFF;
	text-align: center;
	font-size: 35px;
`;

export const ContentText = styled(defaultText)`
	color: #FFF;
	font-size: 18px;
`;

export const ContentWhoWeHelp = styled(defaultText)`
	color: #212121;
	font-size: 20px;

	@media screen and (max-width: ${mobile}){  
		font-size: 17px;
   	}
`;