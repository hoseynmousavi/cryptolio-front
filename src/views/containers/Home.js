import Switch from "../components/Switch"
import Route from "../components/Route"
import urlConstant from "../../constant/urlConstant"
import Dashboard from "./Dashboard"
import Portfolio from "./Portfolio"
import Sidebar from "./Sidebar"
import Account from "./Account"
import Notifications from "./Notifications"
import Signals from "./Signals"
import GetUserExchanges from "../../helpers/GetUserExchanges"
import LoadingWrapper from "../components/LoadingWrapper"
import GetSignals from "../../helpers/GetSignals"
import GetNotifications from "../../helpers/GetNotifications"

function Home({location})
{
    const {userExchanges, getDone: userExchangeGetDone, selectedExchange} = GetUserExchanges()
    const {list: signals, getDone: signalGetDone} = GetSignals()
    const {list: notifications, getDone: notificationGetDone} = GetNotifications()
    if (userExchangeGetDone && signalGetDone && notificationGetDone) return (
        <>
            <Switch notPage className="home-main">
                <Route exact path={urlConstant.account} render={() => <Account/>}/>
                <Route exact path={urlConstant.signal} render={() => <Signals signals={signals}/>}/>
                <Route exact path={urlConstant.notifications} render={() => <Notifications notifications={notifications} signals={signals}/>}/>
                <Route exact path={urlConstant.portfolio} render={() => <Portfolio userExchanges={userExchanges} selectedExchange={selectedExchange}/>}/>
                <Route path="*" render={() => <Dashboard userExchanges={userExchanges}/>}/>
            </Switch>
            <Sidebar location={location}/>
        </>
    )
    else return <LoadingWrapper fixed/>
}

export default Home