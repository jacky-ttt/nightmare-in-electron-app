import React from 'react';
import { getLinkFromDuckDuckGo } from './nightmare_api';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { url: 'null' };
  }

  getNightmareUrl() {
    this.setState({
      url: 'loading',
    });

    getLinkFromDuckDuckGo('github nightmare')
      .then((result) => {
        this.setState({ url: result });
      })
      .catch((error) => {
        this.setState({ url: error.toString() });
        console.error('Search failed:', error);
      });
  }

  render() {
    return (<div>
      <h2>Welcome to React!</h2>
      <button onClick={() => {
        this.getNightmareUrl();
      }}>{this.state.url}</button>
    </div>);
  }
}
