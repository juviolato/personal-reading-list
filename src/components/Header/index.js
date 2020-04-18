import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './style';

const Header = () => (
	<HeaderContainer>
		<Link to={`/`}>home</Link>
		<Link to={`/fanfiction`}>fanfiction</Link>
		<Link to={`/books`}>books</Link>
		<Link to={`/webtoons`}>webtoons</Link>
	</HeaderContainer>
);

export default Header;