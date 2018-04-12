import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'

import { Images } from '../Themes'

import styles from './Styles/InitScrenStyle'
import { NavigationActions } from 'react-navigation'

class InitScreen extends Component {
  renderBackButton = () => {
    return (
      <TouchableOpacity
        onPress={this.props.goHome}>
        <Text style={styles.homeButton}>Home</Text>
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <Animatable.View animation='pulse' iterationCount='infinite'>
          <Image style={styles.image} source={Images.launcher} />
        </Animatable.View>
        {this.renderBackButton()}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goHome: () => dispatch(NavigationActions.navigate({routeName: 'SearchScreen'}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InitScreen)
