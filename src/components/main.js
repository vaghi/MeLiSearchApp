import React, { PureComponent } from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import SearchBar from './searchBar/index';
import ResultsList from './resultsList/index';
import ItemDetail from './itemDetail/index';
import history from './utils/history';

class Main extends PureComponent {

    render() {
        return (
            <Router history={history}>
    			<div>
                    <SearchBar/>
                    <Switch>
                        <Route path='/items' component={ResultsList}/>
                        <Route path='/item/:id' component={ItemDetail}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Main;
