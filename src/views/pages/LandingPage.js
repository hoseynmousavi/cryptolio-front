import ImageShow from "../components/ImageShow"
import logo from "../../media/images/logo.png"
import main from "../../media/images/main.png"
import platforms from "../../media/images/platforms.png"
import mobile from "../../media/images/mobile.png"
import Link from "../components/Link"
import urlConstant from "../../constant/urlConstant"
import Button from "../components/Button"
import Material from "../components/Material"

function LandingPage()
{
    return (
        <>
            <header className="landing-header">
                <div className="landing-header-title">
                    <ImageShow className="landing-header-img" src={logo}/>
                    <h1>کوین‌جت</h1>
                </div>
                <div className="landing-header-items">
                    <Material className="landing-header-item">درباره ما</Material>
                    <Material className="landing-header-item">رودمپ</Material>
                    <Material className="landing-header-item">تیم کوین‌جت</Material>
                    <Material className="landing-header-item">تماس با ما</Material>
                </div>
                <Link to={urlConstant.login}>
                    <Button className="landing-header-btn">ورود به کوین‌جت</Button>
                </Link>
            </header>
            <div className="landing-top">
                <div className="landing-top-text">
                    <h2 className="landing-top-text-main">با خیال راحت سود کنید!</h2>
                    <div className="landing-top-text-desc">تمام حساب‌های رمزارز خود را از اینجا مدیریت کنید</div>
                    <Link to={urlConstant.login}>
                        <Button className="landing-header-btn">ورود به داشبورد</Button>
                    </Link>
                </div>
                <ImageShow className="landing-top-img" src={main}/>
            </div>

            <div className="landing-platforms">
                <div className="landing-platforms-title">با پشتیبانی از پلتفرم‌های</div>
                <ImageShow className="landing-platforms-img" src={platforms}/>
                <div className="landing-platforms-main">
                    <ImageShow className="landing-platforms-main-img" src={mobile}/>
                    <div className="landing-platforms-main-text">
                        <div className="landing-platforms-main-text-big">
                            به ۱۰ هزار نفری بپیوندید
                            <br/>
                            که به ما اعتماد کرده‌اند
                        </div>
                        <div className="landing-platforms-main-text-little">
                            کوین‌جت با فراهم‌کردن امکان مدیریت تمام حساب‌های رمزارز شما، با ارائه تحلیل‌های داده‌محور از فعالیت شما در این بازار، به سودآوری بیشتر شما کمک می‌کند.
                        </div>
                        <Link to={urlConstant.login}>
                            <Button className="landing-header-btn">ورود به داشبورد</Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="landing-stats">
                <div className="landing-stats-item">
                    <div className="landing-stats-item-count">10,376</div>
                    <div className="landing-stats-item-title">تعداد کاربران کوین‌جت</div>
                </div>
                <div className="landing-stats-item">
                    <div className="landing-stats-item-count">754,123</div>
                    <div className="landing-stats-item-title">تعداد تراکنش‌های گزارش و تحلیل شده</div>
                </div>
                <div className="landing-stats-item">
                    <div className="landing-stats-item-count">83</div>
                    <div className="landing-stats-item-title">تعداد کوین در حال پشتیبانی</div>
                </div>
            </div>

            <footer className="landing-footer">
                <div className="landing-header-title">
                    <ImageShow className="landing-header-img" src={logo}/>
                    <h1>کوین‌جت</h1>
                </div>
                <div className="landing-footer-items">
                    <Material className="landing-footer-item">سوالات متداول</Material>
                    <Material className="landing-footer-item">تماس با ما</Material>
                    <Material className="landing-footer-item">نقشه سایت</Material>
                    <Material className="landing-footer-item">قوانین و مقررات</Material>
                </div>
                <div>.تمامی حقوق متعلق به کوین‌جت است</div>
            </footer>
        </>
    )
}

export default LandingPage