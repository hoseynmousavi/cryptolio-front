import React from "react"
import ReactDOM from "react-dom"
import "./styles/index.scss"
import App from "./App"
import registerSW from "./serviceWorkerRegistration"
import withRouter from "./views/containers/withRouter"
import ThemeProvider from "./context/theme/ThemeReducer"
import AuthProvider from "./context/auth/AuthReducer"
import ExchangeProvider from "./context/exchange/ExchangeReducer"
import SignalProvider from "./context/signal/SignalReducer"

const WrappedApp = withRouter(App)

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <AuthProvider>
                <ExchangeProvider>
                    <SignalProvider>
                        <WrappedApp/>
                    </SignalProvider>
                </ExchangeProvider>
            </AuthProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root"),
)

registerSW()