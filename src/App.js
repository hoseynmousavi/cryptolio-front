import ToastContainer from "./views/containers/ToastContainer"
import ThemeColorBar from "./views/components/ThemeColorBar"
import Switch from "./views/components/Switch"
import {lazy, Suspense} from "react"
import LoadingWrapper from "./views/components/LoadingWrapper"
import urlConstant from "./constant/urlConstant"
import PrivateRoute from "./helpers/PrivateRoute"
import Route from "./views/components/Route"

const LandingPage = lazy(() => import("./views/pages/LandingPage"))
const Home = lazy(() => import("./views/containers/Home"))
const LoginPage = lazy(() => import("./views/pages/LoginPage"))
const SignUpPage = lazy(() => import("./views/pages/SignUpPage"))

function App({location})
{
    return (
        <>
            <ThemeColorBar/>
            <Suspense fallback={<LoadingWrapper key="loading-wrapper"/>}>
                <Switch>
                    <Route exact path={urlConstant.landing} render={() => <LandingPage/>}/>
                    <PrivateRoute ifNotLogin dontChange path={urlConstant.login} render={() => <LoginPage/>}/>
                    <PrivateRoute ifNotLogin dontChange path={urlConstant.signUp} render={() => <SignUpPage/>}/>
                    <PrivateRoute path="*" render={() => <Home location={location}/>}/>
                </Switch>
            </Suspense>
            <ToastContainer location={location}/>
        </>
    )
}

export default App