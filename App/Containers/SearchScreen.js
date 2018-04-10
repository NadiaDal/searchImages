import React, { Component } from 'react'
import { TouchableOpacity, Text, TextInput, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import SearchActions from '../Redux/SearchFormRedux'
import {Keyboard} from 'react-native'
// import {throttle} from '../Utils/index'
import MultiSlider from '../Components/react-native-multi-slider/MultiSlider'

// Styles
import styles from './Styles/SearchScreenStyle'
import { Colors, Metrics } from '../Themes'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = { text: '', columns: [2] }
  }

  handleSearch = () => {
    const {text, columns} = this.state
    const searchQuery =  {
      text: text.length > 0 ? text : 'cats',
      extras: 'url_s',
      columns
    }
    Keyboard.dismiss()
    this.setSearchInput('')
    this.props.search(searchQuery)
  }

  setSearchInput = (text) => {
    this.setState({text})
  }

  renderSearchInput = () => {
    return (
      <View style={{height: 40, marginBottom: 45}}>
        <Text style={styles.label}>Search term: </Text>
        {this.props.fetching ? (
          <ActivityIndicator
            size={'large'}
            color={Colors.text}
          />) : (
          <TextInput
            placeholder={'Search text...'}
            style={styles.searchInput}
            onChangeText={this.setSearchInput}
            value={this.state.text}
            underlineColorAndroid={'transparent'}
            placeholderTextColor={Colors.facebook}
            onSubmitEditing={this.handleSearch}
          />)
        }

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
