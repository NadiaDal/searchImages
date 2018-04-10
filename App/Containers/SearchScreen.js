import React, { Component } from 'react'
import { TouchableOpacity, Text, TextInput, View } from 'react-native'
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
    this.state = { text: '', columns: [2] }
  }

  renderSearchInput = () => {
    return (
      <View>
        <Text style={{color: Colors.text, alignSelf: 'center', marginBottom: 15}}>Search term: </Text>
        <TextInput
          placeholder={'Search ...'}
          style={styles.searchInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          underlineColorAndroid={'transparent'}
          placeholderTextColor={Colors.facebook}
        />
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
    return (
      <MultiSlider
        values={this.state.columns}
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
    )
  }

  renderSubmitButton = () => {
    return (
      <View>
        <Text style={styles.sliderValue}>
          {this.state.columns}
        </Text>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => this.props.search(
            {
              text: this.state.text,
              extras: 'url_s',
              columns: this.state.columns
            })
          }
        >
          <View>
            <Text style={{color: 'white'}}>
              Search
            </Text>
          </View>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (data) => dispatch(SearchActions.searchFormRequest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
