import React from 'react';
import { Link } from 'react-router-dom';
import { TileContainer } from './style';

const Tile = ({ title, link, content, width, height }) => (
	<Link to={link}>
		<TileContainer width={width} height={height}>
			<h2>{title}</h2>
			<p>{content}</p>
		</TileContainer>
	</Link>
);

Tile.defaultProps = { title: "", link: "", content: "", width: "auto", height: "auto" };
export default Tile;