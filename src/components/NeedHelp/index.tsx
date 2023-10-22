import { useState } from "react"
import {
	NeedHelpContainer,
	TitleAboutUs,
	BlockTitleAboutUs,
	BlockSubtitle,
	SubTitle,
	AccordionContainer,
	AccordionBlock,
	AccordionElement,
	AccordionHeader,
	AccordionContent,
	ArrowDownIcon
} from "./styled"

export default function NeedHelp() {
	const [accordion, setAccordion] = useState("Accordion1")
	return (
		<NeedHelpContainer>
			<TitleAboutUs>
				<BlockTitleAboutUs>
					<span></span>
				</BlockTitleAboutUs>
			</TitleAboutUs>
			<BlockSubtitle>
				<SubTitle>Jeśli ty lub ktoś z twoich bliskich potrzebuje wsparcia, nasza fundacja charytatywna jest gotowa pomóc</SubTitle>
			</BlockSubtitle>
			<AccordionContainer>
				<AccordionBlock>
					<AccordionElement>
						<AccordionHeader onClick={() => { setAccordion("Accordion1") }}>
							Nowoczesne metody pomocy:
							<ArrowDownIcon accordion={accordion === "Accordion1"} />
						</AccordionHeader>
						<AccordionContent accordion={accordion === "Accordion1"}>Każda osoba zwracająca się do nas otrzymuje specjalną uwagę. Nasi specjaliści są gotowi opracować indywidualny plan wsparcia.</AccordionContent>
					</AccordionElement>
					<AccordionElement>
						<AccordionHeader onClick={() => { setAccordion("Accordion2") }}>
							Nowoczesne metody pomocy:
							<ArrowDownIcon accordion={accordion === "Accordion2"} />
						</AccordionHeader>
						<AccordionContent accordion={accordion === "Accordion2"}>Każda osoba zwracająca się do nas otrzymuje specjalną uwagę. Nasi specjaliści są gotowi opracować indywidualny plan wsparcia.</AccordionContent>
					</AccordionElement>
					<AccordionElement>
						<AccordionHeader onClick={() => { setAccordion("Accordion3") }}>
							Nowoczesne metody pomocy:
							<ArrowDownIcon accordion={accordion === "Accordion3"} />
						</AccordionHeader>
						<AccordionContent accordion={accordion === "Accordion3"}>Każda osoba zwracająca się do nas otrzymuje specjalną uwagę. Nasi specjaliści są gotowi opracować indywidualny plan wsparcia.</AccordionContent>
					</AccordionElement>
					<AccordionElement>
						<AccordionHeader onClick={() => { setAccordion("Accordion4") }}>
							Nowoczesne metody pomocy:
							<ArrowDownIcon accordion={accordion === "Accordion4"} />
						</AccordionHeader>
						<AccordionContent accordion={accordion === "Accordion4"}>Każda osoba zwracająca się do nas otrzymuje specjalną uwagę. Nasi specjaliści są gotowi opracować indywidualny plan wsparcia.</AccordionContent>
					</AccordionElement>
					<AccordionElement>
						<AccordionHeader onClick={() => { setAccordion("Accordion5") }}>
							Nowoczesne metody pomocy:
							<ArrowDownIcon accordion={accordion === "Accordion5"} />
						</AccordionHeader>
						<AccordionContent accordion={accordion === "Accordion5"}>Każda osoba zwracająca się do nas otrzymuje specjalną uwagę. Nasi specjaliści są gotowi opracować indywidualny plan wsparcia.</AccordionContent>
					</AccordionElement>
				</AccordionBlock>
			</AccordionContainer>
		</NeedHelpContainer>
	)
}