import { put, call } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'
import {startup} from '../../App/Sagas/StartupSagas'
import DataStorage from '../../App/Services/DataStorage'
import SearchActions from '../../App/Redux/SearchFormRedux'
const stepper = (fn) => (mock) => fn.next(mock).value

const mockApi = {}
const photos = ['https://farm1.staticflickr.com/883/39600730180_b6b9cd34dd_t.jpg']
const searchQuery = {
  api_key: '72b5b9fe6862c3ddc6246c56caf7184c',
  columns: 4,
  extras: 'url_t',
  format: 'json',
  nojsoncallback: 1,
  page: 1,
  per_page: 56,
  text: 'Cats'
}

test('test', () => {
  const step = stepper(startup(mockApi, {}))
  expect(step()).toEqual(call(DataStorage.getPhotos))
  expect(step()).toEqual(call(DataStorage.getSearchQuery))
  expect(step(photos)).toEqual(put(SearchActions.searchFormSuccess(photos, searchQuery)))
  expect(step()).toEqual(put(NavigationActions.navigate({routeName: 'SearchScreen'})))
})
