import React from 'react';
import ResultItem from '../components/resultItem';

class ResultsList extends React.Component {
  render() {
    return (
      <div id="resultsListContainer" className="results-list-container">
      	<div id="resulstList" className="results-list">
	      	{this.props.resultItems.items.map(function(item, index){
	        	return <div className={"resultItem"} key={item.id}>
	        		<ResultItem Item={item}/>
	        	</div>
	        })}
      	</div>
      </div>
    );
  }
}

export default ResultsList;
