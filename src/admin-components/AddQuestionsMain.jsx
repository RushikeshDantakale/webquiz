import React, { useState, useEffect, useContext } from 'react'
import AdminContext from '../context/admin/AdminContext';
import { convertSecondsToHoursAndMinutes } from '../helper/time';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function AddQuestionsMain() {
  const [questions, setQuestions] = useState([])
  const { state } = useContext(AdminContext)
  console.log(state.questionInfo, 7);
  const { name, description, topic_code, time } = state.questionInfo
  const { hr, min } = convertSecondsToHoursAndMinutes(time)
  const [no_of_questions, setNo_of_questions] = useState(0)

   
  const navigate = useNavigate()
  const changeInput = (e) => {
    e.preventDefault()
    setNo_of_questions(e.target.value)
  }

  const changeQuestion = (e, questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex] = {
      ...(newQuestions[questionIndex] || {}),
      question: e.target.value,
    };
    setQuestions(newQuestions);
  };

  const changeChoice = (e, questionIndex, choiceIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].choices = newQuestions[questionIndex].choices || [];
    newQuestions[questionIndex].choices[choiceIndex] = e.target.value;
    setQuestions(newQuestions);
  };

  const toggleAnswer = (e, questionIndex, choiceIndex) => {
    const newQuestions = [...questions];
    const question = newQuestions[questionIndex];
    question.checkedAnswers = question.checkedAnswers || [];
    const answerIndex = question.checkedAnswers.indexOf(choiceIndex);
    if (e.target.checked) {
      if (answerIndex === -1) {
        question.checkedAnswers.push(choiceIndex);
      }
    } else {
      if (answerIndex !== -1) {
        question.checkedAnswers.splice(answerIndex, 1);
      }
    }
    setQuestions(newQuestions);
  };

  const saveAndExit = async (e) => {
    e.preventDefault()
    const jsonData = {
      topic_code,
      questions: questions.map(({ question, choices, checkedAnswers }) => ({
        question,
        choices,
        answer: checkedAnswers,
        topic_code
      })),
    };
    try {
      // Send the jsonData to the server or process it further as needed
      const response = await axios.post(`${import.meta.env.VITE_SERVER}/add_and_update_questions`, jsonData);
      console.log(jsonData , 67);
      toast.success(response.data.message, { position: "top-right" });
      setTimeout(() => {
        navigate("/admin/questions")
      }, 3000);
    } catch (error) {
      toast.error(error.response.data.error, { position: "top-right" });
    }
  };

  const cancel = (e) => {
    e.preventDefault()
    navigate(-1)
  }
  return (<>
    <div className='container-fluid bg-light rounded rounded-sm p-4'>
      <h4 className='mb-4 text-warning'>Question Set Information</h4>
      <div className="row">
        <div className="col-md-4">
          <label htmlFor="staticEmail" className=" col-form-label fw-bold">Topic Name</label>
          <input type="text" className="form-control" id="staticEmail" value={name} disabled />
        </div>
        <div className="row col-md-6 my-4 ">
          <label htmlFor="inputPassword3" className="col-sm-2 mt-2 col-form-label fw-bold">Time </label>
          <div className="col-sm-2 ">
            <input type="number" name='hr' className="form-control mt-2 " id="inputPassword3" value={hr} disabled />
          </div>
          <label htmlFor="inputPassword3" className="col-sm-1 mt-2  col-form-label">Hr</label>

          <div className="col-sm-2">
            <input type="number" name='min' className="form-control mt-2 " id="inputPassword3" value={min} disabled />
          </div>
          <label htmlFor="inputPassword3" className="col-sm-1 col-form-label mt-2 ">Min</label>
        </div>
        <div className="col-md-7">
          <label htmlFor="inputPassword" className=" col-form-label fw-bold">Description</label>
          <textarea className="form-control" value={description} disabled></textarea>
        </div>
        <div className="row col-md-8 mt-4 mb-4">
          <label htmlFor="inputPassword3" className="col-sm-4 col-form-label fw-bold">Questions to be added to this Topic</label>
          <div className="col-sm-8">
            <input type="number" name='number_of_question' onChange={(e) => changeInput(e)} className="form-control" id="inputPassword3" value={no_of_questions} />
          </div>
        </div>
        { no_of_questions == 0? 
        null :
        <>
        <hr />
        <h4 className='mb-4 text-warning'>Question with Choices</h4>
        <form onSubmit={(e) => saveAndExit(e)}>

          <div className="row mt-2">
            {no_of_questions
              ? Array.from({ length: no_of_questions }).map((_, index) => (
                <>
                  <div key={index} className="col-md-12 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Question Here"
                      value={questions[index]?.question || ''}
                      onChange={(e) => changeQuestion(e, index)}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter 1st Choice"
                      value={questions[index]?.choices?.[0] || ''}
                      onChange={(e) => changeChoice(e, index, 0)}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter 2nd Choice"
                      value={questions[index]?.choices?.[1] || ''}
                      onChange={(e) => changeChoice(e, index, 1)}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter 3rd Choice"
                      value={questions[index]?.choices?.[2] || ''}
                      onChange={(e) => changeChoice(e, index, 2)}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter 4th Choice"
                      value={questions[index]?.choices?.[3] || ''}
                      onChange={(e) => changeChoice(e, index, 3)}
                    />
                  </div>
                  <div className="col-md-12 mb-4">
                    <h4>Correct Answers</h4>
                    {questions[index]?.choices?.map((choice, choiceIndex) => (
                      <div key={choiceIndex} className="form-check col-md-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={questions[index].checkedAnswers?.includes(choiceIndex)}
                          onChange={(e) => toggleAnswer(e, index, choiceIndex)}
                        />
                        <label className="form-check-label">
                          For {String.fromCharCode(65 + choiceIndex)}
                        </label>
                      </div>
                    ))}
                  </div>
                  <hr />
                </>
              ))
              : null}


          </div>
          <button onClick={(e) => cancel(e)} className="btn btn-danger ">Cancel</button> &nbsp;
          <button type='submit' className="btn btn-success ">Save</button>
        </form>
        </>
        }
      </div>
    </div>
    <ToastContainer />
  </>)
}
