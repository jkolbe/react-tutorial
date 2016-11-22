import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
  render() {
    return (
      <table>
        <tr>
          <th>header1</th>
          <th>header2</th>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
        </tr>
      </table>
    );
  }
}

export default Table;
