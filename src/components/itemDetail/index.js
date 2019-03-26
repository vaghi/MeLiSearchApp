import connect from 'react-redux/es/connect/connect';
import { searchItem } from "../../actions/itemDetail.action";
import ItemDetail from './itemDetail';

const actions = {
    searchItem
}

function mapStateToProps(state) {
    const { itemData, breadcrumbCategories } = state.itemDetailReducer;

    return {
        itemData,
        breadcrumbCategories
    }
}

export default connect(mapStateToProps, actions) (ItemDetail);
