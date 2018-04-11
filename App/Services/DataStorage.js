import { AsyncStorage } from 'react-native'

export async function setPhotos (photos, searchQuery) {
  try {
    await AsyncStorage.setItem('Photos', JSON.stringify(photos))
    await AsyncStorage.setItem('SearchQuery', JSON.stringify(searchQuery))
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
