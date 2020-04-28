import React, {useState} from 'react';
import Login from '../../Components/Login/signIn';
import Api from '../../config/config';
import {useHistory} from "react-router";
import {BASE_URL} from '../../Constant';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
export default function SignInSide(props) {
    const history=useHistory();
    const [value,setvalue]=useState({
        email:'',
        password:'',
        showPassword: false,
    })

    const handleChange =(event) =>{
        let {name,value}=event.target;
        setvalue( prevState => ({
            ...prevState,
            [name] : value
        }))
    }
    const handleClickShowPassword = () => {
        setvalue({ ...value, showPassword: !value.showPassword });
    };
    const notify = (msg) => toast.error(msg,{
        position: toast.POSITION.TOP_CENTER
    });

    const handleSubmit =() =>{
        Api("",{email:value.email,password:value.password},"getAuth").then((res)=>{
            // console.log(res)
            const name=res.user.displayName!=null && res.user.displayName.split(' ');
            const data={
                id: res.user.uid,
                email:res.user.email,
                firstName:name[0],
                lastName:name[1],
                address:'',
                cnumber:res.user.phoneNumber
            }
            localStorage.setItem('user', JSON.stringify(data));
            localStorage.setItem('accessToken', res.credential!=null && res.credential.accessToken);
            localStorage.setItem('idToken', res.credential!=null &&  res.credential.idToken);
            history.push(`${BASE_URL}`)
        }).catch((err)=>{
            notify('Please Provide Valid Username and Password')
            // alert("Please Provide Valid Username and Password")
        })
    }
    const handleGoogleLogin = ()=>{
        Api("","","GoogleAuth").then((res)=>{
            const name=res.user.displayName.split(' ');
            const data={
                id: res.user.uid,
                email:res.user.email,
                firstName:name[0],
                lastName:name[1],
                address:'',
                 password:'',
                cnumber:res.user.phoneNumber
            }
            Api("customer",data,"postWithDoc").then((res1)=>{
                setData(res)
                history.push(`${BASE_URL}`)
            }).catch((err)=>{
                console.log('Error Occured While Login with Google',err)
            });
        }).catch((err)=>{
            alert("Please Provide Valid Username and Password")
        })
    }
    const handleFacebookLogin =()=>{
        Api("","","FacebookAuth").then((res)=>{
            const name=res.user.displayName.split(' ');
            const data={
                id: res.user.uid,
                email:res.user.email,
                firstName:name[0],
                lastName:name[1],
                address:'',
                password:'',
                cnumber:res.user.phoneNumber
            }
            // console.log(data)
            Api("customer",data,"postWithDoc").then((res1)=>{
                setData(res)
                history.push(`${BASE_URL}`)
            }).catch((err)=>{
                console.log('Error Occured While Login with Google',err)
            });
        }).catch((err)=>{
            alert("Please Provide Valid Username and Password")
        })
    }
    const setData =(res)=>{
        localStorage.setItem('user', JSON.stringify(res.additionalUserInfo.profile));
        localStorage.setItem('accessToken', res.credential.accessToken);
        localStorage.setItem('idToken', res.credential.idToken);
    }
    return (
        <Login
            handleSubmit={handleSubmit}
            handleGoogleLogin={handleGoogleLogin}
            handleFacebookLogin={handleFacebookLogin}
            handleChange={handleChange}
            handleClickShowPassword={handleClickShowPassword}
            showPassword={value.showPassword}
        />
    )
}
