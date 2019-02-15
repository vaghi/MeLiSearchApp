import React, { PureComponent } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import SearchBar from '../searchBar/index';
import ResultsList from '../resultsList/index';
import ItemDetail from '../itemDetail';


class Main extends PureComponent {

    render() {
        const { handleSearchBarChange, handleSearch, main } = this.props;

        return (
            <BrowserRouter>
    			<div>
                    <SearchBar onSearch={handleSearch} onChange={handleSearchBarChange} searchParams={main.searchParams}/>
                    <Switch>
                        <Route path='/items' render={(routerProps) => <ResultsList routerProps={routerProps}
                            redirectToItem={main.redirectToItem} onClickItem={this.selectItemHandler} resultItems={main.resultItems}/>}/>
                        <Route exact path='/items/:id' render={(routerProps) => <ItemDetail routerProps={routerProps}
                            itemData={this.state.itemData} searchItem={this.selectItemHandler}/>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;
