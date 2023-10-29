import AnchorLink from "../AnchorLink"
import { GeneralSectionContainer, BlockText, Title, SubTitle, Button, ContainerContent } from "./styled"

export default function GeneralSection() {
	return (
		<GeneralSectionContainer>
			<ContainerContent>
				<BlockText>
					<Title>FUNDACJA “HELPING HANDS”</Title>
					<SubTitle>Pomagamy wszystkim</SubTitle>
				</BlockText>
				<AnchorLink targetId="NeedHelp"><Button>Potrzebujesz pomocy?</Button></AnchorLink>
			</ContainerContent>
		</GeneralSectionContainer>
	)
}