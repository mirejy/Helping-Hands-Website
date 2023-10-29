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
  
export const BurgerMenu = styled.div<{ open: boolean }>`
	width: 26px;
	height: 3px;
	background-color: ${({ open }) => (open ? 'transparent' : '#333')};
	position: relative;
	transition: background-color 0.3s;

	::before,
	::after {
	  content: '';
	  position: absolute;
	  width: 100%;
	  height: 3px;
	  background-color: #333;
	  transition: transform 0.3s;
	}

	::before { 
	  top: ${({ open }) => (open ? '0' : '-8px')};
	  transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
	}

	::after {
	  bottom: ${({ open }) => (open ? '0' : '-8px')};
	  transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
	}
`; 