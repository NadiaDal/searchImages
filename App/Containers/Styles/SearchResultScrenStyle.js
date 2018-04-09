import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

const { screenWidth } = Metrics
export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight
  },
  photo: {
    width: screenWidth / 2,
    height: screenWidth / 2
  }
})
