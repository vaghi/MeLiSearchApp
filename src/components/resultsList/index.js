import connect from 'react-redux/es/connect/connect';
import { searchItems } from "../../actions/resultsList.action";
import ResultsList from './resultsList';

const actions = {
    searchItems
}

function mapStateToProps(state) {
    return {
        resultsList: state.resultsListReducer
    }
}
export default connect(mapStateToProps, actions) (ResultsList);
