import _ from 'lodash'
import { Metrics } from '../Themes'
const {screenHeight, screenWidth} = Metrics

export const throttle = (f, time = 500) => {
  return _.throttle(f, time)
}

export const getExtras = (columns) => {
  const width = parseInt((screenWidth / columns), 10)
  let extras = 'url_s'
  if (width <= 75) {
    extras = 'url_sq'
  } else if (width <= 100) {
    extras = 'url_t'
  } else if (width <= 150) {
    extras = 'url_q'
  } else if (width <= 240) {
    extras = 'url_s'
  } else if (width <= 320) {
    extras = 'url_n'
  } else if (width <= 500) {
    extras = 'url_m'
  } else {
    extras = 'url_o'
  }
  return extras
}

export const getPerPage = (columns) => parseInt((screenHeight / (screenWidth / columns) * columns * 2), 10)

export const buildSearchQuery = (text, columns) => {
  const perPage = getPerPage(columns)
  const extras = getExtras(columns)
  return {
    extras,
    text,
    columns: columns[0],
    per_page: perPage
  }
}
