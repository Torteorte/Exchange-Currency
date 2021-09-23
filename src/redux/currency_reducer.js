import axios from "axios";

const SELECT_CURRENCY = "SELECT_CURRENCY";
const SET_CURRENCY_ITEMS = "SET_CURRENCY_ITEMS";
const SET_LOADED = "SET_LOADED";

let initialState = {
    actualCurrencyList: [],
    selectedCurrency: 'UAH',
    isLoaded: false,
    neededCurrency: [
        { id: 1, name: "UAH" },
        { id: 2, name: "USD" },
        { id: 3, name: "EUR" },
        { id: 4, name: "PLN" },
        { id: 5, name: "RUB" },
        { id: 6, name: "BYN" },
        { id: 7, name: "GBP" },
        { id: 8, name: "ILS" },
        { id: 9, name: "CNY" },
        { id: 10, name: "JPY" }
    ],
}

let currencyReducer = (state = initialState, action) => {
    switch (action.type) {

        case SELECT_CURRENCY:
            return {
                ...state,
                selectedCurrency: action.body
            };

        case SET_CURRENCY_ITEMS:
            return {
                ...state,
                actualCurrencyList: action.payload, isLoaded: true
            };

        case SET_LOADED:
            return {
                ...state, isLoaded: action.payload,
            };

        default:
            return state;
    }
}

export const changeCurrencyAC = (currency) => ({ type: SELECT_CURRENCY, body: currency });
export const setCurrencyAC = (items) => ({ type: SET_CURRENCY_ITEMS, payload: items });
export const setLoaded = (payload) => ({ type: 'SET_LOADED', payload });

export const setCurrency = (selectCurrency) => async (dispatch) => {
    dispatch(setLoaded(false))
    let response = await axios.get(`https://v6.exchangerate-api.com/v6/17e0d61631e1748a100b5104/latest/${selectCurrency}`)
    dispatch(setCurrencyAC(response.data.conversion_rates))
};

export default currencyReducer;