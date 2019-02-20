import connect from 'react-redux/es/connect/connect';
import { onInputChange } from "../../actions/searchBar.action";
import SearchBar from './searchBar';

const actions = {
    onInputChange
}

function mapStateToProps(state) {
    const { searchParams } = state.searchBarReducer;

    return {
        searchParams
    }
}
export default connect(mapStateToProps, actions) (SearchBar);
