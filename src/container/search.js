import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form className="form">
        <div className="form-group col-md-6">
          <label htmlFor="inputquery">Search for</label>
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            id="inputquery"
            placeholder="try DNA"/>
        </div>
      </form>
    );
  }
}

export default Search;