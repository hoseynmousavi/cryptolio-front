import {useContext, useEffect, useRef} from "react"
import toastConstant from "../constant/toastConstant"
import {SignalContext} from "../context/signal/SignalReducer"
import SignalActions from "../context/signal/SignalActions"

function GetNotifications()
{
    const {state: {notification: {list, getDone}}, dispatch} = useContext(SignalContext)
    const isLoading = !getDone
    const request = useRef(null)

    useEffect(() =>
    {
        if (isLoading) SignalActions.getNotifications({dispatch, cancel: cancelSource => request.current = cancelSource})

        return () => request?.current?.cancel && request.current.cancel(toastConstant.requestCancel)
        // eslint-disable-next-line
    }, [])

    return {list, getDone}
}

export default GetNotifications