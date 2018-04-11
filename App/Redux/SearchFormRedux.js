import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  searchFormRequest: ['searchQuery'],
  searchFormSuccess: ['photos', 'searchQuery'],
  searchFormSuccessAppend: ['photos'],
  searchFormFailure: null
})

export const SearchFormTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  fetching: false,
  photos: [],
  error: null,
  searchQuery: {}
})

export const SearchFormSelectors = {
  getData: state => state.data
}

export const request = (state, action) =>
  state.merge({ fetching: true })

export const success = (state, action) => {
  const { photos, searchQuery } = action
  return state.merge({ fetching: false, error: null, photos: photos, searchQuery: searchQuery })
}

export const successAppend = (state, action) => {
  const { photos } = action
  return state.merge({fetching: false, error: null, photos: [...state.photos, ...photos]})
}

export const failure = state =>
  state.merge({ fetching: false, error: true, photos: null })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH_FORM_REQUEST]: request,
  [Types.SEARCH_FORM_SUCCESS]: success,
  [Types.SEARCH_FORM_SUCCESS_APPEND]: successAppend,
  [Types.SEARCH_FORM_FAILURE]: failure
})
