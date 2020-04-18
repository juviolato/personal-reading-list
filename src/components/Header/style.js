import styled from 'styled-components';
import { ACCENTS, ACCENTSFONT, MINORDETAILS, MAJORDETAILS } from '../../constants/color-palette';
import { PRIMARYFONT } from '../../constants/fonts';

export const HeaderContainer = styled.div`
	background-color: ${ACCENTS};
	color: ${ACCENTSFONT};
	padding: 0.8rem 1rem;
	box-shadow: 10px ${MINORDETAILS};
	position: fixed; 
	left: 0;
	top: 0;
	width: 100%;
	text-transform: uppercase;
	z-index: 99;

	a {
		font-family: ${PRIMARYFONT};
		font-weight: bold;
		font-size: 1.3rem;
		color: ${ACCENTSFONT};
		text-decoration: none;
		margin-right: 5vh;
	}

	a:hover {
		color: ${MAJORDETAILS};
	}
`;