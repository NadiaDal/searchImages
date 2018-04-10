import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.silver
  },
  searchButton: {
    backgroundColor: Colors.fire,
    width: 150,
    height: 45,
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sliderValue: {
    color: Colors.eggplant
  },
  multiSliderContainer: {
    height: 20,
    width: Metrics.screenWidth * 0.8,
    alignSelf: 'center'
  },
  sliderContainer: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectedStyle: {
    height: 5,
    backgroundColor: Colors.facebook
  },
  unselectedStyle: {
    height: 5,
    backgroundColor: Colors.charcoal
  },
  customMarker: {
    backgroundColor: Colors.text,
    width: 25,
    height: 25,
    borderWidth: 0,
    borderRadius: 15 / 2,
    shadowColor: Colors.black,
    shadowOffset: {width: 1, height: 1},
    zIndex: 50,
    shadowOpacity: 0.4,
    justifyContent: 'center',
    elevation: 2,
    margin: 5,
    alignItems: 'center'
  },
  customMarkerDot: {
    width: 15 / 2.8,
    height: 15 / 2.8,
    backgroundColor: Colors.facebook,
    borderRadius: (15 / 2.8) / 2
  }
})
