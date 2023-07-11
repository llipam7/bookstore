import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'
import './ChangeTheme.css'
import { selectTheme } from '../../store/theme/selectors'
import { setDarkThemeAction, setLightThemeAction } from '../../store/theme/actions'

export const ChangeTheme = () => {
    const state = useSelector(selectTheme)
    // const state = store.getState().theme
    
    const dispatch = useDispatch()
    // const dispatch = store.dispatch

    // const { dispatch, getState, subscribe, replaceReducer } = store

    const onClick = (theme: string) => {
        theme === 'light'
            ? dispatch(setLightThemeAction())
            : dispatch(setDarkThemeAction())
        
        // dispatch(theme === 'light' ? setLightThemeAction() : setDarkThemeAction())

        // dispatch({
        //     type: theme === 'light' ? 'SET_LIGHT_THEME' : 'SET_DARK_THEME'
        // })
    }

    return (
        <div className={'theme-wrapper ' + state.theme}>
            <button onClick={() => onClick('light')}>Светлая</button>
            <button onClick={() => onClick('dark')}>Тёмная</button>
        </div>
    )
}