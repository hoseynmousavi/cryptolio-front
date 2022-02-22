function showNumber(number, fixed = 9)
{
    if (number) return +number.toFixed(fixed)
    else return number
}

export default showNumber