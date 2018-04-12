import { put, call } from 'redux-saga/effects'
import DataStorage from '../Services/DataStorage'
import SearchActions from '../Redux/SearchFormRedux'
import { NavigationActions } from 'react-navigation'

export function * startup (action) {
  try {
    const photos = yield call(DataStorage.getPhotos)
    const searchQuery = yield call(DataStorage.getSearchQuery)
    let routeName = 'SearchScreen'
    if (photos && photos.length) {
      yield put(SearchActions.searchFormSuccess(photos, searchQuery))
      routeName = 'ResultScreen'
    }
    yield put(NavigationActions.navigate({routeName}))
  } catch (e) {
    console.log('Error occurred on startup: ' + e.message)
  }
}
