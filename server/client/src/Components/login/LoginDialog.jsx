import { Dialog, Box, TextField, Button, Typography, styled } from '@mui/material';
import {useState,useContext} from 'react';
import { authenticateSignup,authenticateLogin } from '../../services/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
height:70vh;
width:90vh;
`;

const Image = styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height:82%;
width:29%;
padding:45px 35px;
& > p, & > h5{
    color:#FFFFFF;
    font-weight:600;
}
`

const Wrapper = styled(Box)`
    display:flex;
    flex-direction:column;
    padding:25px 35px;
    flex:1;
    & > div, & > button, & > p {
        margin-top:20px;
    }
`

const LoginButton = styled(Button)`
    text-transform:none;
    background:#FB641B;
    color:#fff;
    height:48px;
    border-radius:2px;
`
const RequestButton = styled(Button)`
    text-transform:none;
    background:#fff;
    color:#2874f0;
    height:48px;
    border-radius:2px;
    box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`

const Text = styled(Typography)`
    font-size:12px;
    color:#878787;
`

const CreateAccount = styled(Typography)`
    font-size:14px;
    text-align:center;
    color:#2874F0;
    font-weight:600;
    cursor:pointer;
`
const Error=styled(Typography)`
    font-size:10px;
    color:#ff6161;
    line-height:0;
    margin-top:10px;
    font-weight:600;
`

const accountInitialValue={
    login:{
        view:'login',
        heading:'Login',
        subheading:'Get access to your orders, Wishlist and Recommendations'
    },
    signup:{
        view:'signup',
        heading:"Looks like you're new here",
        subheading:'Signup with your mobile number to get started'
    }
}

const signupIntitalValues={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}

const loginInittilValue={
    username:'',
    password:''
}

const LoginDialog = ({ open, setOpen }) => {
    const [account,toggleAccount]=useState(accountInitialValue.login);

    const [signup,setSignup]=useState(signupIntitalValues);
    const [login,setLogin]=useState(loginInittilValue);
    const [error,setError]=useState(false);

    const {setAccount}=useContext(DataContext);

    const handleClose = () => {
        toggleAccount(accountInitialValue.login);
        setOpen(false);
        setError(false);
    }

    const toggleSignup=()=>{
        toggleAccount(accountInitialValue.signup);
    }

    const onInputChange=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value})
        console.log(signup);
    }

    const signupUser=async ()=>{
        let response=await authenticateSignup(signup);
        if(!response)
            return;
        handleClose();    
        console.log(response);
        setAccount(signup.firstname);
    }

    const loginInitialValue={
        username:'',
        password :''
    }

    const onValueChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value});
    }

    const loginUser=async ()=>{
       const response= await authenticateLogin(login);
       if(response.status===200){
        handleClose();
        setAccount(response.data.data.firstname);
       }
       else{
        setError(true);
       }
        
    };

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                            <Typography variant='h5'>{account.heading}</Typography>
                            <Typography style={{ marginTop: 20 }}>{account.subheading}</Typography>
                    </Image>
                    {account.view==='login' ? <Wrapper>
                        <TextField variant='standard' onChange={(e)=>onValueChange(e)} name="username" label="Enter username"></TextField>
                       { error && <Error>Please enter valid username or password</Error> }
                        <TextField variant='standard' onChange={(e)=>onValueChange(e)} name="password"  label="Enter Password"></TextField>
                        <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                        <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                        <Typography style={{ textAlign: 'center' }}>OR</Typography>
                        <RequestButton>Request OTP</RequestButton>
                        <CreateAccount onClick={()=>toggleSignup(0)}>New to Flipkart? Create an account</CreateAccount>
                    </Wrapper> : <Wrapper>
                        <TextField onChange={(e)=>onInputChange(e)} variant='standard' name="firstname" label="Enter Firstname"></TextField>
                        <TextField onChange={(e)=>onInputChange(e)} variant='standard' name="lastname" label="Enter Lastname"></TextField>
                        <TextField name="username" onChange={(e)=>onInputChange(e)} variant='standard' label="Enter Username"></TextField>
                        <TextField name="email" onChange={(e)=>onInputChange(e)} variant='standard' label="Enter Email"></TextField>
                        <TextField name="password" onChange={(e)=>onInputChange(e)} variant='standard' label="Enter Password"></TextField>
                        <TextField name="phone" onChange={(e)=>onInputChange(e)} variant='standard' label="Enter Phone"></TextField>
                        <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
                    </Wrapper>}
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;