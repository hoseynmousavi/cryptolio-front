function UserSvg({className, isActive})
{
    return (
        <svg className={className} viewBox="0 0 43 43">
            <g transform="translate(.213 .213)">
                <path transform="translate(-.213 -.213)" fill="none" d="M0 0h43v43H0z"/>
                <circle cx="10.5" cy="10.5" r="10.5" transform="translate(10.787 5.787)" strokeMiterlimit="10" stroke={isActive ? "var(--first-color)" : "var(--disable-bg-color)"} strokeWidth="3px" fill="none"/>
                <path d="M31 169.375a18.766 18.766 0 0 1 32.5 0" transform="translate(-25.809 -133.188)" strokeLinecap="round" strokeLinejoin="round" stroke={isActive ? "var(--first-color)" : "var(--disable-bg-color)"} strokeWidth="3px" fill="none"/>
            </g>
        </svg>
    )
}

export default UserSvg