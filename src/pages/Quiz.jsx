import React from 'react'
import Navbar from '../components/Navbar'

export default function Quiz() {
  return (<>
    <Navbar sub={"quiz"} />
    <div className="container-fluid">
      <div className="row py-4 px-4">
        <div className="col-md-8">
          <div className="bg-white row rounded rounded-lg px-3"> 

            <div className="col-md-12 my-2 mx-2">
            <label for="colFormLabel" className=" col-form-label fs-4">Question goes here...</label>
            </div>

            <div className="form-check col-md-6">
              <input className="form-check-input fs-5" type="checkbox" value="" id="flexCheckIndeterminate" />
              <label className="form-check-label fs-5" for="flexCheckIndeterminate">
                Indeterminate checkbox
              </label>
            </div>

            <div className="form-check col-md-6">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
              <label className="form-check-label" for="flexCheckIndeterminate">
                Indeterminate checkbox
              </label>
            </div>

            <div className="form-check col-md-6">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
              <label className="form-check-label" for="flexCheckIndeterminate">
                Indeterminate checkbox
              </label>
            </div>

            <div className="form-check col-md-6">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
              <label className="form-check-label" for="flexCheckIndeterminate">
                Indeterminate checkbox
              </label>
            </div>

          </div>
        </div>
        <div className="col-md-4 mt-md-0 mt-3"> {/* Adding margin-top for small devices */}
          <div className="bg-white rounded rounded-lg p-3"> {/* Padding added to the content */}
            TTT
          </div>
        </div>
      </div>
    </div>
  </>)
}
