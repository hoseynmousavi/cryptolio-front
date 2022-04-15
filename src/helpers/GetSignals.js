import {useContext, useEffect, useRef} from "react"
import toastConstant from "../constant/toastConstant"
import {SignalContext} from "../context/signal/SignalReducer"
import SignalActions from "../context/signal/SignalActions"

function GetSignals()
{
    const {state: {signal: {list, getDone}}, dispatch} = useContext(SignalContext)
    const isLoading = !getDone
    const request = useRef(null)
    const timer = useRef(null)

    useEffect(() =>
    {
        timer.current = setInterval(() => SignalActions.getSignals({dispatch, cancel: cancelSource => request.current = cancelSource}), 4000)
        return () => clearInterval(timer.current)
    }, [])

    useEffect(() =>
    {
        if (isLoading) SignalActions.getSignals({dispatch, cancel: cancelSource => request.current = cancelSource})

        return () => request?.current?.cancel && request.current.cancel(toastConstant.requestCancel)
        // eslint-disable-next-line
    }, [])

    return {list, getDone}
}

export default GetSignals