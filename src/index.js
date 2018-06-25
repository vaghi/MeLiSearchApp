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
	      showResults: false,
	      resultItems: []
	    };
  	}

  	handleChange(e) {
	    this.setState({ query: e });
	}

  	handleSearch(param) {
  		/*fetch('http://localhost:3000/api/items?q=' + this.state.query)
  		.then( results => {
  			return results.json();
  		}).then(data => {
  			console.log(data);
  		});*/

	    this.setState({ resultItems: {
	    	"author": {
	    		"name": "author_name",
	    		"lastname": "author_lastname"
	    	},
	    	"items": [
	    		{
					"id": "MLA696379458",
					"title": "Figuras De Accion Batalla Pokemon Original",
					"price": {
						"currency": "ARS",
						"amount": 359,
						"decimals": 99
					},
					"picture": "http://mla-s1-p.mlstatic.com/975221-MLA26505705569_122017-I.jpg",
					"condition": "new",
					"free_shipping": false
				},
				{
					"id": "MLA656389978",
					"title": "Picador De Metal Grande - Varios Modelos (grinder, Pikachu)",
					"price": {
						"currency": "ARS",
						"amount": 180,
						"decimals": 0
					},
					"picture": "http://mla-s1-p.mlstatic.com/941524-MLA26686082239_012018-I.jpg",
					"condition": "new",
					"free_shipping": true
				},
				{
					"id": "MLA658232863",
					"title": "Picador Pikachu Grinder Metal Calavera",
					"price": {
						"currency": "ARS",
						"amount": 350,
						"decimals": 0
					},
					"picture": "http://mla-s2-p.mlstatic.com/944711-MLA20619283815_032016-I.jpg",
					"condition": "new",
					"free_shipping": false
				}
	    	]
	    } });
	    this.setState({ showResults: true });
  	}

	render() {
		return (
		  <div>
			<SearchBar onSearch={this.handleSearch.bind(this)} onChange={this.handleChange.bind(this)} />
			{ this.state.showResults ? <ResultsList resultItems={this.state.resultItems}/> : null }
		  </div>
		);
	}
}

ReactDOM.render(
  <MainContainer/>,
  document.getElementById('container')
);

registerServiceWorker();
