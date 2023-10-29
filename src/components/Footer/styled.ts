import styled from "styled-components"; 
import {ReactComponent as Facebook} from "../../static/icon/facebook-icon.svg"
import {ReactComponent as Instagram} from "../../static/icon/instagram-icon.svg"
 
const mobileMini = "389px";
const mobile = "440px";
const tablet = "860px";

export const InstagramIcon = styled(Instagram)`
	min-width: 56px;
	min-height: 56px;
`;

export const FacebookIcon = styled(Facebook)`
	min-width: 56px;
	min-height: 56px;
`;

export const SocialMedia = styled.div`
	position: absolute;
    bottom: 28px;
    right: 56px;
    display: flex;
    align-items: center;
    width: 142px;
    height: max-content;
    justify-content: space-between;
    gap: 9%;

    @media screen and (max-width: ${mobile}){ 
        right: 0 !important;;
    }
`; 

export const BlockFooterContainer = styled.div`
	width: 100%;
    height: 484px;
    border-radius: 5px;
    display: flex;
    justify-content: start;
    align-items: start;
    background: #FCD11F;
    position: relative;
    z-index: 1;
    padding: 63px 22px;
    margin-top: 70px; 

    @media screen and (max-width: ${tablet}){ 
        height: 784px;
    }

	&::before {
		content: "";
        position: absolute;
        left: 0;
        transform: translateX(-50%);
        bottom: 0;
        width: 154%;
        height: 21%;
        background-color: #CA2D54;
        clip-path: polygon(39% 0%, 0% 100%, 100% 100%);
        z-index: -1;
    } 

	&::after {
		content: "";
        position: absolute;
        right: 0;
        transform: translateX(50%) rotate(180deg);
        top: 0;
        width: 25%;
        height: 23%;
        background-color: #02c6cc;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        z-index: -2;
	}

`;

export const BlockFooterWrapper = styled.div`
	display: flex;
    align-items: center;
    width: 100%;
    height: 75%;
    justify-content: center;
    gap: 9%;

    @media screen and (max-width: ${tablet}){ 
        flex-direction: column;
        align-items: start;
        gap: 20%;
    }
`;  

export const List = styled.div` 
	display: flex;
    flex-direction: column;
    align-items: start;
    gap: 26px; 
`;

export const BlockInformation = styled.div` 
	display: flex;
    flex-direction: column;
    align-items: start;
    gap: 36px; 
`;

export const defaultText = styled.p`
	color: #222; 
	font-family: Inter; 
	font-style: normal;
	font-weight: 900;
	line-height: normal;
`;

export const Title = styled(defaultText)` 
	color: #2F2F2F !important; 
	font-size: 35px; 

    @media screen and (max-width: ${mobileMini}){ 
     font-size: 30px; 
    }
`;
 
 
export const SubTitle = styled(defaultText)` 
	color: #2F2F2F !important; 
	font-size: 23px;  

    @media screen and (max-width: ${mobileMini}){ 
     font-size: 15px; 
    } 
    @media screen and (max-width: ${mobile}) and (min-width: ${mobileMini}){ 
     font-size: 20px; 
    } 
`;
 