import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import SearchActions from '../Redux/SearchFormRedux'
import Icon from 'react-native-vector-icons/Entypo'
import ImagePreview from 'react-native-image-preview';

import styles from './Styles/ResultScrenStyle'
import { Metrics, Colors } from '../Themes/'

class ResultScreen extends Component {
  state = {
    visible: false,
    source: ''
  }

  loadNext = () => {
    const {searchQuery} = this.props
    const nextPage = {...searchQuery, page: searchQuery.page + 1}
    this.props.search(nextPage)
  }

  renderPhoto = ({item}) => {
    const {columns} = this.props
    const style = {
      backgroundColor: Colors.facebook,
      width: Metrics.screenWidth / columns,
      height: Metrics.screenWidth / columns
    }
    return (
      <TouchableOpacity
        onPress={() => this.setState({visible: true, source: item})}
      >
        <View
          style={style}>
          <Image
            style={{
              width: Metrics.screenWidth / columns - 6,
              height: Metrics.screenWidth / columns - 6,
              margin: 3
            }}
            source={{uri: item}}
          />
        </View>
      </TouchableOpacity>
    )
  }

  renderBackButton = () => {
    return (
      <TouchableOpacity
        style={styles.backButton}
        onPress={this.props.goBack}>
        <Icon
          name={'chevron-left'}
          size={45}
          color={Colors.fire}
        />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    )
  }

  renderImages = () => {
    const {photos, columns} = this.props
    return (
      <FlatList
        keyExtractor={(item, index) => index}
        data={photos}
        numColumns={columns}
        horizontal={false}
        renderItem={this.renderPhoto}
        onEndReached={this.loadNext}
      />
    )
  }

  renderNoSearch = () => {
    return (<Text style={styles.text}>There is no search result!</Text>)
  }

  render () {
    const { photos } = this.props
    const { visible, source } = this.state
    return (
      <View style={styles.container}>
        {this.renderBackButton()}
        {photos.length ? this.renderImages() : this.renderNoSearch()}
        <ImagePreview
          visible={visible}
          source={{uri: source}}
          close={() => this.setState({visible: false})}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.search.photos,
    columns: state.search.searchQuery.columns,
    searchQuery: state.search.searchQuery

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goBack: () => dispatch(NavigationActions.back()),
    search: (data) => dispatch(SearchActions.searchFormRequest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultScreen)
