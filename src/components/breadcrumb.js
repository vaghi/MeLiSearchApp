import React from 'react';

class Breadcrumb extends React.Component {

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