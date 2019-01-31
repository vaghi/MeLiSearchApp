import React, { PureComponent } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import SearchBar from '../searchBar';
import ResultsList from '../resultsList/index';
import ItemDetail from '../itemDetail';


class Main extends PureComponent {

    render() {
        const { handleSearchBarChange, handleSearch } = this.props;

        return (
            <BrowserRouter>
    			<div>
                        <SearchBar onSearch={handleSearch} onChange={handleSearchBarChange}/>
                        <Switch>
                            <Route exact path='/items' render={(routerProps) => <ResultsList routerProps={routerProps} redirectToItem={this.state.redirectToItem} onClickItem={this.selectItemHandler} data={this.state.itemDetailData}/>}/>
                            <Route path='/items/:id' render={(routerProps) => <ItemDetail routerProps={routerProps} itemData={this.state.itemData} searchItem={this.selectItemHandler}/>}/>
                        </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;
