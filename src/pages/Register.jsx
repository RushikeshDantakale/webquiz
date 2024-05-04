import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from "axios"
import userContext from '../context/user/UserContext';

export default function Register() {
  const [topics, setTopics] = useState([])
  const [selected, setSelected] = useState({
    email: null,
    topic_name: null,
    topic_code: null
  })
  const {update} = useContext(userContext)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTopics = async () => {
      const res = await axios.get(`${import.meta.env.VITE_SERVER}/get-topics`)
      setTopics(res.data)
    }
    fetchTopics()
  }, [])

  const changeEmail = (e) => {
    e.preventDefault()
    setSelected({ ...selected, email: e.target.value })
  }

  const handleTopicChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    if (selectedIndex !== 0) {
      setSelected({
        ...selected,
        topic_name: topics[selectedIndex - 1].name,
        topic_code: topics[selectedIndex - 1].topic_code
      });
    } else {
      setSelected({
        ...selected,
        topic_name: null,
        topic_code: null
      });
    }
  }

  const verifyUser = async (e) => {
    e.preventDefault()
    if (!selected.email || !selected.topic_code || !selected.topic_name) {
      return alert("All Fields Are Supposed To Be Filled!")
    }
    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER}/user/register`, selected)
      const {topic_info , questions , user} = res.data.data
      update("topic_info",topic_info)
      update("user" , user)
      update("questions",questions)
      navigate("/user/quiz")
    } catch (error) {
      console.log(error);
    }
  }

  return (<>
    <Helmet>
      <title>ReactQuiz - Register</title>
    </Helmet>
    <Navbar sub={"home"} />
    <div className='w-100 flex  mt-4 j-center contact-outer'>
      <div className='width-50 contact bg-white'>
        <form onSubmit={(e) => verifyUser(e)} method='post'>
          <h1 className='mb-4'>Register with email & Go! </h1>
          <label htmlFor="email">Enter Your Email here!</label>
          <br />
          <input type="email" onChange={(e) => changeEmail(e)} name="email" id='email' placeholder='Enter Email' />
          <br />
          <label htmlFor="topic_name" >Select Your Topic!</label>
          <select id="topic_name" onChange={handleTopicChange}>
            <option className='bg-primary text-white' defaultValue>Select Your Topic</option>
            {
              topics.map((tp, index) => {
                return (<option key={index}>{tp.name}</option>)
              })
            }
          </select>
          <br />
          <button type='submit' className='btnn btn-next w-100'>GO</button>
        </form>
      </div>
    </div>
  </>)
}
