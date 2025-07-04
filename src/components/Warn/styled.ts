import styled from "styled-components";

const mobile = "870px";

export const Main = styled.div`
    position: fixed;
    bottom: 2vh;
    left: 50%;
    transform: translateX(-50%);
	display: flex;
	justify-content: center;
	align-items: center;
    padding: 15px;
    background-color: #E71649;
    color: white;
    z-index: 99999;
    font-size: 4vh;
    width: 70%;

    @media screen and (max-width: ${mobile}){  
    	position: absolute;
        font-size: 3vh;
        top: 28vh;
        bottom: auto;
  	}
`;