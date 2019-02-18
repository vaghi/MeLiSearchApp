import connect from 'react-redux/es/connect/connect';
import { } from "../../actions/itemDetail.action";
import ItemDetail from './itemDetail';

const actions = {

}

function mapStateToProps(state) {
    const {} = state.itemDetailReducer;

    return {
        
    }
}
export default connect(mapStateToProps, actions) (ItemDetail);
