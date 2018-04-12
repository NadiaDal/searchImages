import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/SearchFormRedux'

test('request', () => {
  const state = reducer(INITIAL_STATE, Actions.searchFormRequest())
  expect(state.fetching).toBe(true)
})

test('success', () => {
  const photos = ['https://farm1.staticflickr.com/883/39600730180_b6b9cd34dd_t.jpg', 'https://farm1.staticflickr.com/783/41409822231_bdffbf8725_t.jpg']
  const searchQuery = {
    extras: 'url_o',
    text: 'cats',
    columns: 1,
    per_page: 3
  }
  const state = reducer(INITIAL_STATE, Actions.searchFormSuccess(photos, searchQuery))
  expect(state.fetching).toBe(false)
  expect(state.error).toBe(null)
  expect(state.photos).toEqual(photos)
  expect(state.searchQuery).toEqual(searchQuery)
})

test('success append', () => {
  const photos = ['https://farm1.staticflickr.com/883/39600730180_b6b9cd34dd_t.jpg', 'https://farm1.staticflickr.com/783/41409822231_bdffbf8725_t.jpg']
  const state = reducer(INITIAL_STATE, Actions.searchFormSuccessAppend(photos))
  expect(state.fetching).toBe(false)
  expect(state.error).toBe(null)
  expect(state.photos).toEqual(photos)
})
