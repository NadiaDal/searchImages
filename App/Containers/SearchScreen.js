import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Text, TextInput, View } from 'react-native'
import { connect } from 'react-redux'
import SearchActions from '../Redux/SearchFormRedux'
import {throttle} from '../Utils/index'

// Styles
import styles from './Styles/SearchScreenStyle'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = { text: 'Useless Placeholder' }
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.search(this.state.text)}
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
