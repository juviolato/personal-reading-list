import React, { Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { ContentContainer } from './style';

const Template = ({ children }) => (
	<Fragment>
		<Header />
		<div id="top" />
		<ContentContainer>
			{children}
		</ContentContainer>
		<Footer />
	</Fragment>
);

export default Template;