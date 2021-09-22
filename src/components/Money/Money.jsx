// import React from "react";
import styles from './Money.module.css'
import SelectCurrency from "./SelectCurrency/SelectCurrency";
import ExchangeTable from "./ExchangeTable/ExchangeTable";

const Money = () => {

    return (
        <main className={styles.mainContainer}>
            <SelectCurrency />
            <ExchangeTable />
        </main>
    )
}

export default Money