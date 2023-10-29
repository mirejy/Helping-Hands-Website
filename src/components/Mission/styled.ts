import styled from "styled-components";
import {ReactComponent as Founder} from "../../static/img/Image-founder.svg"
import Quote from "../../static/icon/quote-icon.svg" 
 
const mobile = "870px";

export const ImageFounder = styled(Founder)`
	width: 160px;
    height: 160px;
`;

export const BlockText = styled.div`  
	display: flex;
	height: 100%;
	width: 70%;
    flex-direction: column;
    align-items: center; 
    justify-content: space-around;  
	position: relative;

	@media screen and (max-width: ${mobile}){  
		height: 30%;
    	gap: 25%;
  	} 

	&::before {
		content: "";
    	position: absolute;
    	left: 0; 
    	top: -26px;
    	width: 47px;
    	height: 35px; 
		background: url(${Quote});
    	background-position: center;

		@media screen and (max-width: ${mobile}){  
			left: -34px;
   			top: -5px;
  		} 
	}
	&::after {
		content: "";
    	position: absolute;
		background: url(${Quote});
    	bottom: -33px;
    	right: 0;
    	transform: rotate(180deg);
    	width: 47px;
    	height: 35px; 
    	background-position: center;

		@media screen and (max-width: ${mobile}){  
			bottom: -106px;
    		right: -42px;
  		} 
	}    
`;

export const BlockMissionContainer = styled.div`
	width: 100%;
	height: 484px;
	border-radius: 5px;
	display: flex; 
	justify-content: center;
	align-items: center;
	background: #FCD11F; 
	position: relative;  
	z-index:  1;
	padding: 63px 0px;

	@media screen and (max-width: ${mobile}){  
		height: 768px;
  	}

	&::before {
		content: "";
    	position: absolute;
    	left: 0;
    	transform: translateX(-50%);
    	bottom: 0;
    	width: 60%;
    	height: 21%;
    	background-color: #02c6cc;
    	clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    	z-index: -1;
	}
	&::after {
		content: "";
    	position: absolute;
    	right: 0;
    	transform: translateX(50%) rotate(180deg);
    	top: 0;
    	width: 80%;
    	height: 25%;
    	background-color: #CA2D54;
    	clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    	z-index: -2;
	}

`;

export const BlockMissionWrapper = styled.div`
	display: flex; 
    align-items: center;
	width: 76%;
	height: 50%;
    justify-content: space-around; 

	@media screen and (max-width: ${mobile}){  
		flex-direction: column-reverse;
    	width: 100%;
    	height: 100%;
  	}

`;

export const BlockTitleFounder = styled.div`
	display: flex;
    align-items: start;
    flex-direction: column;
    position: absolute;
    width: 224px;
	margin-top: 20px;
    height: 50%;
    left: 44px;
    justify-content: space-around;

	@media screen and (max-width: ${mobile}){  
		left: unset;
  	}
`;

export const BlockFounderImage = styled.div` 
	position: relative; 
	z-index:  1; 
`;

export const defaultText = styled.p`
	color: #222;
	text-align: center;
	font-family: Inter; 
	font-style: normal;
	font-weight: 900;
	line-height: normal;
`;

export const Title = styled(defaultText)` 
	font-size: 46px; 
`;

export const NameText = styled(defaultText)` 
	font-size: 28px; 
`;

export const FounderText = styled(defaultText)` 
	font-size: 20px; 
`;
 
export const SubTitle = styled(defaultText)` 
	color: #3D3D3D !important; 
	font-size: 22px;   
`;

export const BlackSubtitle = styled(defaultText)`
	color: #000 !important;
	font-size: 24px; 
`;