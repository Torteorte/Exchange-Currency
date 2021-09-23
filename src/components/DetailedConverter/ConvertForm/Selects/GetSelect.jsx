import React from "react";
import styles from "./Select.module.scss"
import ListCurrency from "../../../common/ListCurrency";

const ChangingSelect = (props) => {

    const getCurrency = (e) => {
        let body = e.target.value;
        props.getCurrency(body);
    }

    const onGetInput = (e) => {
        let body = e.target.value;
        props.onGetInput(body);
    }

    return (
        <div className={styles.get}>
            <label htmlFor="get">Получаю:</label>
            <select name="currencyGet" id="currencyGet" onChange={getCurrency} value={props.valueSelect}>
                <ListCurrency />
            </select>
            <input type="number" name="get" value={props.getInput}
                   onChange={onGetInput}
            />
        </div>
    )
}

export default ChangingSelect