import React, { useEffect, useState } from 'react'
import "./style.scss";
import TopMenu from '../TopMenu/TopMenu';
import { Link, useNavigate} from 'react-router-dom'
import axios from "axios";
// import Navbar from '../Navbar/Navbar';
import MenuIndex from '../Menu/MenuIndex';
import Footer from '../Footer/Footer';
import Image from '../Image/Image';
// import Session from 'react-session-api'
const Index=() =>{
    const navigate = useNavigate();
    // const token = sessionStorage.getItem('token'); //Add this line
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("")
    const handleChange = ({currentTarget: input})=>{
        setData({...data,[input.name]:input.value});
    };
    const win = window.sessionStorage;
    // const person = {
    //     email: data.email,
    //     password: data.password,
    // }
    
    // window.localStorage.setItem('user', JSON.stringify(person));
    useEffect(()=>{
      win.setItem('email', data.email)
      win.setItem('password', data.password)
    })
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const url = "http://localhost:5000/auth";
            const{data:res} = await axios.post(url,data);
            localStorage.setItem("token", res.data);
            // window.location= "/Login/Internal/Main/PostNews"
            navigate("/Login/Internal/Main/Account/list");
            // Authorization: `${res.data}, ${token}` //Add this line
        }
        catch(error){
            if(error.response && 
                error.response.status >= 400 &&
                error.response.status <= 500
                ){
                    setError(error.response.data.message);
                }
        }
    }
    return (
        <div className='dean'>
         <div className="topmenu">
                <TopMenu />
            </div>
            <div className="menuContainer">
                <MenuIndex />
            </div>
        <div className="signip_container">
            <div className="signip_form_container">
                <div className="left">
                <form className="form_container" onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            name= "email"
                            value={data.email}
                            className="input"
                            id='input'
                            onChange={handleChange}
                            />
                        <input
                            type="password"
                            placeholder="Password"
                            name= "password"
                            value={data.password}
                            className="input"
                            id='input'
                            onChange={handleChange}
                            />
                            {error && <div className="error_msg">{error}</div>}
                        <button type='submit' className="green_btn" id='input'>
                            Sign In
                        </button>
                    </form>
                </div>
                <div className="right">
                <h1>I don't have Account</h1>
                    <Link to="/signups">
                        <button type="button" className="white_btn">
                            Sign Un
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="image">
                <Image />
            </div>
            <div className="bottom2">
                <Footer />
            </div>
        </div>
    )
}

export default Index
