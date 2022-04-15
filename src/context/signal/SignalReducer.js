import {createContext, useEffect, useReducer} from "react"
import logoutManager from "../../helpers/logoutManager"
import {LOGOUT} from "../auth/AuthTypes"
import {GET_NOTIFICATIONS, GET_SIGNALS} from "./SignalTypes"

export const SignalContext = createContext(null)

const initialState = {
    signal: {
        list: [],
        getDone: false,
    },
    notification: {
        list: [],
        getDone: false,
    },
}

const init = () => initialState

function reducer(state, action)
{
    switch (action.type)
    {
        case GET_SIGNALS:
        {
            const {signals} = action.payload
            return {
                ...state,
                signal: {
                    list: signals,
                    getDone: true,
                },
            }
        }
        case GET_NOTIFICATIONS:
        {
            const {notifications} = action.payload
            return {
                ...state,
                notification: {
                    list: notifications,
                    getDone: true,
                },
            }
        }
        case LOGOUT:
        {
            return init()
        }
        default:
        {
            throw new Error()
        }
    }
}

function SignalProvider({children})
{
    const [state, dispatch] = useReducer(reducer, initialState, init)

    useEffect(() =>
    {
        logoutManager.setLogOut({callBack: () => dispatch({type: LOGOUT})})
    }, [])

    return (
        <SignalContext.Provider value={{state, dispatch}}>
            {children}
        </SignalContext.Provider>
    )
}

export default SignalProvider