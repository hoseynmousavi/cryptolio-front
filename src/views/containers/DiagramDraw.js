import ReactEcharts from "echarts-for-react"

function DiagramDraw({option, style})
{
    return <div style={{direction: "ltr"}}><ReactEcharts option={option} style={style} opts={{renderer: "canvas"}}/></div>
}

export default DiagramDraw