function MoneySvg({className})
{
    return (
        <svg className={className} viewBox="0 0 62 62">
            <g transform="translate(.296 .296)">
                <path transform="translate(-.296 -.296)" fill="none" d="M0 0h62v62H0z"/>
                <rect width="54" height="30" rx="4" transform="translate(3.704 15.704)" stroke="#ffd765" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3px" fill="none"/>
                <circle cx="8" cy="8" r="8" transform="translate(22.704 22.704)" stroke="#ffd765" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3px" fill="none"/>
                <path transform="translate(41.704 15.704)" stroke="#ffd765" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3px" fill="none" d="m0 0 16 13"/>
                <path transform="translate(41.704 32.704)" stroke="#ffd765" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3px" fill="none" d="M0 13 16 0"/>
                <path transform="translate(3.704 15.704)" stroke="#ffd765" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3px" fill="none" d="M16 0 0 13"/>
                <path transform="translate(3.704 32.704)" stroke="#ffd765" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3px" fill="none" d="M16 13 0 0"/>
            </g>
        </svg>
    )
}

export default MoneySvg