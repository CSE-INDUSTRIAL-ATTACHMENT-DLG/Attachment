import React, { Component } from 'react';

import List from './List';


class App extends Component {
  state = {
    count: 0,
  }

  addItems() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    var items = [];

    for (var i = 1; i <= this.state.count; i++) {
      items.push(i);
    }

    return (
      <div className='p-5'>
        <button variant="info" align='center' onClick={() => this.addItems()}>Click To Add Items</button>
        <List items={items} />
      </div>
    );
  }
}

export default App;
