import { GeneralSectionContainer, BlockText, Title, SubTitle, Button, ContainerContent } from "./styled"

export default function GeneralSection() {
	return (
		<GeneralSectionContainer>
			<ContainerContent>
				<BlockText>
					<Title>FUNDACJA “HELPING HANDS”</Title>
					<SubTitle>Pomagamy wszystkim</SubTitle>
				</BlockText>
				<Button>CZYTAJ  WIĘCEJ</Button>
			</ContainerContent>
		</GeneralSectionContainer>
	)
}