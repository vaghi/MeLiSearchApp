import React, { PureComponent } from 'react';
import './searchBar.css';
import logoML from '../../assets/Logo_ML.png';
import searchIcon from '../../assets/ic_Search.png';
import history from '../utils/history';

class SearchBar extends PureComponent {

    render() {
        const { onChange, onSearch, searchParams } = this.props;

        return (
            <div className="header">
                <div className="header-content">
                    <img src={logoML} alt=""/>
                    <input type="text" id="searchInput" placeholder="Nunca dejes de buscar"
                        value={searchParams} onChange={onChange}/>
                    <button type="submit" className="searchBtn" onClick={(e) => onSearch(searchParams, history) }>
                      <img src={searchIcon} alt="Search"></img>
                    </button>
                </div>
            </div>
        );
    }
};

export default SearchBar;
