import connect from 'react-redux/es/connect/connect';
import { searchItems } from "../../actions/resultsList.action";
import ResultsList from './resultsList';

const actions = {
    searchItems
}

function mapStateToProps(state) {
    const { resultItems, breadcrumbCategories } = state.resultsListReducer;

    return {
        resultItems,
        breadcrumbCategories
    }
}
export default connect(mapStateToProps, actions) (ResultsList);
