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
			<BlockTitleAboutUs>
				<TitleAboutUs>Potrzebujesz pomocy?</TitleAboutUs>
			</BlockTitleAboutUs>
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
						<AccordionContent accordion={accordion === "Accordion1"}>Używamy innowacyjnych podejść i technologii, aby skutecznie pomagać.</AccordionContent>
					</AccordionElement>
					<AccordionElement>
						<AccordionHeader onClick={() => { setAccordion("Accordion2") }}>
							Indywidualne podejście:
							<ArrowDownIcon accordion={accordion === "Accordion2"} />
						</AccordionHeader>
						<AccordionContent accordion={accordion === "Accordion2"}>Każda osoba zwracająca się do nas otrzymuje specjalną uwagę. Nasi specjaliści są gotowi opracować indywidualny plan wsparcia.</AccordionContent>
					</AccordionElement>
					<AccordionElement>
						<AccordionHeader onClick={() => { setAccordion("Accordion3") }}>
							Organizujemy zbiórki na terenie całej Polski:
							<ArrowDownIcon accordion={accordion === "Accordion3"} />
						</AccordionHeader>
						<AccordionContent accordion={accordion === "Accordion3"}>Twój apel o pomoc usłyszy tysiące ludzi.</AccordionContent>
					</AccordionElement>
					<AccordionElement>
						<AccordionHeader onClick={() => { setAccordion("Accordion4") }}>
							Doświadczeni wolontariusze:
							<ArrowDownIcon accordion={accordion === "Accordion4"} />
						</AccordionHeader>
						<AccordionContent accordion={accordion === "Accordion4"}>Nasz zespół składa się z zmotywowanych i oddanych swojej pracy ludzi.</AccordionContent>
					</AccordionElement>
					<AccordionElement>
						<AccordionHeader onClick={() => { setAccordion("Accordion5") }}>
							Łatwość komunikacji:
							<ArrowDownIcon accordion={accordion === "Accordion5"} />
						</AccordionHeader>
						<AccordionContent accordion={accordion === "Accordion5"}>Jesteśmy zawsze dostępni! Po prostu zadzwoń do nas</AccordionContent>
					</AccordionElement>
				</AccordionBlock>
			</AccordionContainer>
		</NeedHelpContainer>
	)
}