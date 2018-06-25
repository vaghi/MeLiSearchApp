import React from 'react';
import shippingIcon from '../Assets/ic_shipping.png'

class ResultItem extends React.Component {


	constructor(props) {
		super(props);
		
		this.currency = {
            ARS: '$',
            USD: 'U$S'
        };

        this.shippingLabel = "Free Shipping";
	}


  render() {
    return (
      <li id="resultItemContainer" className="result-item-container">
      	<div id="itemImageContainer" className="item-image-container">
      		<a href="https://www.mercadolibre.com.ar/">
      			<img src={this.props.Item.picture} alt={this.props.Item.title}/>
      		</a>
      	</div>
      	<div id="resultItemInfoContainer" className="result-item-info-container">
      		<div id="itemPriceContainer" className="item-price-container">
      			<span>{this.currency[this.props.Item.price.currency]}</span>
      			<span>{this.props.Item.price.amount}</span>
      			{this.props.Item.free_shipping && <img src={shippingIcon} alt={this.shippingLabel} className="free-shipping-img"/>}
      		</div>
      		<div id="itemTitleContainer" className="item-title-container">
	      		<a href="https://www.mercadolibre.com.ar/">
	      			<span>{this.props.Item.title}</span>
	      		</a>
      		</div>
      	</div>
      </li>
    );
  }
}

export default ResultItem;
