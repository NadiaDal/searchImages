import React, { Component } from 'react'
import { ScrollView, Text, Image, FlatList } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics } from '../Themes/'

// Styles
import styles from './Styles/SearchResultScrenStyle'

class SearchResultScreen extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }
  renderPhoto = (uri) => {
    console.log('uri', uri)
       return (
         <Image
          style={{
            width: Metrics.screenWidth / 3,
            height: Metrics.screenWidth / 3
          }}
          source={{uri: uri}}
        />
      )
  }

  renderImages = () => {
    const {photos} = this.props
    return (
      <FlatList
        contentContainerStyle={{paddingTop: 20, paddingBottom: 30}}
        keyExtractor={(item, index) => index}
        data={photos.photos}
        numColumns={3}
        horizontal={false}
        renderItem={({item}) => this.renderPhoto(item)}
      />
    )
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
    photos: state.search.photos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultScreen)
