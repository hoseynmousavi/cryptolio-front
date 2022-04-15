import request from "../../request/request"
import apiUrlsConstant from "../../constant/apiUrlsConstant"
import {GET_NOTIFICATIONS, GET_SIGNALS} from "./SignalTypes"

function getSignals({dispatch, cancel})
{
    return request.get({url: apiUrlsConstant.getSignals, cancel})
        .then(({signals}) =>
        {
            dispatch({
                type: GET_SIGNALS,
                payload: {signals},
            })
        })
}

function getNotifications({dispatch, cancel})
{
    return request.get({url: apiUrlsConstant.getNotifications, cancel})
        .then(({notifications}) =>
        {
            dispatch({
                type: GET_NOTIFICATIONS,
                payload: {notifications},
            })
        })
}

const SignalActions = {
    getSignals,
    getNotifications,
}

export default SignalActions