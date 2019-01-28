import React, { PureComponent } from 'react';

class BaseButton extends PureComponent {

	render() {
		return (
			<button className="base-button">{this.props.buttonTitle}</button>
		);
	}
}

export default BaseButton;
