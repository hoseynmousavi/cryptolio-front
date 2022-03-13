function ChartLineSvg({className, isActive})
{
    return (
        <svg className={className} viewBox="0 0 43 43">
            <path fill="none" d="M0 0h43v43H0z"/>
            <path d="M64.4 75H32V48" transform="translate(-26.603 -40.096)" stroke={isActive ? "var(--first-color)" : "var(--disable-bg-color)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3px" fill="none"/>
            <path d="M61.7 64 48.2 77.5l-5.4-5.4L32 82.9" transform="translate(-26.605 -53.396)" stroke={isActive ? "var(--first-color)" : "var(--disable-bg-color)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3px" fill="none"/>
            <path d="M174.752 70.75V64H168" transform="translate(-139.656 -53.396)" stroke={isActive ? "var(--first-color)" : "var(--disable-bg-color)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3px" fill="none"/>
        </svg>
    )
}

export default ChartLineSvg