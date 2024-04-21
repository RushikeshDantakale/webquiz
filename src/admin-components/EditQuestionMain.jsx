import React, { useContext, useState, useEffect } from 'react';
import AdminContext from '../context/admin/AdminContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { convertSecondsToHoursAndMinutes } from '../helper/time';
import { MdAssignmentAdd } from "react-icons/md";

export default function EditQuestionMain() {

  //context values
  const { state } = useContext(AdminContext);
  const { name, description, topic_code, no_of_questions, time } = state.questionInfo;
  const { hr, min } = convertSecondsToHoursAndMinutes(time);
  // console.log(hr, min, 13)

  //hooks
  const [questionSetInfo, setQuestionSetInfo] = useState({
    topic_code,
    set_name: name,
    description,
    number_of_question: no_of_questions,
    quiz_time: {
      hr,
      min,
    },
  });
  console.log(typeof questionSetInfo.quiz_time.hr, questionSetInfo.quiz_time.min, 24);
  const [questions, setQuestions] = useState([]);
  const [changedIndexes, setChangedIndexes] = useState({});
  //useEffect to store the question in the context.
  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await axios.post(`${import.meta.env.VITE_SERVER}/getQuestions/${topic_code}`);
      setQuestions(res.data);
    };
    fetchQuestions();
  }, []);
  const navigate = useNavigate();

  const changeInput = (e) => {
    e.preventDefault();
    setQuestionSetInfo({ ...questionSetInfo, [e.target.name]: e.target.value });
  };

  const changeQuestion = (e, questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex] = {
      ...(newQuestions[questionIndex] || {}),
      question: e.target.value,
    };
    setQuestions(newQuestions);
    setChangedIndexes({ ...changedIndexes, [questionIndex]: true });
  };

  const toggleAnswer = (e, questionIndex, choiceIndex) => {
    const newQuestions = [...questions];
    const question = newQuestions[questionIndex];
    question.answer = question.answer || [];
    // Check if the choiceIndex is already included in answer
    const isChecked = question.answer.includes(choiceIndex);
    // Toggle the checked state of the choice
    if (isChecked) {
      // If already checked, remove the choiceIndex from answer
      const indexToRemove = question.answer.indexOf(choiceIndex);
      if (indexToRemove !== -1) {
        question.answer.splice(indexToRemove, 1);
      }
    } else {
      // If not checked, add the choiceIndex to answer
      question.answer.push(choiceIndex);
    }
    // Update the state with the modified newQuestions array
    setQuestions(newQuestions);
    // Update the state with the modified newQuestions array
    setQuestions(newQuestions);
  setChangedIndexes({ ...changedIndexes, [questionIndex]: true });

  }


const changeChoice = (e, questionIndex, choiceIndex) => {
  const newQuestions = [...questions];
  newQuestions[questionIndex].choices = newQuestions[questionIndex].choices || [];
  newQuestions[questionIndex].choices[choiceIndex] = e.target.value;
  setQuestions(newQuestions);
  setChangedIndexes({ ...changedIndexes, [questionIndex]: true });
};

const changeTime = (e) => {
  e.preventDefault()
  setQuestionSetInfo({
    ...questionSetInfo,
    quiz_time: {
      ...questionSetInfo.quiz_time,
      [e.target.name]: parseInt(e.target.value)
    }
  })
}

const saveAndExit = async (e) => 
{
  e.preventDefault();
  console.log("inside save and exit function");
  const changedQuestionsIndexes = Object.keys(changedIndexes).map((index) => parseInt(index));
  const changedQuestions = changedQuestionsIndexes.map((index) => {
    const { question, choices, answer , _id } = questions[index];
    return {
      _id,
      question,
      choices,
      answer: answer,
    };
  });
  const jsonData = {
    topic_code,
    set_id : questionSetInfo._id,
    set_name: questionSetInfo.set_name,
    description: questionSetInfo.description,
    number_of_question: questionSetInfo.number_of_question,
    quiz_time: questionSetInfo.quiz_time,
    questions: changedQuestions,
  };
  try {
    const response = await axios.post(`${import.meta.env.VITE_SERVER}/update_question_set`, jsonData);
    toast.success(response.data.message, { position: 'top-right' });
    console.log("inside save and exit function , 127");
    setTimeout(() => {
      navigate('/admin/questions');
    }, 3000);
  } catch (error) {
    toast.error(error.response.data.error, { position: 'top-right' });
  }
};

