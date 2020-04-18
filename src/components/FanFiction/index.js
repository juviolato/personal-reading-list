import React from 'react';
import { FanFictionContainer } from './style';

const FanFiction = ({ title, author, pairings, tags, wordcount, rating, link }) => (
	<FanFictionContainer width="40rem">
		<a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
		<p>by {author}</p>
		<p>{pairings.join(" & ")}</p>
		<div className="info">
			<p>{tags.sort().join(", ")}</p>
			<p>words: {wordcount}</p>
			<p>rating: {rating}</p>
		</div>
	</FanFictionContainer>
);

export default FanFiction;