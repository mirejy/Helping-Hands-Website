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
`