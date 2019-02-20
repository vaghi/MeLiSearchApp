import React, { PureComponent } from 'react';
import './resultItem.css';
import shippingIcon from '../../../assets/ic_shipping.png';
import ItemPrice from '../../itemPrice';
import history from '../../utils/history';

class ResultItem extends PureComponent {

	constructor(props) {
		super();

        this.shippingLabel = "Free Shipping";
	}

	handleItemClick = (itemId) => {
		history.push(`/item/${itemId}`);
	}

    render() {

		const { Item } = this.props;

        return (
            <li id="resultItemContainer" className="result-item-container">
                <div id="itemImageContainer" className="item-image-container">
                    <img src={Item.picture} alt={Item.title} onClick={(e) => this.handleItemClick(Item.id)}/>
                </div>
                <div id="resultItemInfoContainer" className="result-item-info-container">
                    <div id="itemPriceContainer" className="item-price-container">
                        <ItemPrice priceData={Item.price}/>
                        {Item.free_shipping && <img src={shippingIcon} alt={this.shippingLabel} className="free-shipping-img"/>}
                    </div>
                    <div id="itemTitleContainer" className="item-title-container">
                        <a onClick={(e) => this.handleItemClick(Item.id)}>{Item.title}</a>
                    </div>
                </div>
                <div id="locationContainer" className="location-container">
                    <span>{Item.location}</span>
                </div>
            </li>
        );
    }
}

export default ResultItem;
