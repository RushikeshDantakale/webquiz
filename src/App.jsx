import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Profile from "./pages/admin/Profile";
import ViewQuestionSet from "./pages/admin/ViewQuestionSet";
import AdminState from "./context/admin/AdminState";
import EditQuestion from "./pages/admin/EditQuestion";

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
        <Route path='/admin/dashboard' element={<AdminState><Dashboard /></AdminState>} />
          <Route path='/admin/users' element={<AdminState><Users /></AdminState>} />
          <Route path='/admin/questions' element={<AdminState><Questions /></AdminState>} />
          <Route path='/admin/questions/createquestionset' element={<AdminState><CreateQuestionSet /></AdminState>} />
          <Route path='/admin/questions/viewquestionset' element={<AdminState><ViewQuestionSet /></AdminState>} />
          <Route path='/admin/questions/editquestionset' element={<AdminState> <EditQuestion/> </AdminState>} />
          <Route path='/admin/reports' element={<AdminState><Reports /></AdminState>} />
          <Route path='/admin/login' element={<AdminState><Login /></AdminState>} />
          <Route path='/admin/profile' element={<AdminState><Profile /></AdminState>} />
        </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
