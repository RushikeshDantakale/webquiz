import React from 'react'
import { BiSolidEdit, BiTrash } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


export default function QuestionsMain() {


  const navigate = useNavigate()
  var rowArr = []

  for (let i = 1; i <= 50; i++) {
    rowArr.push(i);
  }

  // console.log(rowArr);



  return (
    <div className="questionmain-outer">
   
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header bg-warning ">
        <h5 className="modal-title" id="exampleModalLabel">Delete</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Do You Really Want To Delete This Record?
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success">Save changes</button>
      </div>
    </div>
  </div>
</div>

      <div className="title-btns mb-4">
        <button onClick={()=> navigate("/admin/questions/createquestionset") }>
          Add a Question set
        </button>
      </div>


      <div className="table-responsive ">
        <table   className="table table-striped table-hover ">
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
            rowArr.map((item) => {
              {/* console.log(); */ }
              return (<tr>
                <td>{item}</td>
                <td>Science</td>
                <td>This is a science quiz</td>
                <td> <BiSolidEdit style={{cursor:"pointer"}} className='icon text-success' /> | <BiTrash  data-bs-toggle="modal" data-bs-target="#exampleModal" style={{cursor:"pointer"}} className='icon text-danger' /> | <FaEye style={{cursor:"pointer"}} className='icon text-info'/> </td>
              </tr>);
            })
          }
        </tbody>
 
        </table>
      </div>
    </div>

  )
}
