import ImageShow from "../components/ImageShow"
import logo from "../../media/images/logo.png"

function LandingPage()
{
    return (
        <>
            <header>
                <div>
                    <ImageShow className="landing-header-img" src={logo}  />
                    <h1>کریپتولیو</h1>
                </div>
                <div></div>
                <div></div>
            </header>
        </>
    )
}

export default LandingPage