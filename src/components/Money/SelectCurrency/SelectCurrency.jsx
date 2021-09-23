// import React from "react";
import styles from './SelectCurrency.module.scss'
import ListCurrency from "../../common/ListCurrency";

const SelectCurrency = (props) => {

    const updateCurrency = (e) => {
        let body = e.target.value;
        props.handleUpdateCurrency(body);
    }

    return (
        <form className={styles.formSelect}>
            <label htmlFor="currency">Выберите валюту</label>
            <select name="currency" id="currency" onChange={updateCurrency} value={props.valueSelect}>
                <ListCurrency />
            </select>
        </form>
    )
}

export default SelectCurrency