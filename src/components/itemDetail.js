import React from 'react';
import { Link } from 'react-router-dom'

class ItemDetail extends React.Component {

  componentDidMount(props) {
    console.log(this.props.match.params);
  }

  render() {
    return (
      <h1>Detail</h1>
    );
  }
}

export default ItemDetail;
