import React from "react"

import {
	AboutUsContainer,
	WrapperAboutUs,
	Header,
	Content,
	TitleAboutUs,
	BlockTitleAboutUs,
	ContainerSmallBlocks,
	WhoWeHelpBlock,
	TitleWhoWeHelp,
	HeaderBlockContainer,
	WrapperContent,
	WhoHelpList,
	WhoHelpLi,
	ContentWhoWeHelp,
	BlockWelcome,
	HowYouCanHelp,
	TitleBlock,
	ContentText,
	HelpingList,
	HelpingLi
} from "./styled"

export default function AboutUs() {
	return (
		<AboutUsContainer>
			<WrapperAboutUs>

				<Header>
					<TitleAboutUs>
						<BlockTitleAboutUs>
							<span></span>
						</BlockTitleAboutUs>
					</TitleAboutUs>
				</Header>
				<Content>
					<WhoWeHelpBlock>
						<HeaderBlockContainer>
							<TitleWhoWeHelp>Kogo wspieramy?</TitleWhoWeHelp>
						</HeaderBlockContainer>
						<WrapperContent>
							<WhoHelpList>
								<WhoHelpLi><ContentWhoWeHelp>Schroniska dla zwierząt: Powszechnie wiadomo, że zwierzęta potrzebują miłości i opieki. Pomagamy schroniskom, dostarczając im wszystko, czego potrzebują - od karmy po środki medyczne</ContentWhoWeHelp></WhoHelpLi>
								<WhoHelpLi><ContentWhoWeHelp>Chore dzieci: Nic nie jest ważniejsze niż zdrowie dzieci. Współpracujemy ze szpitalami i specjalistami, aby dać każdemu dziecku szansę na zdrowe życie.</ContentWhoWeHelp></WhoHelpLi>
								<WhoHelpLi><ContentWhoWeHelp>Ludzie w trudnych okolicznościach życiowych: Każdy z nas może napotkać na problemy. Jesteśmy tutaj, aby wesprzeć i pomóc w najtrudniejszych momentach.</ContentWhoWeHelp></WhoHelpLi>
							</WhoHelpList>
						</WrapperContent>
					</WhoWeHelpBlock>
					<ContainerSmallBlocks>
						<BlockWelcome>
							<HeaderBlockContainer>
								<TitleBlock>Witaj w Helping Hands!</TitleBlock>
							</HeaderBlockContainer>
							<WrapperContent>
								<ContentText>
									Jesteśmy młodym i dynamicznie rozwijającym się funduszem charytatywnym,
									. <br /><br /> Od momentu powstania naszym główym celem
									to pomaganie: schroniskom, chorym dzieciom, ludziom znajdującym się w
									trudnej sytuacji życiowej.
								</ContentText>
							</WrapperContent>
						</BlockWelcome>
						<HowYouCanHelp>
							<HeaderBlockContainer>
								<TitleBlock>Jak możesz pomóc?</TitleBlock>
							</HeaderBlockContainer>
							<WrapperContent>
								<ContentText>
									<HelpingList>
										<HelpingLi>Dokonaj darowizny.</HelpingLi>
										<HelpingLi>Dołącz do naszego zespołu wolontariuszy.</HelpingLi>
										<HelpingLi>Podziel się informacjami o nas w mediach społecznościowych.</HelpingLi>
									</HelpingList>
								</ContentText>
							</WrapperContent>
						</HowYouCanHelp>
					</ContainerSmallBlocks>
				</Content>
			</WrapperAboutUs>
		</AboutUsContainer>
	)
}