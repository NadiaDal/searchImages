import React, { Component } from 'react'
import { TouchableOpacity, Text, TextInput, View, ActivityIndicator, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import SearchActions from '../Redux/SearchFormRedux'
import {throttle, buildSearchQuery} from '../Utils'
import MultiSlider from '../Components/react-native-multi-slider/MultiSlider'

// Styles
import styles from './Styles/SearchScreenStyle'
import { Colors, Metrics } from '../Themes'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      columns: [2],
      validationMessage: false
    }
  }

  handleSearch = () => {
    const {text, columns} = this.state
    if (text.length === 0) {
      this.setState({validationMessage: true})
      return
    }
    const searchQuery = buildSearchQuery(text, columns)
    Keyboard.dismiss()
    this.setSearchInput('')
    this.props.search(searchQuery)
  }

  setSearchInput = (text) => {
    this.setState({text})
    this.setState({validationMessage: false})
  }

  renderLoader = () => {
    return (
      <ActivityIndicator
        size={'large'}
        color={Colors.text}
      />
    )
  }

  renderInput = () => {
    return (
      <View>
        <TextInput
          placeholder={'Search text...'}
          style={styles.searchInput}
          onChangeText={this.setSearchInput}
          value={this.state.text}
          underlineColorAndroid={'transparent'}
          placeholderTextColor={Colors.facebook}
          onSubmitEditing={this.handleSearch}
        />
        {this.state.validationMessage && <Text style={styles.validation}>Please enter search text!</Text>}
      </View>)
  }

  renderSearchInput = () => {
    return (
      <View style={styles.searchInputWrapper}>
        <Text style={styles.label}>Search term: </Text>
        {this.props.fetching ? this.renderLoader() : this.renderInput()}

      </View>
    )
  }

  customMarket = () => {
    return (
      <View style={styles.customMarker}>
        <View style={styles.customMarkerDot} />
      </View>
    )
  }

  renderSlider = () => {
    const { columns } = this.state
    return (
      <View>
        <Text style={styles.label}>
          Columns: {columns[0]}
        </Text>
        <MultiSlider
          values={columns}
          min={1}
          max={5}
          step={1}
          sliderLength={Metrics.screenWidth * 0.7}
          onValuesChange={(data) => this.setState({columns: data})}
          selectedStyle={styles.selectedStyle}
          markerStyle={styles.markerStyle}
          containerStyle={styles.multiSliderContainer}
          unselectedStyle={styles.unselectedStyle}
          customMarker={this.customMarket}
        />
      </View>
    )
  }

  renderSubmitButton = () => {
    return (
      <View>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={throttle(this.handleSearch)}
        >
          <Text style={{color: 'white'}}>
            Search
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        {this.renderSearchInput()}
        {this.renderSlider()}
        {this.renderSubmitButton()}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.search.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (data) => dispatch(SearchActions.searchFormRequest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
