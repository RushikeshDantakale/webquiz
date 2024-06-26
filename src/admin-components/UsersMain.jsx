import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BiTrash } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UsersMain() {

  const [users, setUsers] = useState([])


  useEffect(() => {
    try {
      const fetchUsers = async () => {
        const response = await axios.get(`${import.meta.env.VITE_SERVER}/admin/getRegisteredUsers`)
        setUsers(response.data)
      }
      fetchUsers()
    } catch (error) {
      alert("something went wrong!")
    }
  }, [])

  const deleteRecord =async (e,id) =>{
    e.preventDefault()
    if(confirm("Do You Really Want To Delete this Record?")){
      const res = await axios.delete(`${import.meta.env.VITE_SERVER}/userDelete/${id}`)
      if(res.data.message){
        toast.success(res.data.message, { position: "top-right" });
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    }
  }


  return (<>

    <div className="'container-fluid bg-white rounded rounded-sm p-4 overflow-x-scroll">
      {
        users.length==0 ? <h3>Theres nothing to show here...</h3> :
      <table className="table table-striped table-hover ">

        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Reg. Email</th>
            <th>Topic Name</th>
            <th>Topic Code</th>
            <th>Registered At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => {
              return (<tr key={index}>
                <td>{index + 1}</td>
                <td>{user.email}</td>
                <td>{user.topic_name}</td>
                <td>{user.topic_code}</td>
                <td>{new Date(user.createdAt).toLocaleDateString('en-US',{ year: 'numeric', month: 'long', day: 'numeric' })}</td>
                <td><BiTrash data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Record" style={{ cursor: "pointer" }} className='icon text-danger' onClick={(e)=>deleteRecord(e,user._id)} /></td>
              </tr>)
            })
          }
        </tbody>

      </table>
      }
    </div>
    <ToastContainer/>
  </>)
}
