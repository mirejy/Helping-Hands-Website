import React, { useEffect, useRef, useState } from "react";
import { HeaderContainer, Logo, BurgerMenu, BurgerLine } from "./styled";
import NavigationBar from "../NavigationBar";

export default function Header() {
	const [matchesTable, setMatchesTable] = useState(false);
	const refHeader = useRef<HTMLDivElement | null>(null);

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
				<BurgerMenu>
					<BurgerLine></BurgerLine>
					<BurgerLine></BurgerLine>
					<BurgerLine></BurgerLine>
				</BurgerMenu> :
				<NavigationBar />
			}
		</HeaderContainer>
	);
}
