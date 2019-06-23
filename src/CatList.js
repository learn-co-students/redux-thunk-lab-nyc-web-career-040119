import React, { Component } from 'react';
import { connect } from 'react-redux';

class CatList extends Component {

  listCats = () => {
    return this.props.catPics.pictures.map(c =>{
      return <li key={c.id}><img src={c.url} key={c.id} alt="cat pic" /></li>
    })
  }

  render() {
    return (
      <div>
        {this.listCats()}
      </div>
    );
  }
}

export default connect()(CatList);
