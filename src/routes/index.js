import React, { Fragment } from 'react';
import { Route } from 'react-router';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../components/Home';
import { FANFICTIONMENU, BOOKS, WEBTOONS } from '../constants/routes';
import Template from '../components/Template/index';
import FanFictionMenu from '../components/FanFictionMenu';
import FanFictionList from '../components/FanFictionList';
import List from '../components/List';
import Loader from '../components/Loader';

const Routes = ({ isLoading }) => (
	<Fragment>
		{isLoading && <Loader />}
		<Template>
			<Route exact path="/" component={Home} />
			<Route exact path={FANFICTIONMENU} component={FanFictionMenu} />
			<Route exact path={BOOKS} render={(props) => <List {...props} collection="books" />} />
			<Route exact path={WEBTOONS} render={(props) => <List {...props} collection="webtoons" />} />
			<Route exact path={`${FANFICTIONMENU}/:category`} component={FanFictionCategory}/>
		</Template>
	</Fragment>
);

function FanFictionCategory () {
	let { category } = useParams();
	return <FanFictionList category={category} />;
}

const mapStateToProps = state => ({
	isLoading: state.Loader.isLoading
});

export default connect(mapStateToProps)(Routes);