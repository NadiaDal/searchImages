import React, { Component } from 'react'
import { TouchableOpacity, Text, TextInput, View, ActivityIndicator, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import SearchActions from '../Redux/SearchFormRedux'
// import {throttle} from '../Utils/index'
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

  getExtras = (width) => {
    let extras = 'url_s'
    if (width <= 75) {
      extras = 'url_sq'
    } else if (width <= 100) {
      extras = 'url_t'
    } else if (width <= 150) {
      extras = 'url_q'
    } else if (width <= 240) {
      extras = 'url_s'
    } else if (width <= 320) {
      extras = 'url_n'
    } else if (width <= 500) {
      extras = 'url_m'
    } else {
      extras = 'url_o'
    }
    return extras
  }

  handleSearch = () => {
    if (this.state.text.length === 0) {
      this.setState({validationMessage: true})
      return
    }
    const {text, columns} = this.state
    const {screenHeight, screenWidth} = Metrics
    const perPage = parseInt((screenHeight / (screenWidth / columns) * columns * 2), 10)
    const extras = this.getExtras(parseInt((screenWidth / columns), 10))
    const searchQuery = {
      extras,
      text,
      columns: columns[0],
      per_page: perPage
    }
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
          onPress={this.handleSearch}
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
