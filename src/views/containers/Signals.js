import Button from "../components/Button"
import {useContext, useState} from "react"
import {AuthContext} from "../../context/auth/AuthReducer"
import checkIfSignal from "../../helpers/checkIfSignal"
import request from "../../request/request"
import apiUrlsConstant from "../../constant/apiUrlsConstant"
import toastManager from "../../helpers/toastManager"

function Signals({signals})
{
    const [percent, setPercent] = useState("")
    const [value, setValue] = useState("")
    const {state: {role, _id, full_name}} = useContext(AuthContext)
    const disable = !checkIfSignal({text: value}) || !(percent && +percent <= 100 && +percent > 0)

    function onChange(e)
    {
        const {value} = e.target
        setValue(value)
    }

    function onChangePercent(e)
    {
        const {value} = e.target
        setPercent(value)
    }

    function submit()
    {
        const {pair, stop, entry, target} = checkIfSignal({text: value})
        const data = {
            signal: {
                message: value,
                user_sender_id: _id,
                title: full_name,
                pair,
                stop,
                entry,
                target,
                use_percent: percent,
            },
        }
        request.post({url: apiUrlsConstant.postSignals, data})
            .then(() =>
            {
                setPercent("")
                setValue("")
                toastManager.addToast({message: "سیگنال با موفقیت ثبت شد"})
            })
    }

    return (
        <>
            {
                role === "admin" ?
                    <>
                        <div className="home-main-name">پنل سیگنال</div>
                        <div className="home-main-welcome">بارگزاری، ویرایش و بروزرسانی سیگنال‌ها برای کاربران</div>

                        <div className="signal-add-title">بارگزاری سیگنال در کانال رسمی کوین‌جت</div>

                        <input className="signal-add-percent" type="number" value={percent} placeholder="درصد استفاده از موجودی حساب را مشخص کنید" maxLength={3} onChange={onChangePercent}/>
                        <textarea className="signal-add-area" value={value} placeholder="سیگنال خود را در فرمت استاندارد اینجا قرار دهید" onChange={onChange}/>
                        <Button className="signal-add-submit" disable={disable} onClick={submit}>تایید</Button>
                    </>
                    :
                    <>
                        <div className="home-main-name">دنبال کردن کانال‌های رسمی سیگنال</div>
                        <div className="home-main-welcome">با دنبال کردن کانال‌های رسمی سیگنال‌دهی، موفقیت‌تان را تضمین کنید!</div>

                        <div className="account-plans signal">
                            <div className="account-plans-item signal">
                                <div className="account-plans-item-title">کانال رسمی "کوین‌جت"</div>
                                <div className="account-plans-item-desc signal">ارائه بهترین سیگنال‌های تایید شده</div>
                                {
                                    signals?.length > 0 &&
                                    <div className="signal-items">
                                        <div className="signal-item-title">
                                            لیست سیگنال‌ها:
                                        </div>
                                        {
                                            signals.map(item =>
                                                <div className="signal-item-text">
                                                    <div className="signal-item-text-bullet"/>
                                                    <div>
                                                        سیگنال
                                                        {` ${item.pair} `}
                                                        با درصد
                                                        {` ${item.use_percent} `}
                                                        بارگزاری شده توسط
                                                        {` "${item.title}" `}
                                                        با شناسه‌ی
                                                        {` "${item._id.slice(0, 3)}"`}
                                                    </div>
                                                </div>,
                                            )
                                        }
                                    </div>
                                }
                                <Button>غیر فعال کردن</Button>
                            </div>
                            <div className="account-plans-item signal disable">
                                <div className="account-plans-item-title">کانال "تحلیل‌گران کریپتو"</div>
                                <div className="account-plans-item-desc signal disable">ارائه روزانه حداقل ۲ سیگنال توسط متخصصین</div>
                                <Button disable>فعال کردن</Button>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}

export default Signals