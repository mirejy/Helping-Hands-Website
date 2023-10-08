import { NavContainer, Links, UlNavigation } from "./styled"

export default function NavigationBar() {
	return (
		<NavContainer>
			<UlNavigation>
				<li><Links>O nas</Links></li>
				<li><Links>Statut</Links></li>
				<li><Links>Kontakty</Links></li>
			</UlNavigation>
		</NavContainer>
	)
}