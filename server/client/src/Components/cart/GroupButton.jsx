import { Button, ButtonGroup, styled } from "@mui/material";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {addToCart, removeQuantityFromCart} from '../../redux/actions/cartAction';
const Component = styled(ButtonGroup)`
    margin-top:30px;
`
const StyledButton=styled(Button)`
    border-radius:50%;
`



const GroupButton = ({product}) => {
    console.log('id',product.id);
    const [ counter, setCounter ] = useState(1);
    const dispatch=useDispatch();

    const handleIncrement = () => {
        setCounter(counter => counter + 1 );
        product.quantity+=1;
        dispatch(addToCart(product.id,product.quantity));
    };

    const handleDecrement = () => {
        if(product.quantity<2){
            return
        }
        product.quantity-=1;
        setCounter(counter => counter - 1 );
        dispatch(removeQuantityFromCart(product.id,product.quantity));
    };

    return (
        <Component>
                <StyledButton onClick={()=>handleDecrement()}>-</StyledButton>
                <StyledButton disabled>{product.quantity}</StyledButton>
                <StyledButton onClick={()=>handleIncrement()}>+</StyledButton>
        </Component>
    )
}

export default GroupButton;