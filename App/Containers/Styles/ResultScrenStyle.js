import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

const { screenWidth } = Metrics
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.facebook
  },
  photo: {
    width: screenWidth / 2,
    height: screenWidth / 2
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  backButtonText: {
    color: Colors.text
  },
  text: {
    color: Colors.text,
    alignSelf: 'center'
  }
})
