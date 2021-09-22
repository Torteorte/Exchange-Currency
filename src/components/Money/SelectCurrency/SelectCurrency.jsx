// import React from "react";
import styles from './SelectCurrency.module.css'

const SelectCurrency = (props) => {

    const listCurrency = props.currency.map((obj) =>
        <option key={obj.id} value={obj.name}>{obj.name}</option>
    )

    return (
        <form className={styles.formSelect}>
            <label>Выберите валюту</label>
            <select name="currency" id="currency">
                {listCurrency}
            </select>
        </form>
    )
}

export default SelectCurrency