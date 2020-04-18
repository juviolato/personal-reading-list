import React, { Fragment } from 'react';
import Menu from '../Menu';
import { FANFICTIONMENU, BOOKS, WEBTOONS } from '../../constants/routes.js';

const Home = () => (
	<Fragment>
		<Menu
			title="personal reading list"
			routes={[
				{ displayName : 'FanFiction', to: FANFICTIONMENU, description: "Recommended fan-written works hosted on OTW's Archive of Our Own. Categorized by fandom." },
				{ displayName : 'Books', to: BOOKS, description: "Recommended books." },
				{ displayName : 'Webtoons', to: WEBTOONS, description: "Recommended webtoons." }
			]}
			tileWidth="75vw"
		/>
	</Fragment>
);

export default Home;