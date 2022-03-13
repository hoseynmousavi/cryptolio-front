function CalculatorSvg({className})
{
    return (
        <svg className={className} viewBox="0 0 60 60">
            <g transform="translate(-.083)">
                <path transform="translate(.083)" fill="none" d="M0 0h60v60H0z"/>
                <path transform="translate(19.083 15)" stroke="#ffd765" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3px" fill="none" d="M0 0h22v11H0z"/>
                <rect width="44" height="37" rx="4" transform="rotate(90 20.041 28.042)" stroke="#ffd765" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3px" fill="none"/>
                <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(18.083 32)" fill="#ffd765"/>
                <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(27.083 32)" fill="#ffd765"/>
                <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(36.083 32)" fill="#ffd765"/>
                <circle cx="3" cy="3" r="3" transform="translate(18.083 41)" fill="#ffd765"/>
                <circle cx="3" cy="3" r="3" transform="translate(27.083 41)" fill="#ffd765"/>
                <circle cx="3" cy="3" r="3" transform="translate(36.083 41)" fill="#ffd765"/>
            </g>
        </svg>
    )
}

export default CalculatorSvg