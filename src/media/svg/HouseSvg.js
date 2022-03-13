function HouseSvg({className, isActive})
{
    return (
        <svg className={className} viewBox="0 0 43 43">
            <path fill="none" d="M0 0h43v43H0z"/>
            <path d="M57.681 62.147v-7.578a1.263 1.263 0 0 0-1.263-1.263h-5.052a1.263 1.263 0 0 0-1.266 1.263v7.578a1.263 1.263 0 0 1-1.26 1.263h-7.577A1.263 1.263 0 0 1 40 62.148V47.55a1.263 1.263 0 0 1 .413-.934l12.63-11.483a1.263 1.263 0 0 1 1.7 0l12.63 11.483a1.263 1.263 0 0 1 .413.935v14.6a1.263 1.263 0 0 1-1.263 1.263h-7.579a1.263 1.263 0 0 1-1.263-1.263z" transform="translate(-33.717 -29.342)" stroke={isActive ? "var(--first-color)" : "var(--disable-bg-color)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3px" fill="none"/>
        </svg>
    )
}

export default HouseSvg