import {
	BlockFooterContainer,
	BlockFooterWrapper,
	Title,
	SubTitle,
	BlockInformation,
	List,
	SocialMedia,
	FacebookIcon,
	InstagramIcon
} from "./styled"

export default function Footer() {
	return (
		<BlockFooterContainer>
			<BlockFooterWrapper>
				<BlockInformation>
					<Title>Informacje rejestrowe</Title>
					<List>
						<SubTitle>
							KRS: 0001043708
						</SubTitle>
						<SubTitle>
							REGON: 52566344100000
						</SubTitle>
						<SubTitle>
							NIP: 7831883023
						</SubTitle>
					</List>
				</BlockInformation>
				<BlockInformation>
					<Title>Kontakt</Title>
					<List>
						<SubTitle>
							ul. 27 Grudnia 61-737
						</SubTitle>
						<SubTitle>
							tel.  730-072-713
						</SubTitle>
						<SubTitle>
							fundacja.helpinghands@gmail.com
						</SubTitle>
					</List>
				</BlockInformation>
			</BlockFooterWrapper>
			<SocialMedia>
				<FacebookIcon />
				<a href="https://www.instagram.com/fundacja_helpinghands/">
					<InstagramIcon />
				</a>
			</SocialMedia>
		</BlockFooterContainer>
	)
}