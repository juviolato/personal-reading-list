import styled from 'styled-components';
import { PRIMARYTEXT, SECONDARYTEXT, MINORDETAILS, MAJORDETAILS, ACCENTSFONT } from '../../constants/color-palette';
import { SECONDARYFONT, ACCENTFONT } from '../../constants/fonts';

export const FanFictionContainer = styled.div`
	box-sizing: border-box;
	text-align: left;

	grid-column-start: ${props => props.columnStart};
	grid-column-end: ${props => props.columnEnd};
	grid-row-start: ${props => props.rowStart};
	grid-row-end: ${props => props.rowEnd};

	border: 1px solid ${MAJORDETAILS};
	background-color: ${MINORDETAILS};


	padding: 1vw 2vw;
	overflow: hidden;

	a {
		font-size: 1.25rem;
	}

	a:hover {
		color: ${ACCENTSFONT};
	}

	p {
		font-family: ${ACCENTFONT};
		font-size: 1.1rem;
		padding: 2.5px;
		color: ${SECONDARYTEXT};
		letter-spacing: 0.1rem;
		font-weight: normal;
	}

	.info {
		text-transform: capitalize;
		padding: 1.5rem 0rem;
	}

	.info p {
		font-family: ${SECONDARYFONT};
		font-size: 1.15rem;
		letter-spacing: 0;
	}

	li {
		padding: 2.5px;
		color: ${PRIMARYTEXT};
	}
`;