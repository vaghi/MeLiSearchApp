import React, { PureComponent } from 'react';
import './breadcrumb.css';

class Breadcrumb extends PureComponent {

  render() {
    return (
      <div className="breadcrumb">
        {this.props.Categories.map(function(cat, index){
			return <li key={cat}>{cat}</li>
        })}
      </div>
    );
  }
};

export default Breadcrumb;
