function Notifications({notifications, signals})
{
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
                                        <div className="notif-text">
                                            <div className="signal-item-text-bullet"/>
                                            <div className="notif-text-signal">
                                                سیگنال
                                                {` ${signal._id.slice(0, 3)} `}
                                            </div>
                                            <div className="notif-text-pair">
                                                {signal.pair}
                                            </div>
                                            {item.text}
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