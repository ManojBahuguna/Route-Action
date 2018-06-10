import React, { Component } from 'react';
import Users from './Users';

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch('http://demo9197058.mockable.io/users')
      .then(res => res.json())
      .then(posts => {
        this.setState({ posts });
      })
  }

  render() {
    return (
      <div className="App">
        <Users users={this.state.posts} />
      </div>
    );
  }
}

export default App;
