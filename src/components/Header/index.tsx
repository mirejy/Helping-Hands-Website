import React, { useEffect, useRef, useState } from "react";
import { HeaderContainer, Logo, BurgerMenu } from "./styled";
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
				<BurgerMenu open={isMenuOpen} onClick={() => { setMenuOpen(!isMenuOpen) }} /> :
				<NavigationBar />
			}
		</HeaderContainer>
	);
}
