import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import MainMenu from './menu'
// import FileBase64 from 'react-file-base64';
import TopMenu from "../../Components/TopMenu/TopMenu";
// import { combineReducers, createStore  } from 'redux';
// import { sessionReducer, sessionService  } from 'redux-react-session';
function PostNews() {
  const [form, setForm] = useState({
    title: "",
    news: "",
    image: "",
    desc: "",
  });
  const win = window.sessionStorage;
useEffect(()=>{
  var x= win.getItem('email');
  const y= win.getItem('password');
  if(!x && !y)
  navigate('/signips');
})
  
const navigate = useNavigate();
  const [
    // formError,
     setFormError] = useState({});
  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  const validate = (values) => {
    const errors = {}

    if (!values.title) {
      errors.title = "Title is required";
    }
    if (!values.news) {
      errors.news = "News is required";
    }

    return errors;
  }
  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
    setFormError(validate(form))


    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    await fetch("http://localhost:5000/PostNews/add", {
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

    setForm({ title: "", news: "", image: "", disc: "" });
    navigate(-1);
  }
  
  return (
    <div className='MainContainer'>
      <div className="maintop">
      <TopMenu />
        {/* <MainTop /> */}
      </div>
      <div className="MainMenu">
        <MainMenu />
      </div>
      <div className='container'>
        <div className="row">
          <div className="col-md-3">
          </div>
          <div className="col-md-6 main">
            <form onSubmit={onSubmit}>
              <h1> Post News Form 
                 {/* <div>{localStorage.getItem('name')}</div> */}
                 </h1>
              <input className="box"
                type="text"
                name="title"
                id="title"
                placeholder="Title" required
                value={form.title}
                onChange={(e) => updateForm({ title: e.target.value })} />
                <textarea className="box" name="news" id="news" cols="30" rows="10" placeholder="News" value={form.news}
                onChange={(e) => updateForm({ news: e.target.value })}></textarea>
              {/* <input className="box"
                type="textarea" name="news" id="news"
                placeholder="News " required
                value={form.news}
                onChange={(e) => updateForm({ news: e.target.value })}
              /> */}
              {/* <FileBase64
                multiple={false}
                onDone={({base64}) => updateForm({image: base64})} /> */}


              <input type="file" id="image" className="box"
                name="image"
                value={form.image}
                onChange={(e) => updateForm({ image: e.target.value })} />
              <input className="box"
                type="textarea" name="desc" id="desc"
                placeholder="Image Description " rows="2"
                value={form.desc}
                onChange={(e) => updateForm({ desc: e.target.value })}
              />
              <input type="submit" id="submitDetails"
                name="submitDetails" value="Post" />
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PostNews