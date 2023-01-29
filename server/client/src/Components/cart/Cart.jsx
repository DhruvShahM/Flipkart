import { Box, Grid, Button, styled } from "@mui/material";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";

import { payUsingPaytm } from "../../services/api";
import { post } from "../../utils/paytm";

const Container = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    background: '#f2f2f2',
    height: 'inherit',
    [theme.breakpoints.down('md')]: {
        padding: '15px 0'
    }
}))

const Header = styled(Box)`
    padding:15px 24px;
    background:#fff;
`
const ButtonWrapper = styled(Box)`
    padding:16px 22px;
    background:#fff;
    box-shadow:0 -2px 10px 0 rgb(0 0 0/10%);
    border-top:1px solid #f0f0f0;
`

const StyledButton = styled(Button)`
    display:flex;
    margin-left:auto;
    background:#fb641b;
    color:#fff;
    width:250px;
    height:51px;
    border-radius:2px;
`

const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: '15px',
    [theme.breakpoints.down('md')]: {
        marginBottom: 15
    }
}))

const Cart = () => {
    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'dhruvshahlinkedin@gmail.com' });
        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        };
        post(information);
    }
    const { cartItems } = useSelector(state => state.cart);
    return (
        <>
            {
                cartItems && cartItems.length ?
                    <Container container>
                        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                            <Box>
                                <Header>My Cart ({cartItems.length})</Header>
                            </Box>
                            {
                                cartItems.map(item => {
                                    return <CartItem key={item.id} item={item} />
                                })
                            }
                            <ButtonWrapper>
                                <StyledButton onClick={() => buyNow()}>Place Order</StyledButton>
                            </ButtonWrapper>
                        </LeftComponent>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalView cartItems={cartItems} />
                        </Grid>
                    </Container>
                    : <EmptyCart />
            }
        </>
    );
};

export default Cart;