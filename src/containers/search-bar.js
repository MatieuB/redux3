import React, { Component } from 'react';


export default class SearchBar extends Component {
  render() {
    return (
      <form className="input-group">
        <input className="input-group-item"/>
        <span className="input-group-button">
          <button type="submit" className="btn btn-secondary">Search
          </button>
        </span>
      </form>
    )
  }
}
