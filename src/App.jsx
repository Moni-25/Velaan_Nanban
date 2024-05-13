import AdminLogin from "./Components/Admin/adminLogin";
import PeopleLogin from "./Components/People/peopleLogin";
import PeopleSignUp from "./Components/People/peopleSignup";
import Welcome from "./Components/Welcome/welcome";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/mainaccessPage";

function App() {
  return (
    <>
      <Routes>
        <Route Component={Welcome} path="/"/>
        <Route Component={AdminLogin} path="/admin"/>
        <Route Component={PeopleLogin} path="/people"/>
        <Route Component={PeopleSignUp} path="/people_signup"/>
        <Route Component={MainPage} path="/main_access_page"/>
      </Routes>
    </>
  )
}

export default App
