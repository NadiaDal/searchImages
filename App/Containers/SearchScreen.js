import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Text, TextInput, View } from 'react-native'
import { connect } from 'react-redux'
import SearchActions from '../Redux/SearchFormRedux'
// import {throttle} from '../Utils/index'
import MultiSlider from '../Components/react-native-multi-slider/MultiSlider'

// Styles
import styles from './Styles/SearchScreenStyle'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = { text: 'cats', columns: [2] }
  }

  customMarket = () => {
    return (
      <View style={styles.customMarker}>
        <View style={styles.customMarkerDot} />
      </View>
    )
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>Search Container</Text>
        <View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
        <View>
          <Text style={styles.sliderValue}>
            {this.state.columns}
          </Text>
          <MultiSlider
            values={this.state.columns}
            min={1}
            max={5}
            step={1}
            sliderLength={280}
            onValuesChange={(data) => this.setState({ columns: data })}
            selectedStyle={styles.selectedStyle}
            markerStyle={styles.markerStyle}
            containerStyle={styles.multiSliderContainer}
            unselectedStyle={styles.unselectedStyle}
            customMarker={this.customMarket}
          />
        </View>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => this.props.search({text: this.state.text, extras: 'url_s', columns: this.state.columns})}
        >
          <View>
            <Text>
              Search
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
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
