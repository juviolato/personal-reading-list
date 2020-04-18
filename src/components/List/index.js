import React from 'react';
import { connect } from 'react-redux';
import * as listAPI from '../../services/list';
import Card from '../Card';
import { ListContainer } from './style';
import { sortByTitle } from '../../utils/utils';
import { setListLoading } from '../../actions/loader';

class List extends React.Component {
	state = {
		collection: this.props.collection,
		list: []
	};

	componentDidMount = async () => {
		this.props.showLoader();
		listAPI.listByCollection(this.state.collection, this.onListSuccess.bind(this), this.onAPIFail.bind(this));
	};

	onListSuccess = (data) => {
		this.setState({ list: data.sort(sortByTitle) }, () => {
			this.props.hideLoader();
		});
	};

	onAPIFail = (error) => {
		console.log(error);
		this.props.hideLoader();
	}

	list = () => this.state.list.map(function (value, i) {
		return(
			<Card
				key={i}
				title={value.title}
				subtitle={value.author}
				synopsis={value.synopsis}
				genre={value.tags.join(", ")}
				rating={value.rating}
				link={value.goodreads}
				columnStart={i%2 + 1} columnEnd={i%2 + 2}
				rowStart={Math.floor(i/2) + 1} rowEnd={Math.floor(i/2) + 2}
			/>
		);
	});

	render() {
		return(
			<ListContainer>
				<h1>{this.state.collection}</h1><div className="grid">{this.list()}</div>
			</ListContainer>
		);
	};
};

const mapDispatchToProps = dispatch => {
	return {
		showLoader: () => dispatch(setListLoading(true)),
		hideLoader: () => dispatch(setListLoading(false))
	};
};

export default connect(
	null,
	mapDispatchToProps
)(List);