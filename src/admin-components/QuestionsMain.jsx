import  axios  from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { BiSolidEdit, BiTrash } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminContext from '../context/admin/AdminContext';


export default function QuestionsMain() {
  const [topic , setTopic] = useState([])
  const {update} = useContext(AdminContext);
  const navigate = useNavigate()
  useEffect(()=>{
    const fetchTopics =async ()=>{
        const topics = await axios.get(`${import.meta.env.VITE_SERVER}/get-topics`)
        setTopic(topics.data)
    }  
    fetchTopics()
  },[])

  const deleteRecord =async (id,topic_code) =>{
    if(confirm("Do You Really Want To Delete this Record?")){
      const res = await axios.delete(`${import.meta.env.VITE_SERVER}/delete/${id}/${topic_code}`)
      if(res.data.message){
        toast.success(res.data.message, { position: "top-right" });
        setInterval(() => {
          window.location.reload();
        }, 3000);
      }
    }
  }

  const viewRecord = (item) =>{
    update("questionInfo",item)
    navigate("/admin/questions/viewquestionset")
  }

  const editRecord = (item) =>{
    update("questionInfo",item)
    navigate("/admin/questions/editquestionset")
  }
  return (<>
    <div className="questionmain-outer">

      <div className="title-btns mb-4">
        <button onClick={(e) =>{ 
          e.preventDefault()
          navigate("/admin/questions/createquestionset")}}>
          Add a Question set
        </button>
      </div>
{topic.length === 0 ? <><h3>There are No Records Here!</h3></>:
       <div className="table-responsive ">
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Que Set Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              topic.map((item,index ) => {
                return (<tr>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td> 
                  <BiSolidEdit
                  data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Record"  
                  onClick={(e)=> 
                  {
                    e.preventDefault()
                    editRecord(item)
                  }}
                  style={{ cursor: "pointer" }} className='icon text-success' /> | 
                  <BiTrash data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Record"  onClick={()=>deleteRecord(item._id,item.topic_code)} style={{ cursor: "pointer" }} className='icon text-danger' /> | 
                  <FaEye 
                  data-bs-toggle="tooltip" data-bs-placement="top" title="View Record"
                  onClick={(e)=> 
                  {
                    e.preventDefault()
                    viewRecord(item)}} style={{ cursor: "pointer" }} className='icon text-info' /> </td>
                </tr>);
              })
            }
          </tbody>

        </table>
      </div>
}
    </div>
    <ToastContainer/>
</>
  )
}
