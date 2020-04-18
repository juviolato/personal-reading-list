import React from 'react';
import { connect } from 'react-redux';
import * as categoryAPI from '../../services/category';
import Menu from '../Menu';
import { setMenuLoading } from '../../actions/loader';

class FanFictionMenu extends React.Component {
	state = { categories: [] };

	componentDidMount = async () => {
		this.props.showLoader();
		categoryAPI.list(this.onCategorySuccess.bind(this), this.onAPIFail.bind(this));
	};

	onCategorySuccess = (data) => {
		this.setState( { categories: data.sort((a, b) => {
			return (a.name < b.name ? -1 : (a.name > b.name ? 1 : 0));
		})}, () => {
			this.props.hideLoader();
		});
	};

	onAPIFail = (error) => {
		console.log(error);
		this.props.hideLoader();
	};

	listCategories = () => this.state.categories.map(function (value) {
		return {
			displayName: value.name,
			to: `/fanfiction/${value.name}`,
			description: value.type
		};
	});

	render() {
		return(
			<Menu
				title="FanFiction Categories"
				routes={this.listCategories()}
				tileWidth="25rem"
			/>
		);
	};
};

const mapDispatchToProps = dispatch => {
	return {
		showLoader: () => dispatch(setMenuLoading(true)),
		hideLoader: () => dispatch(setMenuLoading(false))
	};
};

export default connect(
	null,
	mapDispatchToProps 
)(FanFictionMenu);