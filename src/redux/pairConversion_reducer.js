import axios from "axios";

const SELECT_CURRENCY_CHANGING = "SELECT_CURRENCY_CHANGING";
const SELECT_CURRENCY_GET = "SELECT_CURRENCY_GET";
const SET_PAIR_EXCHANGE = "SET_PAIR_EXCHANGE";
const SET_INPUT_CHANGING = "SET_INPUT_CHANGING";
const SET_INPUT_GET = "SET_INPUT_GET";

let initialState = {
    pairExchange: 0,
    changingCurrency: 'UAH',
    getCurrency: 'UAH',
    changingInput: 0,
    getInput: 0,
}

let pairConversionReducer = (state = initialState, action) => {
    switch (action.type) {

        case SELECT_CURRENCY_CHANGING:
            return {
                ...state,
                changingCurrency: action.body,
                // getInput: state.changingInput * state.pairExchange
            };

        case SELECT_CURRENCY_GET:
            return {
                ...state,
                getCurrency: action.body,
                // changingInput: state.getInput * state.pairExchange
            };

        case SET_PAIR_EXCHANGE:
            return {
                ...state,
                pairExchange: action.payload,
                getInput: state.changingInput * action.payload
            };

        case SET_INPUT_CHANGING:
            return {
                ...state,
                changingInput: action.body,
                getInput: action.body * state.pairExchange
            };

        case SET_INPUT_GET:
            return {
                ...state,
                changingInput: action.body / state.pairExchange,
                getInput: action.body

            };

        default:
            return state;
    }
}

export const changingCurrencyAC = (changeItem) => ({ type: SELECT_CURRENCY_CHANGING, body: changeItem });
export const getCurrencyAC = (getItem) => ({ type: SELECT_CURRENCY_GET, body: getItem });
export const setPairExchangeAC = (items) => ({ type: SET_PAIR_EXCHANGE, payload: items });
export const updateChangingInputAC = (numberChange) => ({ type: SET_INPUT_CHANGING, body: numberChange });
export const getInputAC = (numberGet) => ({ type: SET_INPUT_GET, body: numberGet });

export const setPairExchange = (changingCurrency, getCurrency, changeItem, getItem) => async (dispatch) => {
    let response = await axios.get(`https://v6.exchangerate-api.com/v6/17e0d61631e1748a100b5104/pair/${changingCurrency}/${getCurrency}`)
    dispatch(setPairExchangeAC(response.data.conversion_rate))
};

export default pairConversionReducer;