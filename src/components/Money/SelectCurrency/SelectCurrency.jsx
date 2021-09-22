// import React from "react";
import styles from './SelectCurrency.module.css'

const SelectCurrency = () => {

    return (
        <form className={styles.formSelect}>
            <label>Выберите валюту</label>
            <select name="currency" id="currency">
                <option value='UAH'>UAH</option>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
                <option value='PLN'>PLN</option>
                <option value='RUB'>RUB</option>
            </select>
        </form>
    )
}

export default SelectCurrency