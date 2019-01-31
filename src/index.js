import React from 'react';
import ReactDOM from 'react-dom';
import {AppRender} from './app';

ReactDOM.render(
    <AppRender/>,
  document.getElementById('container')
);

/*import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
//import history from './components/utils/history';
import Main from './components/main';
import store, { history } from './store'

import './index.css';
import './App.css';



class MainContainer extends PureComponent {

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
            this.setState({redirectToItem: true, itemData: data});
            console.log(data.item);
        });
    }

    render() {
        return (
            <Provider store={store}>
                <Main></Main>
            </Provider>
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
*/
