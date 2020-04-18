import styled from 'styled-components';
import { ACCENTS, ACCENTSFONT, MINORDETAILS, MAJORDETAILS, PRIMARYTEXT } from '../../constants/color-palette';
import { PRIMARYFONT } from '../../constants/fonts';

export const FooterContainer = styled.div`
	box-sizing: border-box;
	background-color: ${ACCENTS};
	color: ${ACCENTSFONT};
	box-shadow: 10px ${MINORDETAILS};
	text-align: right;
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	padding: 0.8rem 1rem;

	font-family: ${PRIMARYFONT};

	a {
		text-align: left;
		color: ${ACCENTSFONT};
		text-decoration: none;
		font-weight: bold;
		position: absolute;
		left: 1vw;
		border: 1px solid ${ACCENTSFONT};
		padding: 7px;
		border-radius: 5px;
	}

	a:hover {
		background-color: ${ACCENTSFONT};
		color: ${PRIMARYTEXT};
		border-color: ${PRIMARYTEXT};
	}

	div {
		display: inline-block;
	}

	button {
		background-color: ${ACCENTSFONT};
		color: ${ACCENTS};
		border-radius: 5px;
		border-color: ${MAJORDETAILS};
		text-align: center;
		padding: 5px;
		margin-left: 5px;
	}

	button:hover {
		cursor: pointer;
		background-color: ${MINORDETAILS};
		border-color: ${PRIMARYTEXT};
		color: ${PRIMARYTEXT};
	}
`;