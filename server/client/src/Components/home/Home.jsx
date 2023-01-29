import Banner from './Banner';
import NavBar from './Navbar';
import { Box } from '@mui/material';
import { styled } from '@mui/material';
import { useEffect } from 'react';
import { getProducts } from '../../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

const Component = styled(Box)`
    padding:10px;
    background:#F2F2F2;
`;

const Home = () => {
    const { products } = useSelector(state => state.getProducts);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} title="Deal of the day" timer={true} />
                <MidSection />
                <Slide products={products} title="Discount for you" timer={false}/>
                <Slide products={products} title="Suggesting Items" timer={false}/>
                <Slide products={products} title="Top selection" timer={false}/>
                <Slide products={products} title="Recommended Items" timer={false}/>
                <Slide products={products} title="Top deals on accessories" timer={false}/>
                <Slide products={products} title="Trending Offers" timer={false}/>
            </Component>
        </>
    )
}
export default Home;