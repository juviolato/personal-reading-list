import React from 'react';
import { CardContainer } from './style';

const Card = ({ title, subtitle, synopsis, genre, rating, link }) => (
	<CardContainer>
		<h2>{title}</h2>
		<h3>{subtitle}</h3>
		<p>{synopsis}</p>
		<p>Themes / Genre: {genre}</p>
		<p>Rating: {rating}</p>
		<a href={link} target="_blank" rel="noopener noreferrer">(More on goodreads)</a>
	</CardContainer>
);

Card.defaultProps = { 
	title: "",
	subtitle: "",
	synopsis: "",
	genre: "",
	rating: "Not rated"
};
export default Card;