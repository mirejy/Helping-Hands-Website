import React, { useCallback } from 'react';
import styled from 'styled-components';

const Link = styled.a`
  cursor: pointer; 
  text-decoration: none;
`;

interface AnchorLinkProps {
	targetId: string;
	children: React.ReactNode;
}

const AnchorLink: React.FC<AnchorLinkProps> = ({ targetId, children }) => {
	const handleClick = useCallback((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		event.preventDefault();

		const targetElement = document.getElementById(targetId);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	}, [targetId]);

	return (
		<Link onClick={handleClick} href={`#${targetId}`}>
			{children}
		</Link>
	);
};

export default AnchorLink;
