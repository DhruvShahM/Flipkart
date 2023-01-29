import { AppBar, Toolbar, Box,Typography,IconButton,Drawer,List,ListItem, styled   } from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButton';
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const StyledHeader = styled(AppBar)`
  background:#2874f0;
  height:55px;
`;

const Component = styled(Link)`
margin-left:12%;
line-height:0;
text-decoration:none;
color:inherit
`

const SubHeading = styled(Typography)`
    font-size:10px;
    font-style:italic
`

const PlusImg=styled('img')({
    width:10,
    height:10,
    marginLeft:4
})

const CustomButtonWrapper=styled(Box)(({theme})=>({
    margin:'0 5% 0 auto',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}))

const MenuButton=styled(MenuIcon)(({theme})=>({
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}));

const Header = () => {
    const logoUrl = `https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png`;
    const subURL=`https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png`;

    const [open,setOpen]=useState(false);

    const handleOpen=()=>{
        setOpen(true);
    };

    const handleClose=()=>{
        setOpen(false);
    }

    const list=()=>{
        return <Box style={{width:200}} onClick={handleClose}>
             <List>
                 <ListItem button>
                     <CustomButtons/>
                 </ListItem>
             </List>
         </Box>
     }

    return (
        <StyledHeader>
            <Toolbar style={{minHeight:55}} >
            {/* style={{marginLeft:0}} */}
            <IconButton aria-label="delete" style={{color:'inherit'}} onClick={handleOpen}>
                <MenuButton />
            </IconButton>
            <Drawer open={open} onClose={ handleClose }>
                {list()}
            </Drawer>
                <Component to={'/'} >
                    <img src={logoUrl} alt="logo" style={{ width: 75 }} />
                    <Box style={{display:'flex'}}>
                        <SubHeading>Explore 
                            <Box component="span" style={{color:'#FFE500'}}>&nbsp;Plus</Box></SubHeading>
                            <PlusImg src={subURL} alt="Sub-logo" />
                    </Box>
                </Component>
                <Search/>
                <CustomButtonWrapper>
                    <CustomButtons/>
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}


export default Header;