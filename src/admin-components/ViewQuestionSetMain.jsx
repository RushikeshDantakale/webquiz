import React, { useContext, useEffect, useState } from 'react'
import AdminContext from '../context/admin/AdminContext'
import axios from 'axios'
export default function ViewQuestionSetMain() {
  const [que, setQue] = useState([])
  const { state } = useContext(AdminContext)
  const { name, description, topic_code, no_of_questions } = state.questionInfo
  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await axios.post(`${import.meta.env.VITE_SERVER}/getQuestions/${topic_code}`)
      console.log(res.data, 10);
      setQue(res.data)
    }
    fetchQuestions()
  }, [])
  return (<>
    <div className='container-fluid bg-light rounded rounded-sm p-4'>
      <h4 className='mb-4 text-warning'>Question Set Information</h4>
      <div className="row">
        <div className="col-md-4">
          <label for="staticEmail" className=" col-form-label fw-bold">Topic Name</label>

          <input type="text" className="form-control" id="staticEmail" value={name} disabled />

        </div>
        <div className="col-md-4">
          <label for="inputPassword" className=" col-form-label fw-bold">No of Questions</label>

          <input type="text" className="form-control" id="staticEmail" value={no_of_questions} disabled />

        </div>
        <div className="col-md-6">
          <label for="inputPassword" className=" col-form-label fw-bold">Description</label>
          <textarea className="form-control"  value={description} disabled></textarea>
        </div>
      </div>
      <hr />
      <h4 className='mb-4 text-warning'>Question with Choices</h4>

      {
        que.map((qu , index)=>{
          console.log(qu , 42)
          return (
      <div className="row" key={index}>
        <div className=" col-md-12 mb-3">
          <label htmlFor="" className="form-label"><span className='fw-bold'>{index+1}.&nbsp;&nbsp;</span>{qu.question}</label>
        </div>
        {
          qu.choices.map((ch , index)=>{
        return (<div className="col-md-6 " key={index}>
            <input type="text" value={ch} className="form-control mb-3" disabled/>
        </div>)
          })
        }

        <div className="row">
        <h5 className='mb-3'>Answer</h5>
        {qu.answer.map((ans, ansIndex) => {
            // Assuming ans is a string representation of the index
            // Convert ans to number
            const index = parseInt(ans, 10);
            return (
              <div className="col-md-7 mb-2" key={ansIndex}>
                {/* Access choice based on index */}
                <input type="text" value={qu.choices[index]} className="form-control" disabled />
              </div>
            );
          })}
        </div>
        <hr />
      </div>)
        })
      }

    </div>
  </>
  )
}
