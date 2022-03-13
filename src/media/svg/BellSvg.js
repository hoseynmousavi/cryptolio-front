function BellSvg({className, isActive})
{
    return (
        <svg className={className} viewBox="0 0 43 43">
            <path fill="none" d="M0 0h43v43H0z"/>
            <path d="M43.567 44.047A12.015 12.015 0 1 1 67.6 44.2v1.188c0 5.99 1.255 9.471 2.359 11.378a1.339 1.339 0 0 1-1.159 2.005H42.362a1.339 1.339 0 0 1-1.155-2.008c1.1-1.908 2.359-5.388 2.359-11.378z" transform="translate(-34.081 -26.562)" stroke={isActive ? "var(--first-color)" : "var(--disable-bg-color)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3px" fill="none"/>
            <path d="M96 192v1.339a5.354 5.354 0 1 0 10.709 0V192" transform="translate(-79.854 -159.791)" stroke={isActive ? "var(--first-color)" : "var(--disable-bg-color)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3px" fill="none"/>
        </svg>
    )
}

export default BellSvg