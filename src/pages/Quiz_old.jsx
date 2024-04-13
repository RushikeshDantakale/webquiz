import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import userContext from '../context/user/UserContext'

export default function Quiz() {
  const [givenAnswers , setGivenAnswers] = useState([])
  const [index , setIndex] = useState(0)
  const next = () => {

  }

  const cancel = () => {

  }

  const back = () =>{

  }
  const { questions } = useContext(userContext).state
  return (<>
    <Navbar sub={"quiz"} />
    <div className="container-fluid">
      <div className="row py-4 px-4">
        <div className="col-md-6 mx-auto my-4 shadow shadow-sm">
          <div className="bg-white row rounded rounded-lg px-3 ">
            {questions.map((que, index) => {
              return (<>
                <div className="col-md-12 my-2 mx-2 px-2 py-2">
                  <label for="colFormLabel" className=" col-form-label fs-4 ">{index + 1}.&nbsp;{que.question}</label>
                </div>
                {
                  que.choices.map((ch, index) => {
                    return (<div key={index} className="d-flex col-md-12 rounded rounded-lg border border-2 py-2 px-3 mb-2 ">
                      <div className="col-md-1">
                        <input className="form-check-input fs-5 me-2 border border-2" type="checkbox" name={index} id={`flexCheckIndeterminate-${index}-${index}`} />
                      </div>
                      <label className="col-md-11 fs-5" htmlFor={`flexCheckIndeterminate-${index}-${index}`}>
                        {ch}
                      </label>
                    </div>)
                  })
                }
                <div className="col-md-12 mt-3 mb-4">
                  <button className="btn btn-lg btn-danger me-2">Cancel</button>
                  <button className="btn btn-lg btn-success me-2">Save & Next</button>
                  <button className="btn btn-lg btn-warning">Back</button>
                </div>
              </>)
            })
            }
          </div>
        </div>
      </div>
    </div>
  </>)
}
