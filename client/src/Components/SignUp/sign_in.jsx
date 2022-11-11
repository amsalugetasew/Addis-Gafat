import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import TopMenu from "../TopMenu/TopMenu";
import MenuIndex from '../Menu/MenuIndex'
import "./style.scss"
import Footer from "../Footer/Footer";
export default function Test() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate();

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();
        // const newPerson = { ...form };

        // await fetch("http://localhost:5000/signup/add", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(newPerson),
        // })
        // .catch(error => {
        //   window.alert(error);
        //   return;
        // });

        // setForm({ email: "", password: "" });
        navigate("/Login/Internal/Main");
    }


    return (
        <div className='Acount'>
        <div className="topmenu">
        <TopMenu/>
      </div>
      <div className="homeContainer">
        <Navbar/>
      </div>
      <div className="menuContainer">
        <MenuIndex/>
      </div>
        <div className='container'>
            <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6 main">
                    <form onSubmit={onSubmit}>
                        <h1> Sign In </h1>
                        <input className="box"
                            type="email" name="email" id="email"
                            placeholder="E-Mail " required
                            value={form.email}
                            onChange={(e) => updateForm({ email: e.target.value })}
                        />
                        <input className="box" type="password" name="password"
                            id="password" placeholder="Password " required
                            value={form.password}
                            onChange={(e) => updateForm({ password: e.target.value })}
                        />
                        <input type="submit" id="submitDetails"
                            name="submitDetails" value="Submit" />
                    </form>
                    <div className="item">
                        <Link to="/Home/Other/Edit" style={{ textDecoration: "none" }}>
                            <li>Sign Up</li>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom2">
        <Footer />
      </div>
      <div className="footer3">Copyright &copy; 2022 Addiss Gafat Technology College</div>
        </div>
    )
}

// export default test