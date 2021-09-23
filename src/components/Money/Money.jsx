import React, {Fragment} from "react";
import { useSelector, useDispatch } from 'react-redux';
import SelectCurrency from "./SelectCurrency/SelectCurrency";
import ExchangeTable from "./ExchangeTable/ExchangeTable";
import {changeCurrencyAC, setCurrency} from "../../redux/currency_reducer";
import ChangePage from "../ChangePage/ChangePage";

const Money = () => {

    const dispatch = useDispatch()
    const {actualCurrencyList, selectedCurrency, isLoaded, neededCurrency } = useSelector(({ currencyReducer }) => currencyReducer);

    const handleUpdateCurrency = (item) => {
        dispatch(changeCurrencyAC(item));
    };

    React.useEffect(() => {
        dispatch(setCurrency(selectedCurrency))
    }, [dispatch, selectedCurrency])

    return (
        <Fragment>
            <SelectCurrency handleUpdateCurrency={handleUpdateCurrency} valueSelect={selectedCurrency} />
            <ExchangeTable currencyList={actualCurrencyList} isLoaded={isLoaded} neededCurrency={neededCurrency} />
            <ChangePage text={'Подробный конвертер'} destination={'/detailedconverter'} />
        </Fragment>
    )
}

export default Money