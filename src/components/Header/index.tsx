import React, { useEffect, useRef, useState } from "react";
import { HeaderContainer, Logo, BurgerWrapper, Line, MenuLinks } from "./styled";
import NavigationBar from "../NavigationBar";

export default function Header() {
	const [matchesTable, setMatchesTable] = useState(false);
	const refHeader = useRef<HTMLDivElement | null>(null);
	const [isMenuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const updateMatchesTable = () => {
			if (refHeader.current) {
				const width = refHeader.current.offsetWidth;
				const breakpoint = 800;

				setMatchesTable(width <= breakpoint);
			}
		}

		updateMatchesTable();

		window.addEventListener('resize', updateMatchesTable);

		return () => {
			window.removeEventListener('resize', updateMatchesTable);
		};
	}, []);

	return (
		<HeaderContainer ref={refHeader}>
			<Logo>Helping Hands</Logo>
			{matchesTable ?
				<>
					<BurgerWrapper open={isMenuOpen} onClick={() => setMenuOpen(!isMenuOpen)}>
						<Line open={isMenuOpen} />
						<Line open={isMenuOpen} />
						<Line open={isMenuOpen} />
					</BurgerWrapper>
					<MenuLinks open={isMenuOpen}>
						<NavigationBar open={isMenuOpen} />
					</MenuLinks>
				</> :
				<NavigationBar open={isMenuOpen} />
			}
		</HeaderContainer>
	);
}
