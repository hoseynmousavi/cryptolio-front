import Button from "../components/Button"
import Material from "../components/Material"
import createMaterialColor from "../../helpers/createMaterialColor"
import OffSvg from "../../media/svg/OffSvg"
import logoutManager from "../../helpers/logoutManager"

function Account()
{
    function logout()
    {
        logoutManager.logout()
    }

    return (
        <>
            <div className="home-main-name">خرید اشتراک کریپتولیو</div>
            <div className="home-main-welcome">.با خرید اشتراک کریپتولیو، از خدمات ما به صورت کامل استفاده کنید</div>

            <div className="account-plans">
                <div className="account-plans-item">
                    <div className="account-plans-item-title">اشتراک ۱ ماهه</div>
                    <div className="account-plans-item-desc">۲۵ دلار</div>
                    <div className="account-plans-item-text">یک ماه استفاده از تمامی خدمات ویژه کریپتولیو</div>
                    <Button>تمدید اشتراک</Button>
                </div>
                <div className="account-plans-item">
                    <div className="account-plans-item-title">اشتراک ۱ ماهه</div>
                    <div className="account-plans-item-desc">۲۵ دلار</div>
                    <div className="account-plans-item-text">یک ماه استفاده از تمامی خدمات ویژه کریپتولیو</div>
                    <Button>تمدید اشتراک</Button>
                </div>
                <div className="account-plans-item">
                    <div className="account-plans-item-title">اشتراک ۱ ماهه</div>
                    <div className="account-plans-item-desc">۲۵ دلار</div>
                    <div className="account-plans-item-text">یک ماه استفاده از تمامی خدمات ویژه کریپتولیو</div>
                    <Button>تمدید اشتراک</Button>
                </div>
            </div>

            <Material className="portfolio-delete" style={{backgroundColor: createMaterialColor({variable: "--toast-fail-text", alpha: "0.1"})}} onClick={logout}>
                <div>خروج از حساب کاربری</div>
                <OffSvg className="portfolio-delete-icon logout"/>
            </Material>
        </>
    )
}

export default Account