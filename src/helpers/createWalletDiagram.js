import showNumber from "./showNumber"

function createWalletDiagram({accounts, balance})
{
    let data = Object.values(accounts).reduce((sum, item) =>
            ({
                ...sum, ...(item.balanceInUSDT / balance >= 0.1 ?
                    {[item.currency]: {name: item.currency, value: item.balanceInUSDT}}
                    :
                    {other: {name: "Other", value: (sum.other?.value ?? 0) + item.balanceInUSDT}}),
            })
        , {})

    data = Object.values(data).map(item => ({name: `${item.name} ${showNumber(item.value / balance * 100, 1)}%`, value: item.value}))

    return {
        grid: {
            left: "0",
            right: "0",
            bottom: "0",
            containLabel: true,
        },
        textStyle: {
            fontFamily: "my-font-bold",
            fontSize: 14,
        },
        series: [
            {
                name: "Access From",
                type: "pie",
                radius: ["60%", "80%"],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderColor: "#121418",
                    borderWidth: 4,
                },
                label: {
                    color: "#FFF",
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 16,
                        fontWeight: "bold",
                    },
                },
                labelLine: {
                    show: false,
                },
                data,
            },
        ],
    }
}

export default createWalletDiagram