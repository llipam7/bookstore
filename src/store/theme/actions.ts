import { ActionType } from "./types"

export const setLightThemeAction = (): ActionType => {
  return {
    type: 'SET_LIGHT_THEME'
  }
}

export const setDarkThemeAction = (): ActionType => {
  return {
    type: 'SET_DARK_THEME'
  }
}