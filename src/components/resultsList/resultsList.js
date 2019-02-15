import React, { PureComponent } from 'react';
import './resultsList.css';
import ResultItem from './resultItem/resultItem';
import Breadcrumb from '../utils/breadcrumb';
import history from '../utils/history';

class ResultsList extends PureComponent {

	render() {
		const {onClickItem, redirectToItem, resultItems} = this.props;

		return (
			<div id="resultsListContainer" className="results-list-container">

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
