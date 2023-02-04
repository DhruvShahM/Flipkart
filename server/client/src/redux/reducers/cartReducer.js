import * as actionType from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case actionType.ADD_TO_CART:
            const item= action.payload;
            const exist = state.cartItems.find(product => product.id === item.id);
            // if (exist) {
            //     debugger
            //     return { ...state, cartItems: state.cartItems.map(data => data.product === exist.product ? item : data) };
            // }
            // else {
            // }
            return { ...state, cartItems: [...state.cartItems, item] };
        case actionType.ADD_TO_CART_ERROR:
            return { error: action.payload };
        case actionType.REOMVE_FROM_CART:
            return { ...state, cartItems: state.cartItems.filter(product => product.id !== action.id) };
        case actionType.REMOVE_QUANTITY_TO_CART:
            const indexToRemove = state.cartItems.findLastIndex(product => product.id === action.payload.id);
            if (indexToRemove !== -1) {
                state.cartItems.splice(indexToRemove, 1);
            }
            return { ...state, cartItems: [...state.cartItems] }
            case actionType.REMOVE_QUANTITY_TO_CART_ERROR:
                return { error: action.payload };
        default:
            return state;
    }
}