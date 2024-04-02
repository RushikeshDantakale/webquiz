import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css'
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Login from './pages/admin/Login';
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import Questions from "./pages/admin/Questions";
import Reports from "./pages/admin/Reports";
import CreateQuestionSet from "./pages/admin/CreateQuestionSet";

function App() {

  return (
    <>
 <BrowserRouter>
  <Routes>

    {/* Routes for users */}
    <Route path='/' element=<Home/> />
    <Route path='/user/quiz' element=<Quiz/> />
    <Route path='/user/contact' element=<Contact/> />
    <Route path='/user/login' element=<Login/> />
    <Route path='/user/register' element=<Register/> />
    <Route path='*' element=<NotFound/> />

    {/* Routes for admins */}
    <Route path='/admin/dashboard' element=<Dashboard/> />
    <Route path='/admin/users' element=<Users/> />
    <Route path='/admin/questions' element=<Questions/> />
    <Route path='/admin/questions/createquestionset' element=<CreateQuestionSet/> />
    <Route path='/admin/reports' element=<Reports/> />
    <Route path='/admin/login' element=<Login/> />

    
  </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
