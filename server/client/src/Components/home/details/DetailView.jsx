import { Box, Grid, styled } from '@mui/material';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../../redux/actions/productAction";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";

const Component = styled(Box)`
background:#F2F2F2,
margin-top:55px
`

const Container = styled(Grid)(({theme})=>({
    background:'#ffffff',
    disply:'flex',
    [theme.breakpoints.down('md')]:{
        margin:0
    }
}))


const RightContainer = styled(Grid)`
    margin-top:50px;
    padding:10px 18px;
`

const DetailView = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);

    useEffect(() => {
        if (product && id !== product.id)
            dispatch(getProductDetails(id));
    }, [dispatch, id, loading]);

    return (
        <Component>
            {
                product && Object.keys(product).length > 0 &&
                <Grid container>
                    <Container item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Container>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                    <ProductDetail product={product}/>
                    </RightContainer>
                </Grid>
            }
        </Component>
    )
}

export default DetailView;