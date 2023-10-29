import styled from "styled-components";

export const HeaderContainer = styled.div`
	width: 100%;
	height: 74px;
	background-color: #E71649;
	position: relative;
	z-index: 99;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30px;

	@media screen and (max-width: 425px){ 
	 	padding: 0 20px; 
		height: 53px;
	}

&::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 43.2%;
	height: 100%;
	background-color: #02C6CC;
	z-index: -1;
	clip-path: polygon(0 0, 90% 0, 100% 100%, 0 100%);
}
&::after {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	width: 46.2%;
	height: 100%;
	background-color: #FCD11F;
	z-index: -1;
	clip-path: polygon(0% 0, 100% 0, 100% 100%, 10% 100%);
}
`;

export const Logo = styled.p`
	font-size: 24px;
	font-family: 'Inter';
	color: #FFFFFF; 
	
	@media screen and (max-width: 600px){ 
		width: 100px; 
	}

	@media screen and (max-width: 425px){  
		font-size: 20px;
	}
`;

export const BurgerWrapper = styled.div<{ open: boolean }>`
	width: 30px;
	height: 20px;
	position: relative;
	cursor: pointer; 
	transition: all 0.3s;
	top: ${({ open }) =>
	    open ? '8px' : 'none'};
	left: ${({ open }) =>
	    open ? '8px' : 'none'};
`;

export const MenuLinks = styled.div<{ open: boolean }>`
	width: 100%; 
	display: flex;
	opacity: ${({ open }) =>
	    open ? '1' : '0'};
	position: absolute;
	background: #fcd11f;
	left: 0;
	justify-content: center;
	align-items: center;
	top: 74px; 
	transition: all 0.2s;	

	@media screen and (max-width: 425px){  
		top: 53px;
	}

	min-height: ${({ open }) =>
	    open ? '186px' : '0px'};
	height: ${({ open }) =>
	    open ? 'max-content' : '0px'};
`;

export const Line = styled.div<{ open: boolean }>`
	width: 100%;
	height: 3px;
	background-color: #000;
	position: absolute;
	left: 0;
	transition: all 0.3s;	

	&:nth-child(1) {
	  top: ${({ open }) =>
	    open ? '-16px' : '0px'};
	  transform: ${({ open }) =>
	    open ? 'rotate(45deg) translateY(10px)' : 'none'};
	  transform-origin: left center;
	}	

	&:nth-child(2) {
	  top: 50%;
	  transform: translateY(-50%);
	  opacity: ${({ open }) => (open ? '0' : '1')};
	}	

	&:nth-child(3) {
	  bottom: ${({ open }) =>
	    open ? '-2px' : '0px'};
	  transform: ${({ open }) =>
	    open ? 'rotate(-45deg) translateY(-10px)' : 'none'};
	  transform-origin: left center;
	}
`;