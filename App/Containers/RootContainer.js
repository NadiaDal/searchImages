import React, { Component } from 'react'
import {View, StatusBar, AppState} from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import DataStorage from '../Services/DataStorage'
// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  state = {
    appState: AppState.currentState
  }

  componentWillUnmount () {
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  componentDidMount () {
    AppState.addEventListener('change', this.handleAppStateChange)
    this.props.startup()
  }

  handleAppStateChange = async (nextAppState) => {
    if (nextAppState === 'background') {
      await DataStorage.setPhotos(this.props.photos)
    }
    this.setState({appState: nextAppState})
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.search.photos

  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
