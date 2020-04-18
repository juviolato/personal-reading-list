import React from 'react';
import { connect } from 'react-redux';
import { FooterContainer } from './style';
import { toggleSafetyMode } from '../../actions/safety';
import Store from '../../reducers/store';

class Footer extends React.Component {
	state = { buttonText: "" };

	componentDidMount = () => {
		this.setState({ 
			buttonText: Store.getState().Safety.safetyModeIsOn ? "ON" : "OFF"
		});
	};

	onSafetyButtonClick() {
		var safetyIsOn = Store.getState().Safety.safetyModeIsOn;
		if (safetyIsOn) {
			var actionConfirmed = window.confirm("This will disable safety mode, allowing potentially not safe for work content to be displayed. Are you sure you want to proceed?");
			if (actionConfirmed) {
				this.handleToggleSafety();
			}
		} else {
			this.handleToggleSafety();
		}
	};

	handleToggleSafety() {
		this.props.toggleSafetyMode();
		this.setState({
			buttonText: (Store.getState().Safety.safetyModeIsOn === true) ? "ON" : "OFF"
		});
	};

	render() {
		return(
			<FooterContainer>
				<a href="#top">TOP</a>
				<div>by Ju Violato | Safety mode: <button onClick={this.onSafetyButtonClick.bind(this)}>{this.state.buttonText}</button></div>
			</FooterContainer>
		);
	};
};

const mapDispatchToProps = dispatch => {
	return {
		toggleSafetyMode: () => dispatch(toggleSafetyMode())
	}
}

export default connect(
	null,
	mapDispatchToProps
)(Footer);
