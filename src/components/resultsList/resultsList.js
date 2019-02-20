import React, { PureComponent } from 'react';
import './resultsList.css';
import ResultItem from './resultItem/resultItem';
import Breadcrumb from '../utils/breadcrumb';
import history from '../utils/history';
import queryString from 'query-string';

class ResultsList extends PureComponent {

	componentDidMount(){
		this.searchItems();
	}

	searchItems() {
		const values = queryString.parse(this.props.location.search);
		this.props.searchItems(values.q);
	}

	componentDidUpdate(prevProps) {
		if (this.props.location.search !== prevProps.location.search) {
			this.searchItems();
		}
	}

	render() {
		const {onClickItem, resultItems, breadcrumbCategories} = this.props;

		return (
			<div id="resultsListContainer" className="results-list-container">
				<Breadcrumb Categories={breadcrumbCategories}/>
				<div id="resulstList" className="results-list">
					{resultItems.map((item, index) => {
						return <div className={"resultItem"} key={item.id}>
							<ResultItem Item={item} onClickItem={onClickItem}/>
						</div>
					})}
				</div>
			</div>
		);
	}
}

export default ResultsList;
