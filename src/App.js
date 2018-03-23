import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BergerBuilder from './containers/BergerBuilder/BergerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BergerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
