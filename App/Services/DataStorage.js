import { AsyncStorage } from 'react-native'

export async function setPhotos (potos) {
  try {
    const data = JSON.stringify(potos)
    await AsyncStorage.setItem('Photos', data)
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

export async function removePhotos () {
  try {
    await AsyncStorage.removeItem('Photos')
  } catch (error) {
    throw new Error(error)
  }
}

export default {
  setPhotos,
  getPhotos,
  removePhotos
}
