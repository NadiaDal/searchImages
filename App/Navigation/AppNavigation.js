import { StackNavigator } from 'react-navigation'
import ResultScreen from '../Containers/ResultScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import SearchScreen from '../Containers/SearchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  ResultScreen: { screen: ResultScreen },
  LaunchScreen: { screen: LaunchScreen },
  SearchScreen: { screen: SearchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SearchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
