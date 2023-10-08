import React from "react"

import { HeaderContainer, Logo } from "./styled"
import NavigationBar from "../NavigationBar"

export default function Header() {
	return (
		<HeaderContainer>
			<Logo>Helping Hands</Logo>
			<NavigationBar />
		</HeaderContainer>
	)
}