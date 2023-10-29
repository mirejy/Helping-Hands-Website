import styled from "styled-components";

const tablet = "1000px";

export const NavContainer = styled.div` 
	height: 100%;  
	display: flex;
	align-items: center;
	width: 38%;
`

export const Links = styled.a`
	font-size: 24px;
	color: #3A3A3A; 
	text-decoration: none;
	&:hover {
		cursor: pointer;
		opacity: 0.6;
	}
	@media screen and (max-width: ${tablet}){ 
		font-size: 20px;
	}
`

export const UlNavigation = styled.ul<{open: boolean}>` 
	display: flex;
	gap: 5%;
	width: 100%;
	justify-content: space-around;
	list-style-type: none;
	padding-left: 0;

	${({ open }) =>
	    open ? 
		`
		flex-direction: column;
		gap: 27px;
		align-items: center;
		` : ''};
	
`