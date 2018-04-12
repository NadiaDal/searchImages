import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: Colors.facebook
  },
  image: {
    width: 100,
    height: 100
  },
  homeButton: {
    color: Colors.text,
    fontSize: 15,
    marginTop: 30
  }

})
