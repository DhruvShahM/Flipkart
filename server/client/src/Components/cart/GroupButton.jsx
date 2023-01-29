import { Button, ButtonGroup, styled } from "@mui/material";
import { useState } from "react";
import { useDispatch } from 'react-redux';
// import { useSelector } from "react-redux";
// import {addToCart} from '../../redux/actions/cartAction';
const Component = styled(ButtonGroup)`
    margin-top:30px;
`
const StyledButton=styled(Button)`
    border-radius:50%;
`



const GroupButton = () => {

    const [ counter, setCounter ] = useState(1);
    // const { cartItems } = useSelector(state => state.cart);
    // console.log(cartItems);
    // const dispatch=useDispatch();

    const handleIncrement = () => {
        // const {id}=cartItems[0];
        setCounter(counter => counter + 1 );
        // dispatch(addToCart(id,2));
    };

    const handleDecrement = () => {
        setCounter(counter => counter - 1 );
    };

    return (
        <Component>
                <StyledButton onClick={()=>handleDecrement()}>-</StyledButton>
                <StyledButton disabled>{counter}</StyledButton>
                <StyledButton onClick={()=>handleIncrement()}>+</StyledButton>
        </Component>
    )
}

export default GroupButton;