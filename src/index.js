import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import SearchBar from './components/searchBar';
import ResultsList from './components/resultsList';
import registerServiceWorker from './registerServiceWorker';


class MainContainer extends React.Component {

	constructor(state) {
    	super(state);

    	this.state = {
	      query: '',
	      showResults: false
	    };
  	}

  	handleChange(e) {
	    this.setState({ query: e });
	}

  	handleSearch(param) {
	    this.setState({ showResults: true });
  	}

	render() {
		return (
		  <div>
			<SearchBar onSearch={this.handleSearch.bind(this)} onChange={this.handleChange.bind(this)}/>
			{ this.state.showResults ? <ResultsList /> : null }
		  </div>
		);
	}
}

ReactDOM.render(
  <MainContainer/>,
  document.getElementById('container')
);

registerServiceWorker();
