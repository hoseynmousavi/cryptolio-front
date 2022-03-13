import MoneySvg from "../../media/svg/MoneySvg"
import showNumber from "../../helpers/showNumber"
import ChartSvg from "../../media/svg/ChartSvg"
import CalculatorSvg from "../../media/svg/CalculatorSvg"

function WalletDetail({balance, available, profitOrLoss, profitOrLossPercent})
{
    return (
        <div className="home-main-box">
            <div className="home-main-box-item">
                <MoneySvg className="home-main-box-item-icon"/>
                <div className="home-main-box-item-desc">ارزش دارایی شما</div>
                <div className="home-main-box-item-title">{showNumber(balance, 0)} دلار</div>
            </div>
            <div className="home-main-box-item">
                <ChartSvg className="home-main-box-item-icon"/>
                <div className="home-main-box-item-desc">دارایی آزاد</div>
                <div className="home-main-box-item-title">{showNumber(available, 0)} دلار</div>
            </div>
            <div className="home-main-box-item">
                <CalculatorSvg className="home-main-box-item-icon"/>
                <div className="home-main-box-item-desc">سود / زیان</div>
                <div className="home-main-box-item-title">
                    <div>
                        <div className="home-main-box-item-title-price">{showNumber(profitOrLoss, 0)}</div>
                        دلار
                    </div>
                    {
                        profitOrLoss > 0 &&
                        <div className={`home-main-box-item-title-percent ${profitOrLoss < 0 ? "fail" : ""}`}>
                            %{showNumber(profitOrLossPercent, 0)}
                            <span> </span>
                            <div className={`home-main-box-item-title-percent-icon ${profitOrLoss < 0 ? "fail" : ""}`}>▲</div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default WalletDetail