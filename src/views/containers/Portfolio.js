import WalletDetail from "../components/walletDetail"
import Material from "../components/Material"
import DiagramDraw from "./DiagramDraw"
import createWalletDiagram from "../../helpers/createWalletDiagram"
import countData from "../../helpers/countData"
import exchangeActions from "../../context/exchange/ExchangeActions"
import {useContext, useState} from "react"
import {ExchangeContext} from "../../context/exchange/ExchangeReducer"
import showNumber from "../../helpers/showNumber"
import createMonthDiagramData from "../../helpers/createMonthDiagramData"
import AddPortfolio from "../components/AddPortfolio"
import TrashSvg from "../../media/svg/TrashSvg"
import createMaterialColor from "../../helpers/createMaterialColor"

function Portfolio({userExchanges, selectedExchange})
{
    const {dispatch} = useContext(ExchangeContext)
    const userExchangesArr = Object.values(userExchanges)
    const {name, data: {accounts, balance, diagram, available, profitOrLoss, profitOrLossPercent, withdraws, deposits}} = countData({userExchanges, selectedExchange})
    const transfers = [...withdraws.map(item => ({...item, type: "withdraw"})), ...deposits.map(item => ({...item, type: "deposit"}))].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    const [addingPortfolio, setAddingPortfolio] = useState(false)

    function togglePortfolio(flag)
    {
        return () => setAddingPortfolio(flag)
    }

    function selectExchange(selectedExchange)
    {
        exchangeActions.selectExchange({selectedExchange, dispatch})
    }

    return (
        <>
            <div className="home-main-name">تحلیل پورتفولیو</div>

            <div className="portfolio-nav">
                <div className="portfolio-nav-right">
                    <Material className={`portfolio-nav-item ${selectedExchange ? "" : "selected"}`} onClick={() => selectExchange()}>همه صرافی‌ها</Material>
                    {
                        userExchangesArr.map(item =>
                            <Material key={item.name} className={`portfolio-nav-item ${selectedExchange === item._id ? "selected" : ""}`} onClick={() => selectExchange(item._id)}>{item.name}</Material>,
                        )
                    }
                </div>
                <Material className="portfolio-add" onClick={togglePortfolio(true)}>
                    <div className="portfolio-add-icon">+</div>
                    <div>صرافی جدید</div>
                </Material>
            </div>

            <WalletDetail balance={balance} available={available} profitOrLoss={profitOrLoss} profitOrLossPercent={profitOrLossPercent}/>

            <div className="home-main-box table">
                <div className="home-main-box-title diagram">دارایی در طول زمان</div>
                <DiagramDraw key={!!selectedExchange} option={createMonthDiagramData({diagram: selectedExchange ? [{name, diagram}] : diagram, legend: !selectedExchange})}/>
            </div>

            <div className="portfolio-section">
                <div className="home-main-box chart">
                    <div className="home-main-box-title diagram">نسبت توزیع دارایی</div>
                    <DiagramDraw option={createWalletDiagram({accounts, balance})}/>
                </div>
                <div className="home-main-box transfers">
                    <div className="home-main-box-title diagram">تراکنش‌های اخیر</div>
                    {
                        transfers.slice(0, 6).length ?
                            <>
                                <div className="portfolio-transfer-row title">
                                    <div className="portfolio-transfer-row-item bigger">تاریخ</div>
                                    <div className="portfolio-transfer-row-item">نوع</div>
                                    <div className="portfolio-transfer-row-item">رمزارز</div>
                                    <div className="portfolio-transfer-row-item">مقدار</div>
                                    <div className="portfolio-transfer-row-item">ارزش</div>
                                </div>
                                {
                                    transfers.slice(0, 6).map((item, index) =>
                                        <div key={index} className="portfolio-transfer-row">
                                            <div className="portfolio-transfer-row-item bigger">{new Date(item.createdAt).toLocaleDateString("fa-ir", {month: "long", day: "numeric", year: "numeric"})}</div>
                                            <div className={`portfolio-transfer-row-item ${item.type === "deposit" ? "green" : "red"}`}>{item.type === "deposit" ? "واریز" : "برداشت"}</div>
                                            <div className="portfolio-transfer-row-item">{item.currency}</div>
                                            <div className="portfolio-transfer-row-item">{showNumber(item.amount, 4)}</div>
                                            <div className="portfolio-transfer-row-item">{showNumber(item.usdtAmount, 0)} دلار</div>
                                        </div>,
                                    )
                                }
                            </>
                            :
                            <div>تراکنشی وجود ندارد.</div>
                    }
                </div>
            </div>

            {
                selectedExchange &&
                <Material className="portfolio-delete" style={{backgroundColor: createMaterialColor({variable: "--toast-fail-text", alpha: "0.1"})}}>
                    <div>حذف حساب {name}</div>
                    <TrashSvg className="portfolio-delete-icon"/>
                </Material>
            }

            {
                addingPortfolio &&
                <AddPortfolio close={togglePortfolio(false)}/>
            }
        </>
    )
}

export default Portfolio