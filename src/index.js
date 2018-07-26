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

        this.selectItemHandler = this.selectItemHandler.bind(this);

        this.state = {
            query: '',
            showResults: false,
            server: 'http://localhost:3000',
            itemData: null
        };
    }

    handleChange(e) {
        this.setState({ query: e });
    }

    handleSearch(param) {
        history.replace("items?search=" + this.state.query);
        this.setState({redirectToItem: false});
    }

    selectItemHandler(param, e) {    
        fetch( 'http://localhost:3000/api/items/' + param)
        .then( results => {
            return results.json();
        }).then(data => {
            this.setState({redirectToItem: true, itemData: data.item});
        });
    }

    render() {
        return (
            <div>
            <SearchBar onSearch={this.handleSearch.bind(this)} onChange={this.handleChange.bind(this)}/>
            <Switch>
                <Route exact path='/items' render={(routerProps) => <ResultsList routerProps={routerProps} redirectToItem={this.state.redirectToItem} onClickItem={this.selectItemHandler} data={this.state.itemDetailData}/>}/>
                <Route path='/items/:id' render={(routerProps) => <ItemDetail routerProps={routerProps} itemData={this.state.itemData} searchItem={this.selectItemHandler}/>}/>
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
