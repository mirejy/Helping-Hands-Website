import styled from "styled-components";

const Flex = styled.div` 
	display: flex;
	justify-content: center;
	align-items: center;
`

export const AboutUsContainer = styled.div `
	width: 100%;
	min-height: 930px;
	height: max-content; 
	display: flex;
	justify-content: center;
	align-items: start;
	padding: 63px 0px;
`;

export const BlockTitleAboutUs = styled(Flex)`
	width: 440px;
	min-height: 155px; 
	background-color: #E71649;
	border-radius: 5px; 
	position: relative; 

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
    }

`; 

export const WrapperAboutUs = styled.div`
	width:  80%;
	height: 100%; 
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
    height: 654px;
    margin-top: 73px;
	display: flex;
	gap: 33px;
`;

export const ContainerSmallBlocks = styled.div`
	width:  50%;   
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 53px;
`;

export const WhoWeHelpBlock = styled.div`
	width:  50%;  
	height: 100%;
	display: flex;
    align-items: center;
    flex-direction: column; 
	border-radius: 5px;
	background: #FCD11F;
`;

export const BlockWelcome = styled.div`
	width:  100%;  
	height: 55%;
	display: flex;
    align-items: center;
    flex-direction: column; 
	border-radius: 5px;
	background: #02C6CC;
`;

export const HowYouCanHelp = styled.div`
	width:  100%;  
	height: 45%;
	display: flex;
    align-items: center;
    flex-direction: column; 
	border-radius: 5px;
	background: #CA2D54;
`;


export const Header = styled(Flex)`
	width: 100%;  
`;

export const TitleAboutUs = styled.p`
	color: #FFF;
	font-family: Inter;
	font-size: 64px;
	font-style: normal;
	font-weight: 900;
	line-height: normal;
`;

export const TitleWhoWeHelp = styled.p`
	color: #222;
	text-align: center;
	font-family: Inter;
	font-size: 46px;
	font-style: normal;
	font-weight: 900;
	line-height: normal;
`;

export const TitleBlock = styled.p`
	color: #FFF;
	text-align: center;
	font-family: Inter;
	font-size: 35px;
	font-style: normal;
	font-weight: 900;
	line-height: normal;
`;

export const ContentText = styled.p`
	color: #FFF;
	font-family: Inter;
	font-size: 18px;
	font-style: normal;
	font-weight: 900;
	line-height: normal;
`;

export const ContentWhoWeHelp = styled.p`
	color: #212121;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 900;
line-height: normal;
`;