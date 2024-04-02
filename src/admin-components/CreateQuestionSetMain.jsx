import React, { useState } from 'react'

export default function CreateQuestionSetMain() {


  const [questionSetInfo, setQuestionSetInfo] = useState({
    set_name: null,
    description: null,
    number_of_question: null
  })

  // const [questionPattern, setQuestionPattern] = useState("1");
  // const [questions , setQuestions] = useState([])

  const changeInput = (e) => {
    e.preventDefault()
    setQuestionSetInfo({ ...questionSetInfo, [e.target.name]: e.target.value })
    // console.log(questionSetInfo , 16);
  }

  const cancel = () => {

  }

  

  const saveAndExit = () => {

  }
  return (<>
    <div className="container-fluid bg-white row rounded rounded-sm mt-2 px-4 py-4">
      <div className="col-md-12 ">
        <form>
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

            {/* <div class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">How Will You Fill Your Questions?</label>
              <select class="form-select" id="inputGroupSelect01" onChange={(e) => {
                e.preventDefault()
                setQuestionPattern(e.target.value)
              }
              }>
                <option value="1" selected>One by One</option>
                <option value="2">4 at a Time</option>
              </select>
            </div> */}
          </div>
          <div className="row ">
            {questionSetInfo.number_of_question
              ? Array.from({ length: questionSetInfo.number_of_question }).map((_, index) => (
                <>
                <hr />
                  <div key={index} className="col-md-12 mb-4">
                    <input type="text" className="form-control" placeholder="Enter Your Question Here" />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input type="text" className="form-control" placeholder="Enter 1st Choice" />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input type="text" className="form-control" placeholder="Enter 2nd Choice" />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input type="text" className="form-control" placeholder="Enter 3rd Choice" />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input type="text" className="form-control" placeholder="Enter 4th Choice" />
                  </div>
                  <div className="col-md-12 mb-4">
                    <h4>Correct Answers</h4>
                    <div class="form-check col-md-3">
                      <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" />
                      <label class="form-check-label" for="flexCheckDefault">
                        For A
                      </label>
                    </div>
                    <div class="form-check col-md-3">
                      <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" />
                      <label class="form-check-label" for="flexCheckDefault">
                        For B
                      </label>
                    </div>
                    <div class="form-check col-md-3">
                      <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" />
                      <label class="form-check-label" for="flexCheckDefault">
                        For C
                      </label>
                    </div>
                    <div class="form-check col-md-3">
                      <input class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" />
                      <label class="form-check-label" for="flexCheckDefault">
                        For D
                      </label>
                    </div>
                  </div>
                </>
              ))
              : null}


          </div>

          <button onClick={cancel} className="btn btn-danger ">Cancel</button> &nbsp;
          <button onClick={saveAndExit} className="btn btn-success ">Save</button>
        </form>
      </div>
    </div>
  </>)
}
