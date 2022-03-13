import {useContext, useEffect, useRef} from "react"
import {ExchangeContext} from "../context/exchange/ExchangeReducer"
import ExchangeActions from "../context/exchange/ExchangeActions"
import toastConstant from "../constant/toastConstant"

function GetUserExchanges()
{
    const {state: {exchanges, userExchanges, getDone, selectedExchange}, dispatch} = useContext(ExchangeContext)
    const isLoading = !getDone
    const request = useRef(null)

    useEffect(() =>
    {
        if (isLoading) ExchangeActions.getUserExchangesData({dispatch, cancel: cancelSource => request.current = cancelSource})

        return () => request?.current?.cancel && request.current.cancel(toastConstant.requestCancel)
        // eslint-disable-next-line
    }, [])

    return {exchanges, userExchanges, getDone, selectedExchange}
}

export default GetUserExchanges