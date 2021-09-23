import React from "react";
import styles from "./Select.module.scss"
import ListCurrency from "../../../common/ListCurrency";
import {setPairExchange} from "../../../../redux/pairConversion_reducer";

const ChangingSelect = (props) => {

    const changingCurrency = (e) => {
        let body = e.target.value;
        props.changingCurrency(body);
    }

    const onChangingInput = (e) => {
        let body = e.target.value;
        props.onChangingInput(body);
    }

    return (
        <div className={styles.changing}>
            <label htmlFor="changing">Меняю:</label>
            <select name="currencyChanging" id="currencyChanging" onChange={changingCurrency} value={props.valueSelect}>
                <ListCurrency />
            </select>
            <input type="number" name="changing" value={props.changingInput}
                   onChange={onChangingInput}
            />
        </div>
    )
}

export default ChangingSelect