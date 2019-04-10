import React from 'react'
import AppMain from './AppMain'
import { Provider } from 'react-redux'
import store from './src/Core/Store/Config/Store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppMain />
      </Provider>
    )
  }
}
