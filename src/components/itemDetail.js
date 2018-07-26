import React from 'react';
import ItemPrice from '../components/itemPrice';
import BaseButton from '../components/baseButton';
import Condition from '../helpers/condition';
import Labels from '../helpers/labels';

class ItemDetail extends React.Component {

	constructor(props) {
		super(props);
		console.log(this.props.itemData);
	}

	componentDidMount(){
		if(this.props.itemData === null) {
			this.props.searchItem("MLA650019295");
		}
	}

	render() {
		if(this.props.itemData === null) {
			return null;
		};

		return (
			<div id="itemDetailContainer" className="item-detail-container">
				<div id="itemDetailImageContainer" className="item-detail-image-container">
                    <img src={this.props.itemData.picture} alt={this.props.itemData.title}/>
                </div>
                <div id="itemDetailInfoContainer" className="item-detail-info-container">
                	<div id="itemDetailConditionAndQty" className="item-detail-condition-and-qty">
                		<span>{Condition[this.props.itemData.condition]} - {this.props.itemData.sold_quantity} Vendidos</span>
                	</div>
                	<div id="itemDetailTitle" className="item-detail-title">
                		<span>{this.props.itemData.title}</span>
                	</div>
                	<div id="itemDetailPriceContainer" className="item-detail-price-container">
                		<ItemPrice priceData={this.props.itemData.price}/>
                	</div>
                	<div id="itemDetailPurchaseButton" className="item-detail-purchase-button">
                		<BaseButton buttonTitle={Labels.purchase}/>
                	</div>
                </div>
			</div>
		);
	}
}

export default ItemDetail;
