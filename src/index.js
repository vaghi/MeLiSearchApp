import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import history from './components/history';

import './index.css';
import './App.css';

import SearchBar from './components/searchBar';
import ResultsList from './components/resultsList';
import ItemDetail from './components/itemDetail';


class MainContainer extends React.Component {

	constructor(state) {
   super(state);
   this.handleSelectItem = this.handleSelectItem.bind(this, 'Parameter');
   this.state = {
     query: '',
     showResults: false,
     resultItems: [],
     server: 'http://localhost:3000'
   };
 }

  handleChange(e) {
    this.setState({ query: e });
  }

  handleSearch(param) {
    history.push("items?search=" + this.state.query);
  }

handleSelectItem(e, param) {
  fetch( this.state.server + '/api/items/' + param)
  .then( results => {
   return results.json();
 }).then(data => {
   console.log(data);
   this.props.history.push(data.item.id);
 });
}

render() {
  return (
    <div>
      <SearchBar onSearch={this.handleSearch.bind(this)} onChange={this.handleChange.bind(this)}/>
      { this.state.showResults ? <ResultsList onSelectItem={this.handleSelectItem}/> : null }
      <Switch>
        <Route exact path='/items' component={ResultsList}/>
        <Route path='/items/:id' component={ItemDetail}/>
      </Switch>
    </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <MainContainer/>
  </BrowserRouter>,
  document.getElementById('container')
);

registerServiceWorker();
