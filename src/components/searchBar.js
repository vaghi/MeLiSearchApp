import React from 'react';
import logoML from '../Assets/Logo_ML.png'
import searchIcon from '../Assets/ic_Search.png'

class SearchBar extends React.Component {

  changeHandler(e) {
    if (typeof this.props.onChange === 'function') {
        this.props.onChange(e.target.value);
    }
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
          <button type="submit" className="searchBtn" onClick={ this.searchHandler.bind(this) }>
            <img src={searchIcon} alt=""></img>
          </button>
        </div>
      </div>
    );
  }
};

export default SearchBar;
