import { BlockVolunteerContainer, BlockVolunterWrapper, Title, SubTitle, BlockCall, BlackSubtitle } from "./styled"

export default function BlockVolunteer() {
	return (
		<BlockVolunteerContainer>
			<BlockVolunterWrapper>
				<Title>Chcesz uczynić świat lepszym miejscem?</Title>
				<SubTitle>Jeśli masz gorące pragnienie pomagania ludziom i zwierzętom, jesteś tym, kogo szukamy! Dołącz do naszego zespołu wolontariuszy i przyczyniaj się do dobroczynności.</SubTitle>
				<BlockCall>
					<BlackSubtitle>
						📞 Zadzwoń pod numer:  730-072-713 i stań się częścią wielkiej sprawy!
					</BlackSubtitle>
				</BlockCall>
			</BlockVolunterWrapper>
		</BlockVolunteerContainer>
	)
}