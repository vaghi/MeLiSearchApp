import React, { PureComponent } from 'react';
import './searchBar.css';
import logoML from '../../assets/Logo_ML.png';
import searchIcon from '../../assets/ic_Search.png';
import { Link } from 'react-router-dom';

class SearchBar extends PureComponent {

    constructor(state) {
        super(state);
    }

    render() {
        const { onChange, onSearch, searchParams } = this.props;

        return (
            <div className="header">
                <div className="header-content">
                    <img src={logoML} alt=""/>
                    <input type="text" id="searchInput" placeholder="Nunca dejes de buscar"
                        value={searchParams} onChange={ onChange }/>
                    <Link to={"/items?search=" + searchParams}>
                        <button type="submit" className="searchBtn" onClick={ onSearch }>
                          <img src={searchIcon} alt="Search"></img>
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
};

export default SearchBar;
