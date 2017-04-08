import React, { Component } from 'react';

export default class ImportList extends Component {
  constructor(props) {
    super(props);
  };

  deleteSeries(id) {
    // dispatch delete action from parent
    this.props.deleteSeries(id);
  };

  renderList() {
    let list = this.props.list.map((listItem) => {
      return (
        <li className="list-group-item" key={listItem.collectionId}>
          {listItem.seriesName}
          <button
            className="btn btn-danger btn-sm pull-right delete-btn"
            onClick={() => this.deleteSeries(listItem.collectionId)}
            >
            Delete series
          </button>
        </li>
      );
    });
    return list;
  };

  render() {
    return (
      <div>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    );
  };
};
