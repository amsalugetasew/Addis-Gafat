import React, { useState } from 'react'
// import "./Styles.scss";
import {  useNavigate } from 'react-router-dom'
import TopMenu from '../../Components/TopMenu/TopMenu';
// import Navbar from '../../Components/Navbar/Navbar';
import "./contact.scss";
import Footer from '../../Components/Footer/Footer';
import MenuIndex from '../../Components/Menu/MenuIndex';
const Contact = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        coment: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };


    // const validate = (values) => {
    //     const errors = {}
        
    //     if (!values.firstName) {
    //       errors.firstName = "First Name is required";
    //     }
    //     if (!values.lastName) {
    //       errors.lastName = "Last Name is required";
    //     }
    //     if (!values.userName) {
    //       errors.userName = "User Name is required";
    //     }
    //     if (!values.phone) {
    //         errors.phone = "Phone Number is required";
    //       }
    //     if (!values.coment) {
    //       errors.coment = "Comment is required";
    //     }
    //     // if (values.password !== values.confirmPassword) {
    //     //   errors.confirmPassword = "Password is not match";
    //     // }
    //     return errors;
    //   }

    // const [formError, setFormError] = useState({});
    const handleSubmit = async (e) => {
        e.preventDefault();  
        const newPerson = { ...data };

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

        setData({ firstName: "", lastName: "", email: "",phone:"", coment: "" });
        navigate("/Home");
    }
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
                    <div className='h'>
                        <h6>Address</h6>
                        <h8>+251-582-110-481</h8>
                        <h8>+251-940-961-646</h8>
                        <h8> aragawm2016@gmail.com</h8>
                        <h8>gafataddis1@gmail.com</h8>
                        <h8>PoBox 612</h8>
                    </div>
                    <h1><a href="https://www.google.com/maps/place/Gondar/@12.6142319,37.4290276,12.21z/data=!4m5!3m4!1s0x164328823d244edf:0x7826245358a8a65!8m2!3d12.6030181!4d37.4521319" target="_blank" rel="noopener noreferrer">Google Map</a></h1>
                </div>
                <div className="right">
                    <form className="form_container" onSubmit={handleSubmit}>
                        <h1>Contact Us</h1>
                        <input
                            type="text"
                            placeholder="Abel"
                            name="firstName"
                            value={data.firstName}
                            className="input"
                            onChange={handleChange}
                        />
                        {/* <p className='error_msg'>{formError.firstName}</p> */}
                        <input
                            type="text"
                            placeholder="Yonas"
                            name="lastName"
                            value={data.lastName}
                            className="input"
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            name="email"
                            value={data.email}
                            className="input"
                            onChange={handleChange}
                        />
                         <input
                            type="text"
                            placeholder="+251-928-531-589"
                            name="phone"
                            value={data.phone}
                            className="input"
                            onChange={handleChange}
                        />
                        
                        <input
                            type="textarea"
                            placeholder="Coment"
                            name="coment"
                            value={data.coment}
                            className="input"
                            onChange={handleChange}
                        />
                        {error && <div className="error_msg">{error}</div>}
                        <button type='submit' className="green_btn">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
        {/* <div className="image">
                <Image />
            </div> */}
            <div className="bottom2">
                <Footer />
            </div>
        </div>
    )
}

export default Contact
