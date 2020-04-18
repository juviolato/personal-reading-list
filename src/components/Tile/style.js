import styled from 'styled-components';
import { MAJORDETAILS, MINORDETAILS, ACCENTS } from '../../constants/color-palette';

export const TileContainer = styled.div`
	box-sizing: border-box;
	text-align: left;
	background-color: ${MAJORDETAILS};
	display: inline-block;
	position: relative;
	width: ${props => props.width};
	height: auto;
	min-height: ${props => props.height};
	padding: 1vw 2vw;
	margin: 0vw 2vw 5vh 2vw;
	border: 1px solid ${ACCENTS};
	border-radius: 8px;

	:hover {
		background-color: ${MINORDETAILS};
	}

	h2 {
		text-transform: capitalize;
	}
`;