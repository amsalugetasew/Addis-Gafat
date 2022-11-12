import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./SignUp.scss";
export default function Create() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    level: "",
  });

  const navigate = useNavigate();
  const [formError, setFormError] = useState({});
  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  const validate = (values) => {
    const errors = {}
    
    if (!values.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!values.userName) {
      errors.userName = "User Name is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password is not match";
    }
    return errors;
  }
  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
    setFormError(validate(form))  

    
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
      .catch(error => {
        window.alert(error);
        return;
      });

    setForm({ firstName: "", lastName: "", userName: "", password: "", confirmPassword: "", level: "" });
    navigate("/");
  }
  //  console.log(...form )
  // This following section will display the form that takes the input from the user.
  return (
    <div className="signup">
      <h3>Create New Account</h3>
      <form onSubmit={onSubmit}>
      <div className="form-group" id="input">
          <label htmlFor="firstName" className="lbl">First Name</label>
          <input
            type="text"
            className="input"
            id="firstName"
            value={form.firstName}
            onChange={(e) => updateForm({ firstName: e.target.value })}
          />
          <p>{formError.firstName}</p>
        </div>
        <div className="form-group" id="input">
          <label htmlFor="lastName" className="lbl">Last Name</label>
          <input
            type="text"
            className="input"
            id="lastName"
            value={form.lastName}
            onChange={(e) => updateForm({ lastName: e.target.value })}
          />
          <p>{formError.lastName}</p>
        </div>
        <div className="form-group" id="input">
          <label htmlFor="userName" className="lbl">User Name</label>
          <input
            type="text"
            className="input"
            id="userName"
            value={form.userName}
            onChange={(e) => updateForm({ userName: e.target.value })}
          />
          <p>{formError.userName}</p>
        </div>
        <div className="input" id="input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="input"
            id="password"
            value={form.password}
            onChange={(e) => updateForm({ password: e.target.value })}
          />
          <p>{formError.password}</p>
        </div>
        <div className="form-group" id="input">
          <label htmlFor="confirmPassword">Conformation Password</label>
          <input
            type="password"
            className="input"
            id="confirmPassword"
            value={form.confirmPassword}
            onChange={(e) => updateForm({ confirmPassword: e.target.value })}
          />
          <p>{formError.confirmPassword}</p>
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionIntern"
              value="Passive"
              checked={form.level === "Passive"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionIntern" className="form-check-label">Passive</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionJunior"
              value="Active"
              checked={form.level === "Active"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionJunior" className="form-check-label">Active</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionSenior"
              value="Pending"
              checked={form.level === "Pending"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionSenior" className="form-check-label">Pending</label>
          </div>
        </div>
        <div className="form-group" >
          <input id="button"
            type="submit"
            value="Sign Up"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}