import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
	${reset}
	
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap');
`;