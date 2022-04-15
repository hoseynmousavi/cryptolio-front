import {createContext, useEffect, useReducer} from "react"
import logoutManager from "../../helpers/logoutManager"
import {LOGOUT} from "../auth/AuthTypes"
import {ADD_MY_EXCHANGE, DELETE_MY_EXCHANGE, GET_EXCHANGES_DATA, SELECT_EXCHANGE} from "./ExchangeTypes"
import ExchangeActions from "./ExchangeActions"

export const ExchangeContext = createContext(null)

const initialState = {
    exchanges: [],
    userExchanges: {},
    getDone: false,
    selectedExchange: null,
}

const init = () => initialState

function reducer(state, action)
{
    switch (action.type)
    {
        case GET_EXCHANGES_DATA:
        {
            const {exchanges, user_exchanges} = action.payload
            const userExchanges = user_exchanges.reduce((sum, item) => item.data.status === "fulfilled" ? ({...sum, [item._id]: {...item, data: item.data.value}}) : sum, {})
            const selectedExchange = userExchanges[state.selectedExchange] ? state.selectedExchange : null
            if (selectedExchange) localStorage.setItem("selectedExchange", selectedExchange)
            else localStorage.removeItem("selectedExchange")
            return {
                ...state,
                exchanges,
                userExchanges,
                getDone: true,
                selectedExchange,
            }
        }
        case SELECT_EXCHANGE:
        {
            const {selectedExchange} = action.payload
            if (selectedExchange) localStorage.setItem("selectedExchange", selectedExchange)
            else localStorage.removeItem("selectedExchange")
            return {
                ...state,
                selectedExchange,
            }
        }
        case ADD_MY_EXCHANGE:
        {
            const {addedExchange} = action.payload
            return {
                ...state,
                userExchanges: {
                    ...state.userExchanges,
                    [addedExchange._id]: addedExchange,
                },
                selectedExchange: addedExchange._id,
            }
        }
        case DELETE_MY_EXCHANGE:
        {
            const {userExchangeId} = action.payload
            const userExchanges = {...state.userExchanges}
            delete userExchanges[userExchangeId]
            const selectedExchange = userExchanges[state.selectedExchange] ? state.selectedExchange : null
            if (selectedExchange) localStorage.setItem("selectedExchange", selectedExchange)
            else localStorage.removeItem("selectedExchange")
            return {
                ...state,
                userExchanges,
                selectedExchange,
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

function ExchangeProvider({children})
{
    const [state, dispatch] = useReducer(reducer, initialState, init)

    useEffect(() =>
    {
        const selectedExchange = localStorage.getItem("selectedExchange")
        if (selectedExchange && selectedExchange !== "null") ExchangeActions.selectExchange({dispatch, selectedExchange})

        logoutManager.setLogOut({callBack: () => dispatch({type: LOGOUT})})
    }, [])

    return (
        <ExchangeContext.Provider value={{state, dispatch}}>
            {children}
        </ExchangeContext.Provider>
    )
}

export default ExchangeProvider