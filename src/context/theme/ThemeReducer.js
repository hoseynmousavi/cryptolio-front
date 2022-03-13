import {createContext, useEffect, useReducer} from "react"
import {TOGGLE_THEME} from "./ThemeTypes"
import loadColors from "../../helpers/loadColors"
import themeManager from "../../helpers/themeManager"
import setCssVariables from "../../helpers/setCssVariables"

export const ThemeContext = createContext(null)

const initialState = {
    theme: "dark",
}

const init = () => initialState

function reducer(state, action)
{
    switch (action.type)
    {
        case TOGGLE_THEME:
        {
            const {theme} = action.payload
            localStorage.setItem("theme", theme === "light" ? "light" : "dark")
            return {
                ...state,
                theme,
            }
        }
        default:
        {
            throw new Error()
        }
    }
}

function ThemeProvider({children})
{
    const [state, dispatch] = useReducer(reducer, initialState, init)

    useEffect(() =>
    {
        if (process.env.NODE_ENV === "development") loadColors()
        setCssVariables()
        themeManager.configTheme()
    }, [])

    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider