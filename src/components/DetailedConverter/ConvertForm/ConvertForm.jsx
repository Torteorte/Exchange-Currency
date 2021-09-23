import React from "react";
import styles from "./ConvertForm.module.scss"
import ChangingSelect from "./Selects/ChangingSelect";
import GetSelect from "./Selects/GetSelect";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrencyAC,
    changingCurrencyAC,
    setPairExchange, getInputAC, updateChangingInputAC
} from "../../../redux/pairConversion_reducer";

const DetailedConverter = () => {

    const dispatch = useDispatch()
    const {pairExchange, changingCurrency, getCurrency, changingInput, getInput} = useSelector(({ pairConversion }) => pairConversion);

    const handlerChangingCurrency = (changeItem) => {
        dispatch(changingCurrencyAC(changeItem));
    };

    const handlerGetCurrency = (getItem) => {
        dispatch(getCurrencyAC(getItem));
    };

    const onChangingInputAC = (numberChange) => {
        dispatch(updateChangingInputAC(numberChange));
    };

    const onGetInputAC = (numberGet) => {
        dispatch(getInputAC(numberGet));
    };

    React.useEffect(() => {
        dispatch(setPairExchange(changingCurrency, getCurrency))
    }, [dispatch, changingCurrency, getCurrency])

    return (
        <form className={styles.changeForm}>
            <ChangingSelect changingCurrency={handlerChangingCurrency}
                            changingInput={changingInput}
                            onChangingInput={onChangingInputAC}
                            pairExchange={pairExchange}
                            valueSelect={changingCurrency}
            />
            <GetSelect getCurrency={handlerGetCurrency}
                       getInput={getInput}
                       onGetInput={onGetInputAC}
                       pairExchange={pairExchange}
                       valueSelect={getCurrency}
            />
        </form>
    )
}

export default DetailedConverter