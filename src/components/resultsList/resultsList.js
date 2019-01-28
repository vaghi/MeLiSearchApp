import React, { PureComponent } from 'react';
import ResultItem from './resultItem';
import Breadcrumb from '../utils/breadcrumb';
import queryString from 'query-string';
import history from '../utils/history';

class ResultsList extends PureComponent {

	constructor(props) {
		super();
		this.state = {
			showResults: false
		};
	}

	componentWillMount() {
		history.listen((location, action) => {
			this.props.searchItems(queryString.parse(location.search));
		});
	}

	componentDidMount(props) {
		const queryParam = this.props.routerProps.location ? queryString.parse(this.props.routerProps.location.search) : null;
		this.props.searchItems(queryParam);
	}

	/*searchItems(params) {
		if(!params || !params.search)
			return;

		fetch( 'http://localhost:3000/api/items?q=' + params.search)
		.then( results => {
			return results.json();
		}).then(data => {
			this.setState({ resultItems: data});
			this.setState({ showResults: true });
		});
	}*/

	render() {

		if(this.state.showResults === false) {
			return <div></div>
		}

		const {onClickItem, redirectToItem} = this.props;

		return (
			<div id="resultsListContainer" className="results-list-container">
				<Breadcrumb Categories={this.state.resultItems.categories}/>
				<div id="resulstList" className="results-list">
					{this.state.resultItems.items.map((item, index) => {
						return <div className={"resultItem"} key={item.id}>
							<ResultItem Item={item} onClickItem={onClickItem} redirectToItem={redirectToItem}/>
						</div>
					})}
				</div>
			</div>
		);
	}
}

export default ResultsList;
