import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.facebook,
    padding: 10
  },
  searchInputWrapper: {
    height: 40,
    marginBottom: 60
  },
  searchInput: {
    height: 40,
    width: Metrics.screenWidth * 0.7,
    borderRadius: 8,
    backgroundColor: Colors.text,
    color: Colors.facebook,
    paddingLeft: 25
  },
  label: {
    color: Colors.text,
    alignSelf: 'center',
    marginBottom: 15
  },
  validation: {
    color: Colors.fire,
    alignSelf: 'center',
    marginBottom: 15
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
  multiSliderContainer: {
    height: 40
  },
  selectedStyle: {
    height: 5,
    backgroundColor: Colors.fire
  },
  unselectedStyle: {
    height: 5,
    backgroundColor: Colors.text
  },
  customMarker: {
    backgroundColor: Colors.text,
    width: 25,
    height: 25,
    borderWidth: 0,
    borderRadius: 8,
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
