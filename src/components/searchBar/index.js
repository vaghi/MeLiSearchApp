import connect from 'react-redux/es/connect/connect';
import SearchBar from './searchBar';

const actions = {

}

function mapStateToProps(state) {
    return {
        resultsList: state.resultsListReducer
    }
}
export default connect(mapStateToProps, actions) (SearchBar);
