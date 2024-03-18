import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Login from './pages/Login';
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Dashboard from "./pages/admin/Dashboard";

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

    
  </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
