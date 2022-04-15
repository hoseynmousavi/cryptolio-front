import regexConstant from "../constant/regexConstant"

function checkIfSignal({text})
{
    const message = text.toLowerCase()
        .replaceAll(regexConstant.emoji, "")
        .replaceAll("#", "")
        .replaceAll(" ", "")
        .replaceAll("\n", " ")
    let pair, entry, target, stop = null
    pair = message.match(regexConstant.pair)?.[0]?.replace("pair:", "")?.toUpperCase()
    entry = message.match(regexConstant.entry)?.[0]?.replace("entry:", "").split("-")
    target = message.match(regexConstant.target)?.[0]?.replace("target:", "").split("-")
    stop = message.match(regexConstant.stop)?.[0]?.replace("stop:", "")

    if (pair && entry && target && stop)
    {
        return {message, pair, stop, entry, target}
    }
    else
    {
        return false
    }
}

export default checkIfSignal