// import React from "react";
import styles from './ExchangeTable.module.css'

const ExchangeTable = (props) => {

    const listMoneyItems = props.moneyItems.map((obj, index) =>
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