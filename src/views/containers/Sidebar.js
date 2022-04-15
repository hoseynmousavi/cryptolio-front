import ImageShow from "../components/ImageShow"
import logo from "../../media/images/logo.png"
import HouseSvg from "../../media/svg/HouseSvg"
import ChartLineSvg from "../../media/svg/ChartLineSvg"
import UserSvg from "../../media/svg/UserSvg"
import urlConstant from "../../constant/urlConstant"
import SideBarItem from "../components/SideBarItem"
import BellSvg from "../../media/svg/BellSvg"
import SignalSvg from "../../media/svg/SignalSvg"
import {useContext} from "react"
import {AuthContext} from "../../context/auth/AuthReducer"

function Sidebar({location})
{
    const selectedTab = urlConstant[location.replace("/", "")] || urlConstant.home
    const {state: {role}} = useContext(AuthContext)
    return (
        <div className="home-side">
            <div className="home-side-item-link main">
                <div className="home-side-item">
                    <ImageShow className="home-side-logo" src={logo}/>
                    <div className="home-side-name">کوین‌جت</div>
                </div>
            </div>
            <SideBarItem Icon={HouseSvg} text="داشبورد" link={urlConstant.home} selectedTab={selectedTab}/>
            <SideBarItem Icon={ChartLineSvg} text="تحلیل پورتفولیو" link={urlConstant.portfolio} selectedTab={selectedTab}/>
            <SideBarItem Icon={SignalSvg} text="سیگنال" link={urlConstant.signal} selectedTab={selectedTab}/>
            {
                role !== "admin" &&
                <SideBarItem Icon={BellSvg} text="پیام‌ها" link={urlConstant.notifications} selectedTab={selectedTab}/>
            }
            <SideBarItem Icon={UserSvg} text="حساب‌کاربری" link={urlConstant.account} selectedTab={selectedTab}/>
        </div>
    )
}

export default Sidebar