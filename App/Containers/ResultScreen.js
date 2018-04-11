import React, { Component } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Metrics, Colors } from '../Themes/'
import Icon from 'react-native-vector-icons/Entypo'
import SearchActions from '../Redux/SearchFormRedux'
import styles from './Styles/ResultScrenStyle'
import { NavigationActions } from 'react-navigation'

class ResultScreen extends Component {
  getRandomColor () {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  loadNext = () => {
    const {searchQuery} = this.props
    const nextPage = {...searchQuery, page: searchQuery.page + 1}
    this.props.search(nextPage)
  }

  renderPhoto = ({item}) => {
    const {columns} = this.props
    return (
      <View
        style={{
          backgroundColor: this.getRandomColor(),
          width: Metrics.screenWidth / columns,
          height: Metrics.screenWidth / columns
        }}>
        <Image
          style={{
            width: Metrics.screenWidth / columns - 6,
            height: Metrics.screenWidth / columns - 6,
            margin: 3
          }}
          source={{uri: item}}
        />
      </View>
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

  render () {
    return (
      <View style={styles.container}>
        {this.renderBackButton()}
        {this.renderImages()}
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
