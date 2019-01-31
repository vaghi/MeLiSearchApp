import connect from 'react-redux/es/connect/connect';
import { searchItems } from "../../actions/searchBar.action";
import SearchBar from './searchBar';

const actions = {
    searchItems
}

function mapStateToProps(state) {
    return {
        resultsList: state.resultsListReducer
    }
}
export default connect(mapStateToProps, actions) (SearchBar);
