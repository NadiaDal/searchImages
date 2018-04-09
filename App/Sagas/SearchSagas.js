/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'
import SearchActions from '../Redux/SearchFormRedux'
// import { SearchSelectors } from '../Redux/SearchRedux'

export function * getSearch (api, action) {
  // get current data from Store
  // const currentData = yield select(SearchSelectors.getData)
  // make the call to the api
  const response = yield call(api.searchImages, action.data)

  // success?
  if (response.ok) {
    const photos = response.data.photos.photo.filter(item => item.url_o).map(item => item.url_o)
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(SearchActions.searchFormSuccess({photos: photos}))
    yield put(NavigationActions.navigate({routeName: 'SearchResultScreen'}))
  } else {
    yield put(SearchActions.searchFormFailure())
  }
}
