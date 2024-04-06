import React, { useState } from 'react'
import axios from 'axios'

export default function CreateQuestionSetMain() {


  const [questionSetInfo, setQuestionSetInfo] = useState({
    set_name: null,
    description: null,
    number_of_question: null
  })

  const [questions , setQuestions] = useState([])

 
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

  const cancel = () => {
    setQuestionSetInfo({
      set_name: null,
      description: null,
      number_of_question: null
    })
  }

  const saveAndExit =async (e) => {
    e.preventDefault()
    const jsonData = {
      set_name: questionSetInfo.set_name,
      description: questionSetInfo.description,
      number_of_question : questionSetInfo.number_of_question,
      questions: questions.map(({ question, choices, checkedAnswers }) => ({
        question,
        choices,
        checkedAnswers,
      })),
    };
    console.log(jsonData,74);
    console.log(typeof jsonData.questions[0].checkedAnswers[0],74);
    try{
      const response =await axios.post(`${import.meta.env.VITE_SERVER}/create_question_set`, jsonData);
      console.log(response , 75);

    }catch(error){
      console.log(error);
    }
    // Send the jsonData to the server or process it further as needed
  };

  return (<>
    <div className="container-fluid bg-white row rounded rounded-sm mt-2 px-4 py-4">
      <div className="col-md-12 ">
        <form onSubmit={(e)=>saveAndExit(e)}>
          <div className="col-md-12">
            <div className="row mb-3">
              <label for="inputName" className="col-sm-2 col-form-label">Name of Question Set</label>
              <div className="col-sm-10">
                <input name='set_name' onChange={(e) => changeInput(e)} type="Text" className="form-control" id="inputName" />
              </div>
            </div>

            <div className="row mb-3">
              <label for="inputDesc" className="col-sm-2 col-form-label">Description</label>
              <div className="col-sm-10">
                <textarea onChange={(e) => changeInput(e)} name="description" className='form-control' id="inputDesc" cols="30" rows="8"></textarea>
              </div>
            </div>
            <div className="row mb-4">
              <label for="inputPassword3" className="col-sm-2 col-form-label">No of Question</label>
              <div className="col-sm-10">
                <input type="number" name='number_of_question' onChange={(e) => changeInput(e)} className="form-control" id="inputPassword3" />
              </div>
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
                              checked={questions[index].checkedAnswers?.includes(choiceIndex)}
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

          <button onClick={cancel} className="btn btn-danger ">Cancel</button> &nbsp;
          <button type='submit'  className="btn btn-success ">Save</button>
        </form>
      </div>
    </div>
  </>)
}
