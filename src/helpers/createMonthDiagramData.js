function createMonthDiagramData({diagram, legend = true})
{
    const colors = ["#6fc475", "#fd94b9", "#5b49b3", "#F3D9E0"]
    return {
        color: colors,
        legend: legend ? {
            data: diagram.reduce((sum, item) => [...sum, item.name], []),
            textStyle: {
                color: "#FFFFFF",
            },
        } : null,
        grid: {
            ...(legend ? {} : {top: 0}),
            left: "0",
            right: "0",
            bottom: "1%",
            containLabel: true,
        },
        tooltip: {
            trigger: "axis",
        },
        xAxis: {
            type: "category",
            data: diagram[0] ? [
                new Date(diagram[0].diagram.month6Date).toLocaleDateString("fa-ir", {month: "long"}),
                new Date(diagram[0].diagram.month5Date).toLocaleDateString("fa-ir", {month: "long"}),
                new Date(diagram[0].diagram.month4Date).toLocaleDateString("fa-ir", {month: "long"}),
                new Date(diagram[0].diagram.month3Date).toLocaleDateString("fa-ir", {month: "long"}),
                new Date(diagram[0].diagram.month2Date).toLocaleDateString("fa-ir", {month: "long"}),
                new Date(diagram[0].diagram.month1Date).toLocaleDateString("fa-ir", {month: "long"}),
            ] : [],
            textStyle: {
                fontSize: 28,
            },
        },
        yAxis: {
            type: "value",
            splitLine: {lineStyle: {color: "#3d3d3d"}},
        },
        series: diagram.reduce((sum, item) =>
                [
                    ...sum,
                    {
                        name: item.name,
                        data: [item.diagram.month6Balance, item.diagram.month5Balance, item.diagram.month4Balance, item.diagram.month3Balance, item.diagram.month2Balance, item.diagram.month1Balance],
                        type: "line",
                        smooth: true,
                        lineStyle: {width: 3},
                    },
                ],
            []),
    }
}

export default createMonthDiagramData