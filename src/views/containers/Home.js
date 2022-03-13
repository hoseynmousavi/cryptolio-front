import Switch from "../components/Switch"
import Route from "../components/Route"
import urlConstant from "../../constant/urlConstant"
import Dashboard from "./Dashboard"
import Portfolio from "./Portfolio"
import Sidebar from "./Sidebar"
import Account from "./Account"
import Notifications from "./Notifications"
import GetUserExchanges from "../../helpers/GetUserExchanges"
import LoadingWrapper from "../components/LoadingWrapper"

function Home({location})
{
    const {userExchanges, getDone, selectedExchange} = GetUserExchanges()
    if (getDone) return (
        <>
            <Switch notPage className="home-main">
                <Route exact path={urlConstant.account} render={route => <Account route={route}/>}/>
                <Route exact path={urlConstant.notifications} render={route => <Notifications route={route}/>}/>
                <Route exact path={urlConstant.portfolio} render={route => <Portfolio userExchanges={userExchanges} selectedExchange={selectedExchange} route={route}/>}/>
                <Route path="*" render={route => <Dashboard userExchanges={userExchanges} route={route}/>}/>
            </Switch>
            <Sidebar location={location}/>
        </>
    )
    else return <LoadingWrapper fixed/>
}

export default Home