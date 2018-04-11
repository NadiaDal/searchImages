import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  searchFormRequest: ['searchQuery'],
  searchFormSuccess: ['photos', 'searchQuery'],
  searchFormSuccessAppend: ['photos'],
  searchFormFailure: null
})

export const SearchFormTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  photos: [],
  error: null,
  searchQuery: {}
})

/* ------------- Selectors ------------- */

export const SearchFormSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, action) =>
  state.merge({ fetching: true })

// successful api lookup
export const success = (state, action) => {
  const { photos, searchQuery } = action
  return state.merge({ fetching: false, error: null, photos: photos, searchQuery: searchQuery })
}

export const successAppend = (state, action) => {
  const { photos } = action
  return state.merge({fetching: false, error: null, photos: [...state.photos, ...photos]})
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, photos: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH_FORM_REQUEST]: request,
  [Types.SEARCH_FORM_SUCCESS]: success,
  [Types.SEARCH_FORM_SUCCESS_APPEND]: successAppend,
  [Types.SEARCH_FORM_FAILURE]: failure
})
