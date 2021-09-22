import React from "react";
import styles from './Money.module.css'
import SelectCurrency from "./SelectCurrency/SelectCurrency";
import ExchangeTable from "./ExchangeTable/ExchangeTable";
import axios from "axios";

const currency = [
    {id: 1, name: "UAH"},
    {id: 2, name: "USD"},
    {id: 3, name: "EUR"},
    {id: 4, name: "PLN"},
    {id: 5, name: "RUB"},
    {id: 6, name: "BYN"},
    {id: 7, name: "GBP"},
    {id: 8, name: "ILS"},
    {id: 9, name: "CNY"},
    {id: 10, name: "JPY"}
]

const Money = () => {
    const [moneyItems, setMoneyItems] = React.useState([])

    React.useEffect(() => {
        axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            .then((response) => {
                setMoneyItems(response.data);
            });
    }, []);

    return (
        <main className={styles.mainContainer}>
            <SelectCurrency currency={currency} />
            <ExchangeTable moneyItems={moneyItems} currency={currency} />
        </main>
    )
}

export default Money