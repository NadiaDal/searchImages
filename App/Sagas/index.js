import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { SearchFormTypes } from '../Redux/SearchFormRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getSearch } from './SearchSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(SearchFormTypes.SEARCH_FORM_REQUEST, getSearch, api)
  ])
}
