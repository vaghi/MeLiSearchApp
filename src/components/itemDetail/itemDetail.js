import React, { PureComponent } from 'react';
import ItemPrice from '../itemPrice';
import BaseButton from '../utils/baseButton';
import Breadcrumb from '../utils/breadcrumb';
import Condition from '../../constants/condition';
import Labels from '../../constants/labels';

class ItemDetail extends PureComponent {

	componentDidMount(){
		if(this.props.itemData === null) {
			this.props.searchItem("MLA650019295");
		}
	}

	render() {
		if(this.props.itemData === null) {
			return null;
		};

		const { itemData } = this.props;

		return (
			<div>
				<Breadcrumb Categories={itemData.categories}/>
				<div id="itemDetailContainer" className="item-detail-container">
					<div id="itemDetailHeaderContainer" className="item-detail-header-container">
						<div id="itemDetailImageContainer" className="item-detail-image-container">
		                    <img src={itemData.picture} alt={itemData.title}/>

		                </div>
		                <div id="itemDetailInfoContainer" className="item-detail-info-container">
		                	<div id="itemDetailConditionAndQty" className="item-detail-condition-and-qty">
		                		<span>{Condition[itemData.condition]} - {itemData.sold_quantity} Vendidos</span>
		                	</div>
		                	<div id="itemDetailTitle" className="item-detail-title">
		                		<span>{itemData.title}</span>
		                	</div>
		                	<div id="itemDetailPriceContainer" className="item-detail-price-container">
		                		<ItemPrice priceData={itemData.price}/>
		                	</div>
		                	<div id="itemDetailPurchaseButton" className="item-detail-purchase-button">
		                		<BaseButton buttonTitle={Labels.purchase}/>
		                	</div>
		                </div>
	                </div>
	                <div id="item-detail-desc-container" className="item-detail-desc-container">
	                	<div className="item-detail-desc-title">
	                		{Labels.productDescription}
	                	</div>
	                	<div className="item-detail-desc-body">
	                		<p>{itemData.description}</p>
	                	</div>
	                </div>
				</div>
			</div>
		);
	}
}

export default ItemDetail;
