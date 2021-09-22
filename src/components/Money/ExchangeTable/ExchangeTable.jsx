// import React from "react";
import styles from './ExchangeTable.module.css'

const ExchangeTable = (props) => {

    const resultArrayMoney = props.moneyItems.filter(item => props.currency.map((obj) => obj.name).includes(item.cc))

    const listMoneyItems = resultArrayMoney.map((obj) =>
        <tr key={obj.cc}>
            <td>{obj.cc}</td>
            <td>{obj.rate}</td>
        </tr>
    )

    return (
        <table className={styles.currencyTable}>
            <tbody>
                <tr>
                    <th>Валюта</th>
                    <th>Курс</th>
                </tr>
                {listMoneyItems}
            </tbody>
        </table>
    )
}

export default ExchangeTable