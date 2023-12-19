import { LOCAL_STORAGE_KEYS_TO_KEEP } from '@/constants/localStorageConstants'

export const getLocalStorageFromKey = (key: string): any => {
  try {
    if (typeof window === 'undefined') {
      return null
    }

    const catValue = window.localStorage.getItem(key)

    if (!catValue) {
      return null
    }

    return JSON.parse(catValue)
  } catch (error) {
    return null
  }
}

export const setLocalStorageFromKey = (
  key: string,
  value: object | string | number
): boolean => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (error) {
    return false
  }
}

export const removeLocalStorageFromKey = (key: string) => {
  try {
    window.localStorage.removeItem(key)
    return true
  } catch (error) {
    return false
  }
}

export const clearLocalStorage = ({
  keepKeys = [],
}: {
  keepKeys: Array<string>
}) => {
  const keysToKeep = [...keepKeys, ...LOCAL_STORAGE_KEYS_TO_KEEP]
  const localStorageKeys = Object.keys(window.localStorage)

  try {
    localStorageKeys.forEach((key: string) => {
      if (!keysToKeep.includes(key)) {
        removeLocalStorageFromKey(key)
      }
    })
    return true
  } catch (error) {
    return false
  }
}
