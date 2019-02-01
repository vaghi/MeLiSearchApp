import React, { PureComponent } from 'react';
import { Redirect } from 'react-router';
import shippingIcon from '../../assets/ic_shipping.png';
import ItemPrice from '../itemPrice';

class ResultItem extends PureComponent {

	constructor(props) {
		super();

        this.state = {
          redirect: false,
          itemId: null
        }

        this.shippingLabel = "Free Shipping";
	}

    handleItemClick(params) {
        if (typeof this.props.onClickItem === 'function') {
            this.props.onClickItem(params);
        }
    }


    render() {
        if (this.props.redirectToItem === true) {
            return <Redirect push to={"/items/" + this.props.Item.id}/>;
        }

        return (
            <li id="resultItemContainer" className="result-item-container">
                <div id="itemImageContainer" className="item-image-container">
                    <img src={this.props.Item.picture} alt={this.props.Item.title} onClick={this.handleItemClick.bind(this, this.props.Item.id)}/>
                </div>
                <div id="resultItemInfoContainer" className="result-item-info-container">
                    <div id="itemPriceContainer" className="item-price-container">
                        <ItemPrice priceData={this.props.Item.price}/>
                        {this.props.Item.free_shipping && <img src={shippingIcon} alt={this.shippingLabel} className="free-shipping-img"/>}
                    </div>
                    <div id="itemTitleContainer" className="item-title-container">
                        <a onClick={ this.handleItemClick.bind(this, this.props.Item.id) }>{this.props.Item.title}</a>
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
