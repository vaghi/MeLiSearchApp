import React from 'react';
import shippingIcon from '../Assets/ic_shipping.png'
import { Link } from 'react-router-dom'

class ResultItem extends React.Component {


	constructor(props) {
		super(props);
		
		this.currency = {
        ARS: '$',
        USD: 'U$S'
    };

    this.shippingLabel = "Free Shipping";
	}

  onClick = () => {
    this.props.onSelectItem(this.props.Item.id);
  }


  render() {
    return (
      <li id="resultItemContainer" className="result-item-container">
      	<div id="itemImageContainer" className="item-image-container">
    			<img src={this.props.Item.picture} alt={this.props.Item.title} onClick={this.onClick}/>
      	</div>
      	<div id="resultItemInfoContainer" className="result-item-info-container">
      		<div id="itemPriceContainer" className="item-price-container">
      			<span>{this.currency[this.props.Item.price.currency]}</span>
      			<span>{this.props.Item.price.amount}</span>
            {this.props.Item.price.decimals > 0 && <span className="price-decimals">{this.props.Item.price.decimals}</span>}
      			{this.props.Item.free_shipping && <img src={shippingIcon} alt={this.shippingLabel} className="free-shipping-img"/>}
      		</div>
      		<div id="itemTitleContainer" className="item-title-container">
	      		<Link to={`/item/${this.props.Item.id}`}>{this.props.Item.title}</Link>
      		</div>
      	</div>
        <div id="locationContainer" className="location-container">
          <span>{this.props.Item.location}</span>
        </div>
      </li>
    );
  }
}

export default ResultItem;
