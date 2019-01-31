import connect from 'react-redux/es/connect/connect';
import { handleSearchBarChange, handleSearch } from "../../actions/main.action";
import Main from './main';

const actions = {
    handleSearchBarChange,
    handleSearch
}

function mapStateToProps(state) {
    return {
        main: state.mainReducer
    }
}
export default connect(mapStateToProps, actions) (Main);
