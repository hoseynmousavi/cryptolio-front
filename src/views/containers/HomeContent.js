import {useContext} from "react"
import {ExchangeContext} from "../../context/exchange/ExchangeReducer"
import GetUserExchangeData from "../../helpers/GetUserExchangeData"
import MyLoader from "../components/MyLoader"
import showNumber from "../../helpers/showNumber"

function HomeContent()
{
    const {state: {myExchanges: {selectedExchange}}} = useContext(ExchangeContext)
    const {userExchangeData, userExchangeLoading} = GetUserExchangeData({userExchangeId: selectedExchange})
    const {accounts, prices, allBalance, allProfitOrShit, allProfitOrShitPercentTotal} = userExchangeData || {}
    return (
        <div className="home-content">
            {
                selectedExchange ?
                    userExchangeLoading ?
                        <MyLoader/>
                        :
                        <>
                            <div className="home-content-header">
                                <div>
                                    <div className="home-content-value">${showNumber(allBalance)}</div>
                                    <div className={`home-content-value-percent ${allProfitOrShit > 0 ? "green" : "red"}`}>
                                        ${showNumber(allProfitOrShit, 2)}
                                        <span> </span>
                                        ({showNumber(allProfitOrShitPercentTotal, 2)}%)
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                            <div className="home-content-table">
                                <div className="home-content-table-col mobile">
                                    <div className="home-content-table-item title">نام</div>
                                    {accounts.map((item, index) => <div key={index} className="home-content-table-item">{item.currency}</div>)}
                                </div>
                                <div className="home-content-table-col">
                                    <div className="home-content-table-item title">مقدار</div>
                                    {accounts.map((item, index) => <div key={index} className="home-content-table-item">{showNumber(item.balance)}</div>)}
                                </div>
                                <div className="home-content-table-col">
                                    <div className="home-content-table-item title">قیمت</div>
                                    {accounts.map((item, index) => <div key={index} className="home-content-table-item">${showNumber(+prices[item.currency], 2)}</div>)}
                                </div>
                                <div className="home-content-table-col mobile">
                                    <div className="home-content-table-item title">ارزش موجودی</div>
                                    {accounts.map((item, index) => <div key={index} className="home-content-table-item">${showNumber(item.valueInUSDT, 2)}</div>)}
                                </div>
                                {/*<div className="home-content-table-col">*/}
                                {/*    <div className="home-content-table-item title">سود / زیان</div>*/}
                                {/*    <div className="home-content-table-item">3.81 %</div>*/}
                                {/*</div>*/}
                            </div>
                        </>
                    :
                    null
            }
        </div>
    )
}

export default HomeContent