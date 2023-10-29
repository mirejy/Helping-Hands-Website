import {
	BlockMissionContainer,
	BlockMissionWrapper,
	Title,
	SubTitle,
	BlockFounderImage,
	BlockText,
	ImageFounder,
	FounderText,
	NameText,
	BlockTitleFounder
} from "./styled"

export default function Mission() {
	return (
		<BlockMissionContainer>
			<BlockMissionWrapper>
				<BlockFounderImage>
					<ImageFounder />
					<BlockTitleFounder>
						<FounderText>Prezes fundacji</FounderText>
						<NameText>Vasyl Budenko</NameText>
					</BlockTitleFounder>
				</BlockFounderImage>
				<BlockText>
					<Title>Misja</Title>
					<SubTitle>Jesteśmy tam, gdzie potrzebują pomocy. Naszą misją jest wsparcie ludzi
						i zwierząt w walce z chorobami i trudnymi okolicznościami życiowymi.
					</SubTitle>
				</BlockText>
			</BlockMissionWrapper>
		</BlockMissionContainer>
	)
}