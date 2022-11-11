import './App.css';
import { BrowserRouter, 
  Routes, 
  Route
 } from "react-router-dom";
 import Home from "./Pages/Home/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
        {/* <Route path="/to_Upload">
            <Route index element={
                <ToUpload/>
            } />
          </Route>
        <Route path="/passwordChange">
            <Route index element={
                <PasswordChange/>
            } />
          </Route>
        <Route path="/Home/MyAGTC">
            <Route index element={
                <MyAGTC/>
            } />
          </Route>
        <Route path="/Login/Internal/Main/Account/Profile">
            <Route index element={
                <Profile/>
            } />
          </Route>
        <Route path="/Home/Galary">
            <Route index element={
                <Galary/>
            } />
          </Route>
        <Route path="/Home/TrainingAndConsultancy">
            <Route index element={
                <TrainingNConsultancy/>
            } />
          </Route>
        <Route path="/Accadamics">
            <Route index element={
                <Accademics/>
            } />
          </Route>

        <Route path="/Home/Contact">
            <Route index element={
                <Contact/>
            } />
          </Route>
        <Route path="/Home/NewsAndEvents">
            <Route index element={
                <NewsEvents/>
            } />
          </Route>
          <Route path="/Home/MissionandVision/Mision">
            <Route index element={
                <Mission/>
            } />
          </Route>

        <Route path="/signips">
            <Route index element={
                <SiggnIp/>
            } />
          </Route>

          <Route path="/signups">
            <Route index element={
                <SiggnUp/>
            } />
          </Route>

        <Route path="/logins">
            <Route index element={
                <Logins/>
            } />
          </Route>
        <Route path="/Home/Other/Success">
            <Route index element={
                <Success/>
            } />
          </Route>
          <Route path="/Login/Internal/Main/PostNews">
            <Route index element={
                <PostNews/>
            } />
          </Route>
          <Route path="/Login/Internal/Main/RemoveNews">
            <Route index element={
                <RemoveNews/>
            } />
          </Route>
          <Route path="/Login/Internal/Main/Account/list">
            <Route index element={
                <ViewUser/>
            } />
          </Route>
          <Route path="/Login/Internal/Main/Account/Create">
            <Route index element={
                <CreateUser/>
            } />
          </Route> */}
          {/* <Route path="/Login/Internal/Main/Account/ChangePassword">
            <Route index element={
                <ChangePassword/>
            } />
          </Route>
          <Route path="/Login/Internal/Main">
            <Route index element={
                <Main/>
            } />
          </Route>
          <Route path="/Home/Other/Navbar">
            <Route index element={
                <Navbar/>
            } />
          </Route>
          <Route path="/Home/Other/SignUp">
            <Route index element={
                <SignUp/>
            } />
          </Route>
          <Route path="/Home/Other/Edit">
            <Route index element={
                <Test/>
            } />
          </Route>
          <Route path="/Home/Other/Create">
            <Route index element={
                <Create/>
            } />
          </Route>
        <Route path="/Home/Other/List">
            <Route index element={
                <RecordList/>
            } />
          </Route> */}
          <Route path="/">
            <Route index element={
                <Home/>
            } />
          </Route>
          <Route path="/Home">
            <Route index element={
                <Home/>
            } />
           </Route>
          {/*<Route path="/Home/AboutAGTC/History">
            <Route index element={
              <History/>
            }/>
          </Route>
          <Route path="/Home/AboutAGTC/Message">
            <Route index element={
              <Message/>
            }/>
          </Route>
          <Route path="/Home/Administration">
            <Route index element={
              <Administration/>
            }/>
          </Route>
          <Route path="/Home/Administration/Dean">
            <Route index element={
              <Dean/>
            }/>
          </Route>
          
          <Route path="/login">
            <Route index element={<Login/>}/>
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
