function showNumber(number, fixed = 8)
{
    if (number) return +number.toFixed(fixed)
    else return number
}

export default showNumber