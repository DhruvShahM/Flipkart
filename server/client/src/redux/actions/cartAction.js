import axios from 'axios';
import * as  actionTypes from '../constants/cartConstants';
const { REACT_APP_API_HOST } = process.env;
const url = REACT_APP_API_HOST;

export const addToCart = (id, quantity) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${url}/product/${id}`);
        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } })
    } catch (error) {
        dispatch({ type: actionTypes.ADD_TO_CART_ERROR, payload: error.message })
    }
}

export const removeFromCart = (id) => (dispatch) => {
    dispatch({ type: actionTypes.REOMVE_FROM_CART, id: id });
}

export const removeQuantityFromCart = (id, quantity) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${url}/product/${id}`);
        dispatch({ type: actionTypes.REMOVE_QUANTITY_TO_CART, payload: { ...data, quantity } })
    } catch (error) {
        dispatch({ type: actionTypes.REMOVE_QUANTITY_TO_CART_ERROR, payload: error.message })
    }
}

