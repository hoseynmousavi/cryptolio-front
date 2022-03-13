function setCssVariables()
{
    fitVariables()

    function fitVariables()
    {
        const clientHeight = window.innerHeight

        document.documentElement.style.setProperty(
            "--full-height",
            clientHeight + "px",
        )
    }

    window.addEventListener("resize", fitVariables, {passive: true})
}

export default setCssVariables