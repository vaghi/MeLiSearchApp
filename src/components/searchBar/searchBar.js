import React, { PureComponent } from 'react';
import './searchBar.css';
import logoML from '../../Assets/Logo_ML.png';
import searchIcon from '../../Assets/ic_Search.png';
import { Link } from 'react-router-dom';

class SearchBar extends PureComponent {

  constructor(state) {
    super(state);

    this.state = {
     query: ''
   };
 }

 changeHandler(e) {
  if (typeof this.props.onChange === 'function') {
    this.props.onChange(e.target.value);
  }
  this.setState({ query: e.target.value });
}

searchHandler(e) {
  if (typeof this.props.onSearch === 'function') {
    this.props.onSearch(e.target.value);
  }
}

render() {
  return (
    <div className="header">
      <div className="header-content">
        <img src={logoML} alt=""/>
        <input type="text" id="searchInput" placeholder="Nunca dejes de buscar" onChange={ this.changeHandler.bind(this) }/>
      </div>
    </div>
    );
  }
};

export default SearchBar;
