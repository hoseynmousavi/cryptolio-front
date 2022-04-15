import {useContext} from "react"
import {ExchangeContext} from "../../context/exchange/ExchangeReducer"

function Notifications({notifications, signals})
{
    const {state: {userExchanges}} = useContext(ExchangeContext)

    return (
        <>
            <div className="home-main-name">پیام‌ها</div>
            <div className="home-main-welcome">از اینجا سیگنال‌های دریافتی خود را بررسی کنید</div>


            <div className="account-plans signal">
                {
                    notifications.length > 0 ?
                        <div>
                            {
                                notifications.map(item =>
                                {
                                    const signal = signals.filter(signal => signal._id === item.signal_id)[0]
                                    return (
                                        <div key={item._id} className="notif-text">
                                            <div className="notif-text-main">
                                                {item.text}
                                            </div>
                                            <div className="notif-text-labels">
                                                <div className="notif-text-account">
                                                    حساب
                                                    {` ${userExchanges[item.user_exchange_id].name} `}
                                                </div>
                                                <div className="notif-text-account">
                                                    سیگنال
                                                    {` ${signal._id.slice(0, 3)} `}
                                                </div>
                                                <div className="notif-text-account">
                                                    {signal.pair}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <div>هنوز پیامی وجود ندارد.</div>
                }
            </div>

        </>
    )
}

export default Notifications