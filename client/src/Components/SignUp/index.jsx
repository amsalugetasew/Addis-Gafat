import React, { useState } from 'react'
import "./Styles.css";
import { Link, useNavigate } from 'react-router-dom'
import MenuIndex from '../Menu/MenuIndex';
import Footer from '../Footer/Footer';
import Image from '../Image/Image';
import TopMenu from '../TopMenu/TopMenu';
const Index = () => {  
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const [Cpasswords, setCpassword] = useState({Cpassword:""});
    const [error, setError] = useState("");
    const [formError, setFormError] = useState("");
    const navigate = useNavigate();
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
        setCpassword({...Cpasswords,[input.name]: input.value})
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newPerson = { ...data };
        if(data.firstName.trim().length === 0){
            setFormError("First Name is required")
        }
        else if(!isNaN(data.firstName)){
            setFormError("First Name couldn't be number")
        }
        else if(data.firstName.trim().length > 15 || data.firstName.trim().length < 3){
            setFormError("the length of First Name should be less than 16 and greater than 2 character")
        }
        else if(data.lastName.trim().length === 0){
            setFormError("Last Name is required")
        }
        else if(data.email.trim().length === 0){
            setFormError("Email is required")
        }
        else if(data.password.trim().length === 0 ){
            setFormError("password is required")
        }
        else if(Cpasswords.Cpassword.trim().length === 0){
            console.log(Cpasswords.Cpassword);
            setFormError("conformation password is required")
        }
        else if(data.password !== Cpasswords.Cpassword){
            setFormError("Password not matched")
        }
        else{
        
        try{
        await fetch("http://localhost:5000/users/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
            .catch(error => {
                window.alert(error);
                if (error.response &&
                    error.response.status >= 400 &&
                    error.response.status <= 500
                ) {
                    setError(error.response.data.message);
                }
                return;
            });
        setData({ firstName: "", lastName: "", email: "",  password: "", Cpassword: "" });
        navigate("/signips");      
        }
        catch(error){
            if(error.response && 
                error.response.status >= 400 &&
                error.response.status <= 500
                ){
                    setError(error.response.data.message);
                }
        }
    }}
    return (
        <div className='signupTop'>
            <div className="signupTopmenu">
                <TopMenu />
            </div>
            <div className="menuContainer">
                <MenuIndex />
            </div>
            <div className="signup_container">
                <div className="signup_form_container">
                    <div className="left">
                        <h1>I have Account</h1>
                        <Link to="/signips">
                            <button type="button" className="white_btn">
                                Sign in
                            </button>
                        </Link>
                    </div>
                    <div className="right">
                        <form className="form_container" onSubmit={handleSubmit}>
                            <h1>Create Account</h1>
                            <input
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={data.firstName}
                                className="input"
                                id='input'
                                onChange={handleChange}
                            />
                            {/* <p className='error_msg'>{formError.firstName}</p> */}
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={data.lastName}
                                className="input"
                                id='input'
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={data.email}
                                className="input"
                                id='input'
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={data.password}
                                className="input"
                                id='input'
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                placeholder="Confirmation Password"
                                name="Cpassword"
                                value={data.Cpassword}
                                className="input"
                                id='input'
                                onChange={handleChange}
                            />
                            {formError && <div className="error_msg" id='error_msg'>{formError}</div>}
                            {error && <div className="error_msg" id='error_msg'>{error}</div>}
                            <button type='submit' className="green_btn" id='input'>
                                Sign Up
                            </button>
                        </form>
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
