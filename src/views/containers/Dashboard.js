import {useContext} from "react"
import {AuthContext} from "../../context/auth/AuthReducer"
import DiagramDraw from "./DiagramDraw"
import createMonthDiagramData from "../../helpers/createMonthDiagramData"
import showNumber from "../../helpers/showNumber"
import WalletDetail from "../components/walletDetail"
import countData from "../../helpers/countData"

function Dashboard({userExchanges})
{
    const {state: user} = useContext(AuthContext)
    const {data: {accounts, balance, diagram, available, profitOrLoss, profitOrLossPercent}} = countData({userExchanges})

    return (
        <>
            <div className="home-main-name">سلام {user.full_name}</div>
            <div className="home-main-welcome">خوش آمدید!</div>

            <WalletDetail balance={balance} available={available} profitOrLoss={profitOrLoss} profitOrLossPercent={profitOrLossPercent}/>

            <div className="home-main-box table">
                <div className="home-main-box-title diagram">دارایی در طول زمان</div>
                <DiagramDraw option={createMonthDiagramData({diagram})}/>
            </div>

            <div className="home-main-box table">
                <div className="home-main-box-title">رمزارزهای شما</div>
                {
                    Object.values(accounts).length ?
                        <>
                            <div className="home-main-box-row">
                                <div className="home-main-box-row-item"/>
                                <div className="home-main-box-row-item">
                                    ارزش به دلار
                                </div>
                                <div className="home-main-box-row-item">
                                    مقدار
                                </div>
                            </div>
                            {
                                Object.values(accounts).sort((a, b) => b.balanceInUSDT - a.balanceInUSDT).map(item =>
                                    <div key={item.currency} className="home-main-box-row">
                                        <div className="home-main-box-row-item">
                                            {/*<div className="home-main-box-row-title">بیت‌کوین</div>*/}
                                            <div className="home-main-box-row-title-en">{item.currency}</div>
                                        </div>
                                        <div className="home-main-box-row-item one-row">
                                            {/*<div className="home-main-box-row-profit-percent">+10%</div>*/}
                                            <div>{showNumber(item.balanceInUSDT, 2)} دلار</div>
                                        </div>
                                        <div className="home-main-box-row-item">
                                            {showNumber(item.balance, 8)}
                                        </div>
                                    </div>,
                                )
                            }
                        </>
                        :
                        <div>موردی وجود ندارد.</div>
                }
            </div>

        </>
    )
}

export default Dashboard