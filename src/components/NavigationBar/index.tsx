import AnchorLink from "../AnchorLink";
import { NavContainer, Links, UlNavigation } from "./styled"
interface Props {
	open: boolean;
}

export default function NavigationBar({ open }: Props) {

	return (
		<NavContainer>
			<UlNavigation open={open}>
				<li><AnchorLink targetId="AboutUs"><Links>O nas</Links></AnchorLink></li>
				<li><Links href="https://drive.google.com/file/d/1qoyyUGQug0ktf21NSSBS_i4UUOznFY5M/view?usp=sharing" target="_blank">Statut</Links></li>
				<li><AnchorLink targetId="Contacts"><Links>Kontakty</Links></AnchorLink></li>
			</UlNavigation>
		</NavContainer>
	)
}