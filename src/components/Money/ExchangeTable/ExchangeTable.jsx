// import React from "react";
import styles from './ExchangeTable.module.css'

const ExchangeTable = () => {

    return (
        <table className={styles.currencyTable}>
            <tr>
                <th>Валюта</th>
                <th>Покупка</th>
                <th>Продажа</th>
            </tr>
            <tr>
                <td>UAH</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>USD</td>
                <td>27</td>
                <td>26</td>
            </tr>
            <tr>
                <td>EUR</td>
                <td>33</td>
                <td>30</td>
            </tr>
            <tr>
                <td>PLN</td>
                <td>7</td>
                <td>6.5</td>
            </tr>
            <tr>
                <td>RUB</td>
                <td>3</td>
                <td>2.5</td>
            </tr>
        </table>
    )
}

export default ExchangeTable