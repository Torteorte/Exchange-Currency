// import React from "react";
import styles from './ExchangeTable.module.scss'
import LoadCurrency from "../../common/LoadCurrency";

const ExchangeTable = (props) => {

    const resultArrayMoney = Object.entries(props.currencyList).filter(item => props.neededCurrency.map((obj) => obj.name).includes(item[0])).sort()

    const listMoneyItems = resultArrayMoney.map((obj) =>
        <tr key={obj[0]}>
            <td>{obj[0]}</td>
            <td>{obj[1]}</td>
        </tr>
    )

    return (
        <table className={styles.currencyTable}>
            <tbody>
            <tr>
                <th>Валюта</th>
                <th>Курс</th>
            </tr>
            {props.isLoaded
                ? listMoneyItems
                : Array(10).fill(0).map((_, index) => <LoadCurrency key={index} />)
            }
            </tbody>
        </table>
    )
}

export default ExchangeTable