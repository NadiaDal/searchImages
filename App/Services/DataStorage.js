import { AsyncStorage } from 'react-native'

export async function setPhotos (potos, searchQuery) {
  try {
    const data = JSON.stringify(potos)
    await AsyncStorage.setItem('Photos', data)
    await AsyncStorage.setItem('SearchQuery', searchQuery)
  } catch (error) {
    throw new Error(error)
  }
}

export async function getPhotos () {
  try {
    const photos = await AsyncStorage.getItem('Photos')
    return JSON.parse(photos)
  } catch (error) {
    throw new Error(error)
  }
}

export async function getSearchQuery () {
  try {
    const SearchQuery = await AsyncStorage.getItem('SearchQuery')
    return JSON.parse(SearchQuery)
  } catch (error) {
    throw new Error(error)
  }
}

export async function removePhotos () {
  try {
    await AsyncStorage.removeItem('Photos')
    await AsyncStorage.removeItem('getSearchQuery')
  } catch (error) {
    throw new Error(error)
  }
}

export default {
  setPhotos,
  getPhotos,
  getSearchQuery,
  removePhotos
}
