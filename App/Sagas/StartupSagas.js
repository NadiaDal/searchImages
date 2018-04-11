import { put, call } from 'redux-saga/effects'
import DataStorage from '../Services/DataStorage'
import SearchActions from '../Redux/SearchFormRedux'
import { NavigationActions } from 'react-navigation'

export function * startup (action) {
  const photos = yield call(DataStorage.getPhotos)
  const searchQuery = yield call(DataStorage.getSearchQuery)
  if (photos && searchQuery) {
    yield put(SearchActions.searchFormSuccess(photos, searchQuery))
    yield put(NavigationActions.navigate({routeName: 'ResultScreen'}))
  }
}
