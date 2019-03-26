import React, { PureComponent } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {Flip, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'; 
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
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnVisibilityChange
                        draggable
                        pauseOnHover
                        transition={Flip}
                    />
                </div>
            </Router>
        );
    }
}

export default Main;
