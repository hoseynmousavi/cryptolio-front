function countData({userExchanges, selectedExchange})
{
    const userExchangesArr = Object.values(userExchanges)
    const {name, data: {balance, available, profitOrLoss, profitOrLossPercent, diagram, accounts, withdraws, deposits}} =
        selectedExchange ?
            userExchanges[selectedExchange]
            :
            {
                name: "همه صرافی‌ها",
                data: userExchangesArr.reduce((sum, item) => ({
                        balance: sum.balance + item.data.balance,
                        available: sum.available + item.data.available,
                        profitOrLoss: sum.profitOrLoss + item.data.profitOrLoss,
                        profitOrLossPercent: sum.profitOrLossPercent + item.data.profitOrLossPercent,
                        diagram: [...sum.diagram, {name: item.name, diagram: item.data.diagram}],
                        accounts: {
                            ...sum.accounts, ...item.data.accounts.reduce((accountSum, accountItem) =>
                                ({
                                    ...accountSum, [accountItem.currency]: {
                                        currency: accountItem.currency,
                                        balance: (sum.accounts[accountItem.currency]?.balance ?? 0) + accountItem.balance,
                                        balanceInUSDT: (sum.accounts[accountItem.currency]?.balanceInUSDT ?? 0) + accountItem.balanceInUSDT,
                                    },
                                }), {},
                            ),
                        },
                        withdraws: [...sum.withdraws, ...item.data.withdraws],
                        deposits: [...sum.deposits, ...item.data.deposits],
                    }),
                    {balance: 0, available: 0, profitOrLoss: 0, profitOrLossPercent: 0, diagram: [], accounts: {}, withdraws: [], deposits: []},
                ),
            }

    return {name, data: {balance, available, profitOrLoss, profitOrLossPercent, diagram, accounts, withdraws, deposits}}
}

export default countData