import {getPerPage, getExtras, buildSearchQuery} from '../../App/Utils'

test('testing number photos per page for 750x1334', () => {
  expect(getPerPage(1)).toBe(3)
})

test('testing number photos per page for 750x1334', () => {
  expect(getPerPage(2)).toBe(14)
})

test('testing number photos per page for 750x1334', () => {
  expect(getPerPage(3)).toBe(32)
})

test('testing number photos per page for 750x1334', () => {
  expect(getPerPage(4)).toBe(56)
})

test('testing number photos per page for 750x1334', () => {
  expect(getPerPage(5)).toBe(88)
})

test('testing getExtras for 750', () => {
  expect(getExtras(1)).toBe('url_o')
})

test('testing getExtras for 750', () => {
  expect(getExtras(2)).toBe('url_m')
})

test('testing getExtras for 750', () => {
  expect(getExtras(3)).toBe('url_n')
})

test('testing getExtras for 750', () => {
  expect(getExtras(4)).toBe('url_s')
})

test('testing getExtras for 750', () => {
  expect(getExtras(5)).toBe('url_q')
})

test('testing query for 750', () => {
  expect(buildSearchQuery('cats', [1])).toEqual({
    extras: 'url_o',
    text: 'cats',
    columns: 1,
    per_page: 3
  })
})
