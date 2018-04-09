import _ from 'lodash'

export const throttle = (f, time = 500) => {
  return _.throttle(f, time)
}
