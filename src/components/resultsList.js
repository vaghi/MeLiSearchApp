import React from 'react';
import ResultItem from '../components/resultItem';
import Breadcrumb from '../components/breadcrumb';
import queryString from 'query-string';
import history from '../components/history';

class ResultsList extends React.Component {

	constructor(props) {
		super();
		this.state = {
			showResults: false
		};
	}

	componentWillMount() {
		history.listen((location, action) => {
			this.searchItems(queryString.parse(location.search));
		});
	}

	componentDidMount(props) {
		this.searchItems();
	}

	searchItems(params) {
		const queryParam = this.props.routerProps.location ? queryString.parse(this.props.routerProps.location.search) : null;
		const urlParams = params ? params : queryParam;

		if(!urlParams || !urlParams.search)
			return;

		fetch( 'http://localhost:3000/api/items?q=' + urlParams.search)
		.then( results => {
			return results.json();
		}).then(data => {
			this.setState({ resultItems: data});
			this.setState({ showResults: true });
		});
	}

	render() {

		if(this.state.showResults === false) {
			return <div></div>
		}

		return (
			<div id="resultsListContainer" className="results-list-container">
				<Breadcrumb Categories={this.state.resultItems.categories}/>
				<div id="resulstList" className="results-list">
					{this.state.resultItems.items.map((item, index) => {
						return <div className={"resultItem"} key={item.id}>
							<ResultItem Item={item} onClickItem={this.props.onClickItem} redirectToItem={this.props.redirectToItem}/>
						</div>
					})}
				</div>
			</div>
		);
	}
}

export default ResultsList;
