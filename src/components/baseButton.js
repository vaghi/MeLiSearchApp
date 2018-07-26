import React from 'react';

class BaseButton extends React.Component {

	render() {
		return (
			<button className="base-button">{this.props.buttonTitle}</button>
		);
	}
}

export default BaseButton;