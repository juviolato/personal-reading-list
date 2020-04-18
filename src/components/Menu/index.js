import React, { Fragment } from 'react';
import Tile from '../Tile';

const Menu = ({ title, routes, tileWidth, tileHeight }) => (
	<div className="menu">
		<h1>{title}</h1>
		<Fragment>
			{routes.map(({ displayName, to, description }) => (
				<Tile key={to} title={displayName} link={to} content={description} width={tileWidth} height={tileHeight} />
			))}	
		</Fragment>
	</div>
);

Menu.defaultProps = { title: "", routes: [], tileWidth: "auto", tileHeight: "auto" };
export default Menu;