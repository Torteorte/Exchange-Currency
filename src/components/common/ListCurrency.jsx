import React from "react";
import {useSelector} from "react-redux";

const ListCurrency = () => {

    const neededCurrency = useSelector(({ currencyReducer }) => currencyReducer.neededCurrency);

    const listCurrency = neededCurrency.map((obj) =>
        <option key={obj.id} value={obj.name}>{obj.name}</option>
    )

    return (
        <>
            {listCurrency}
        </>
    )
}

export default ListCurrency