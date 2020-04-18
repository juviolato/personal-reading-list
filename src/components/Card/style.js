import styled from 'styled-components';
import { PRIMARYTEXT, SECONDARYTEXT, MINORDETAILS, MAJORDETAILS, ACCENTSFONT, LINKS } from '../../constants/color-palette';
import { ACCENTFONT, SECONDARYFONT, PRIMARYFONT } from '../../constants/fonts';

export const CardContainer = styled.div`
	box-sizing: border-box;
	text-align: left;

	grid-column-start: ${props => props.columnStart};
	grid-column-end: ${props => props.columnEnd};
	grid-row-start: ${props => props.rowStart};
	grid-row-end: ${props => props.rowEnd};

	border: 1px solid ${MAJORDETAILS};
	background-color: ${MINORDETAILS};
	padding: 1vw 2vw;

	h2 {
		font-size: 1.3rem;
		font-family: ${PRIMARYFONT};
		font-weight: bold;
		color: ${PRIMARYTEXT};
		padding: 0.75vw 0vw;
	}

	h3 {
		font-size: 1.1rem;
		font-family: ${PRIMARYFONT};
		color: ${SECONDARYTEXT};
		padding: 0vw 0vw 1vw 0vw;
	}

	p {
		font-size: 1.05rem;
		font-family: ${SECONDARYFONT};
		padding: 0.5rem;
		line-height: 1.45;
		text-align: justify;
	}

	a {
		font-size: 0.9rem;
		font-family: ${ACCENTFONT};
		color: ${ACCENTSFONT};
		font-style: italic;
	}

	a:hover {
		color: ${LINKS}
	}
`;