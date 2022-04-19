import request from "../../request/request"
import apiUrlsConstant from "../../constant/apiUrlsConstant"
import {ADD_MY_EXCHANGE, DELETE_MY_EXCHANGE, GET_EXCHANGES_DATA, SELECT_EXCHANGE, TOGGLE_DISABLE_SIGNAL} from "./ExchangeTypes"

const getUserExchangesData = ({dispatch, cancel}) =>
{
    return request.get({url: apiUrlsConstant.getUserExchangesData, cancel})
        .then(({exchanges, user_exchanges}) =>
        {
            dispatch({
                type: GET_EXCHANGES_DATA,
                payload: {exchanges, user_exchanges},
            })
        })
}

const selectExchange = ({selectedExchange, dispatch}) =>
{
    dispatch({
        type: SELECT_EXCHANGE,
        payload: {selectedExchange},
    })
}

const addUserExchange = ({exchange_id, name, user_key, user_secret, user_passphrase, dispatch}) =>
{
    return request.post({url: apiUrlsConstant.userExchange, data: {exchange_id, name, user_key, user_secret, user_passphrase}})
        .then(addedExchange =>
        {
            dispatch({
                type: ADD_MY_EXCHANGE,
                payload: {addedExchange},
            })
        })
}

const removeUserExchange = ({userExchangeId, dispatch}) =>
{
    return request.del({url: apiUrlsConstant.userExchange, data: {userExchangeId}})
        .then(() =>
        {
            dispatch({
                type: DELETE_MY_EXCHANGE,
                payload: {userExchangeId},
            })
        })
}

const toggleDisableSignal = ({is_disable_signal, dispatch}) =>
{
    return request.patch({url: apiUrlsConstant.userExchange, data: {is_disable_signal}})
        .then(() =>
        {
            dispatch({
                type: TOGGLE_DISABLE_SIGNAL,
                payload: {is_disable_signal},
            })
        })
}

const ExchangeActions = {
    getUserExchangesData,
    selectExchange,
    addUserExchange,
    removeUserExchange,
    toggleDisableSignal,
}

export default ExchangeActions