import { StackNavigator } from 'react-navigation'
import ResultScreen from '../Containers/ResultScreen'
import SearchScreen from '../Containers/SearchScreen'
import InitScreen from '../Containers/InitScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  ResultScreen: { screen: ResultScreen },
  SearchScreen: { screen: SearchScreen },
  InitScreen: { screen: InitScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'InitScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
