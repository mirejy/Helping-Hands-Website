import styled from "styled-components";
 
const mobile = "600px";
const tablet = "800px";
const miniLaptop = "1100px";

export const BlockVolunteerContainer = styled.div`
	width: 100%;
	height: 528px;
	border-radius: 5px;
	display: flex; 
	justify-content: center;
	background: #22CDD3; 
	position: relative;  
	z-index:  1;
	padding: 63px 0px;
	&::before {
		content: "";
    	position: absolute;
    	left: 0;
    	transform: translateX(-50%);
    	bottom: 0;
    	width: 13%;
    	height: 21%;
    	background-color: #FCD11F;
    	clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    	z-index: -1;
	}
	&::after {
		content: "";
    	position: absolute;
    	left: 0;
    	transform: translateX(-50%);
    	bottom: 0;
    	width: 16%;
    	height: 25%;
    	background-color: #CA2D54;
    	clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    	z-index: -2;
	}

`;

export const BlockVolunterWrapper = styled.div`
	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around; 
`;


export const BlockCall = styled.div` 
	position: relative; 
	z-index:  1;
	::before {
		content: "";
    	position: absolute;
    	left: -10%;
    	top: -28%;
    	width: 120%;
    	height: 163%;
    	background-color: #FCD11F;
    	z-index: -1;
	}
	::after {
		content: "";
    	position: absolute;
    	left: -8%;
    	top: 30%;
    	width: 120%;
    	height: 163%;
    	background-color: #CA2D54;
    	z-index: -2;
	}
`;


export const defaultText = styled.p`
	color: #FFF;
	text-align: center;
	font-family: Inter;
	font-size: 46px;
	font-style: normal;
	font-weight: 900;
	line-height: normal;
`;

export const Title = styled(defaultText)` 
	font-size: 46px; 
	background-color:  #00a6b7;
	padding: 4px;

	@media screen and (max-width: ${mobile}){  
    	font-size: 26px;
  	}

	@media screen and (max-width: ${tablet}) and (min-width: ${mobile}){  
    	font-size: 36px;
  	}
`;

export const SubTitle = styled(defaultText)` 
	font-size: 24px; 
	width: 73%;

	@media screen and (max-width: ${mobile}){  
    	font-size: 18px;
  	}

	@media screen and (max-width: ${tablet}) and (min-width: ${mobile}){  
    	font-size: 21px;
  	}
`;

export const BlackSubtitle = styled(defaultText)`
	color: #000 !important;
	font-size: 24px; 

	@media screen and (max-width: ${mobile}){  
    	width: 290px;
    	font-size: 15px;
  	}

	@media screen and (max-width: ${tablet}) and (min-width: ${mobile}){   
		width: 348px;
		font-size: 18px;
  	}

	@media screen and (max-width: 320px){  
    	width: 185px;
    	font-size: 13px;
  	}
	  
	@media screen and (max-width: ${miniLaptop}) and (min-width: ${tablet}){   
		width: 552px;
  	}
`;
