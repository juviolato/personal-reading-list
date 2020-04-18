import styled from 'styled-components';
import { LINKS, MINORDETAILS, MAJORDETAILS, BACKGROUND, PRIMARYTEXT, SECONDARYTEXT } from '../../constants/color-palette';
import { PRIMARYFONT, SECONDARYFONT, ACCENTFONT } from '../../constants/fonts';

export const ContentContainer = styled.div`
	box-sizing: border-box;
	font-family: ${SECONDARYFONT};
	background-color: ${BACKGROUND};
	color: ${PRIMARYTEXT};
	box-shadow: 10px ${MINORDETAILS};
	position: relative; 
	display: block;
	top: 2.5rem;
	width: 100%;
	min-height: 95vh;
	padding: 2vw;

	h1 {
		font-size: 2.25rem;
		text-transform: uppercase;
		font-weight: bold;
		font-family: ${PRIMARYFONT};
		letter-spacing: 0.2rem;
		margin: 5vh 0vw 10vh 0vw;
	}

	h2 {
		color: ${PRIMARYTEXT};
		font-size: 1.2rem;
	}

	ul {
		margin: 1vw 0.5vw;
		padding: 1vw 0.5vw;
	}

	a {
		font-family: ${PRIMARYFONT};
		font-size: 1.05rem;
		font-weight: bold;
		color: ${LINKS};
		text-decoration: none;
		line-height: 1.5;
		letter-spacing: 0.1rem;
	}

	a:hover {
		color: ${MAJORDETAILS};
	}

	a:hover h2 {
		color: ${SECONDARYTEXT};
	}

	p {
		font-family: ${ACCENTFONT};
		color: ${SECONDARYTEXT};
		padding: 1vw 0vw;
	}

	.menu {
		text-align: center;
	}

	.grid {
		display: inline-grid;
		text-align: center;
		grid-template-columns: 40vw 40vw;
		grid-column-gap: 2.5vw;
		grid-row-gap: 5vh;
		margin-bottom: 10vh;
	}
`;