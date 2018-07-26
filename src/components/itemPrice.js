import React from 'react';
import Currency from '../helpers/currency';

class ItemPrice extends React.Component {
	render() {
		return (
			<div>
				<span>{Currency[this.props.priceData.currency]}</span>
                <span>{this.props.priceData.amount}</span>
                {this.props.priceData.decimals > 0 && <span className="price-decimals">{this.props.priceData.decimals}</span>}
			</div>
		);
	}
}

export default ItemPrice;