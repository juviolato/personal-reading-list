import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as categoryAPI from '../../services/category';
import * as fanFictionAPI from '../../services/fanfiction';
import FanFiction from '../FanFiction';
import Store from '../../reducers/store';
import { FanFictionListContainer } from './style';
import { sortByTitle } from '../../utils/utils';
import { setListLoading } from '../../actions/loader';

class FanFictionList extends React.Component {
	state = { 
		categoryName: this.props.category,
		categoryId: this.props.category,
		works: []
	};

	componentDidMount = async () => {
		this.props.showLoader();
		categoryAPI.idByName(this.state.categoryName, this.onCategoryIdSuccess.bind(this), this.onAPIFail.bind(this));
	};

	onCategoryIdSuccess = (data) => {
		this.setState({ categoryId: data });
		var safetyIsOn = Store.getState().Safety.safetyModeIsOn;
		if (safetyIsOn) {
			fanFictionAPI.listByCategory(this.state.categoryId, this.onFanFictionListSuccess.bind(this), this.onAPIFail.bind(this));
		} else {
			fanFictionAPI.listByCategoryUnsafe(this.state.categoryId, this.onFanFictionListSuccess.bind(this), this.onAPIFail.bind(this));
		}
	};

	onFanFictionListSuccess = (data) => {
		this.setState({ works: data.sort(sortByTitle) }, () => {
			this.props.hideLoader();
		});
	}

	onAPIFail = (error) => {
		console.log(error);
		this.props.hideLoader();
	}

	listWorks = () => this.state.works.map(function (value, i) {
		return(
			<FanFiction
				key={value.link} {...value}
				columnStart={i%2 + 1} columnEnd={i%2 + 2}
				rowStart={Math.floor(i/2) + 1} rowEnd={Math.floor(i/2) + 2}
			/>
		)
	});

	render() {
		return(
			<Fragment>
				<h1><Link to='/fanfiction' replace>FanFiction</Link>| {this.state.categoryName}</h1>
				<FanFictionListContainer>
					<div className="grid">{this.listWorks()}</div>
				</FanFictionListContainer>
			</Fragment>
		);
	};
};

const mapDispathToProps = dispatch => {
	return {
		showLoader: () => dispatch(setListLoading(true)),
		hideLoader: () => dispatch(setListLoading(false))
	};
};

export default connect(
	null,
	mapDispathToProps
)(FanFictionList);