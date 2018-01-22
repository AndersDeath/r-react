import React from 'react'
import { connect } from 'react-redux'

import Header from './Header';
import TestComponent from '../containers/TestComponent'
import { APP_TITLE } from '../constants'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header appTitle={APP_TITLE} />
        <TestComponent />
        <TestComponent />
      </div>
    );
  }
}

export default App;