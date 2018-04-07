import React, { Component } from 'react'
import { ScrollView, Text, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SearchResultScrenStyle'

class SearchResultScren extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }
  renderImages = () => {
    const {images} = this.props
    images.map(uri => (
      <Image source={{uri: uri}}/>
    ))
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>SearchResultScren Container</Text>
        {this.renderImages()}
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.search.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultScren)
