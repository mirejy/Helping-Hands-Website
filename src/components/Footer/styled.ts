import styled from "styled-components"; 
import {ReactComponent as Facebook} from "../../static/icon/facebook-icon.svg"
import {ReactComponent as Instagram} from "../../static/icon/instagram-icon.svg"

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
	text-align: center;
	font-family: Inter; 
	font-style: normal;
	font-weight: 900;
	line-height: normal;
`;

export const Title = styled(defaultText)` 
	color: #2F2F2F !important; 
	font-size: 35px; 
`;
 
 
export const SubTitle = styled(defaultText)` 
	color: #2F2F2F !important; 
	font-size: 23px;   
`;
 