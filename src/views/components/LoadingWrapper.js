import MyLoader from "../components/MyLoader"

function LoadingWrapper({fixed})
{
    return (
        <div className={`loading-wrapper ${fixed ? "fixed" : ""}`}>
            <MyLoader width={40}/>
        </div>
    )
}

export default LoadingWrapper