import Link from "./Link"
import Material from "./Material"

function SideBarItem({Icon, text, link, selectedTab})
{
    const isActive = link === selectedTab
    return (
        <Link className="home-side-item-link" to={link}>
            <Material className="home-side-item">
                <Icon isActive={isActive} className="home-side-logo"/>
                <div className={`home-side-name ${isActive ? "" : "disable"}`}>{text}</div>
            </Material>
        </Link>
    )
}

export default SideBarItem