const cancel = (e) =>{
  e.preventDefault()
  navigate(-1)
}

const addQuestion = (e , topic_code) =>{
  e.preventDefault()
  navigate(`/admin/questions/addQuestions/${topic_code}`);
}

return (<>
    <div className="row col-md-12 ">
    <button  className='col-md-auto btn btn-warning text-white' data-bs-toggle="tooltip" data-bs-placement="top" title="Go To Back"
       onClick={(e) =>{
        e.preventDefault()
        navigate(-1)
      }}>
    back
    </button>
    <div className='col-md-auto fs-3 text-warning fw-dark ' data-bs-toggle="tooltip" data-bs-placement="top" title="Add More Questions in this Question set!" onClick={e => addQuestion(e, questionSetInfo.topic_code) } >
    
      <MdAssignmentAdd />
    </div>
    </div>
    <div className="container-fluid bg-white row rounded rounded-sm mt-2 px-4 py-4">
      <div className="col-md-12 ">
        <form onSubmit={(e) => saveAndExit(e)}>
          <div className="col-md-12">
            <div className="row mb-3">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">Name of Question Set</label>
              <div className="col-sm-10">
                <input name='set_name' onChange={(e) => changeInput(e)} type="Text" className="form-control" id="inputName" value={questionSetInfo.set_name} />
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="inputDesc" className="col-sm-2 col-form-label">Description</label>
              <div className="col-sm-10">
                <textarea onChange={(e) => changeInput(e)} name="description" className='form-control' id="inputDesc" cols="30" rows="8" value={questionSetInfo.description}></textarea>
              </div>
            </div>
            <div className="row col-md-6 mb-4">
              <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">No of Question</label>
              <div className="col-sm-8">
                <input type="number" name='number_of_question' onChange={(e) => changeInput(e)} className="form-control" id="inputPassword3" value={questionSetInfo.number_of_question} />
              </div>
            </div>
            <div className="row col-md-6 mb-4">
              <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">Time :</label>
              <div className="col-sm-2">
                <input type="number" name='hr' onChange={(e) => changeTime(e)} className="form-control" id="inputPassword3" value={questionSetInfo.quiz_time.hr} />
              </div>
              <label htmlFor="inputPassword3" className="col-sm-1 col-form-label">Hr</label>

              <div className="col-sm-2">
                <input type="number" name='min' onChange={(e) => changeTime(e)} className="form-control" id="inputPassword3" value={questionSetInfo.quiz_time.min} />
              </div>
              <label htmlFor="inputPassword3" className="col-sm-1 col-form-label" >Min</label>

            </div>
          </div>
          <div className="row ">
            {questionSetInfo.number_of_question
              ? Array.from({ length: questionSetInfo.number_of_question }).map((_, index) => (
                <>
                  <hr />
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
                          checked={questions[index].answer?.includes(choiceIndex)}
                          onChange={(e) => toggleAnswer(e, index, choiceIndex)}
                        />
                        <label className="form-check-label">
                          For {String.fromCharCode(65 + choiceIndex)}
                        </label>
                      </div>
                    ))}
                  </div>
                </>
              ))
              : null}


          </div>

          <button onClick={(e) => cancel(e)} className="btn btn-danger ">Cancel</button> &nbsp;
          <button type='submit' className="btn btn-success ">Save</button>
        </form>
      </div>
    </div>
    <ToastContainer />
  </>
);
}
