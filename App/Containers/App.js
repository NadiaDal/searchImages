import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import { BackHandler, Platform } from 'react-native'
import { NavigationActions } from 'react-navigation'

// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */

class App extends Component {
  componentWillMount () {
    if (Platform.OS === 'ios') return
    BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackButton)
  }

  onAndroidBackButton () {
    const {index, routes} = store.getState().nav
    let isEnterScreen = false
    if (routes[index].routeName === 'SearchScreen') {
      isEnterScreen = true
    }
    let shouldStayInApp = true
    if (isEnterScreen) {
      shouldStayInApp = false
    }
    store.dispatch(NavigationActions.back())
    return shouldStayInApp
  }

  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
