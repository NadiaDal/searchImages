import {NetInfo, Alert} from 'react-native'

class NetworkListener {
  static start () {
    NetInfo.fetch().done((reach) => {
      NetworkListener._connectionDidChange(reach)
      console.log('Initial: ' + reach)
    })

    NetInfo.addEventListener(
      'change',
      handleConnectivityChange
    )

    function handleConnectivityChange (reach) {
      console.log('First change: ' + reach)
      NetworkListener._connectionDidChange(reach)
    }
  }

  static _connectionDidChange (state) {
    const lowerCaseState = state.toLowerCase()
    if (lowerCaseState === 'none') {
      Alert.alert('No internet connection')
    } else {
    }
  }
}

export default NetworkListener
