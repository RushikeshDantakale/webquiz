import React from 'react'
import Navbar from '../components/Navbar'

export default function Quiz() {
  return (<>
    <Navbar sub={"quiz"}/>
  <div style={{position:"relative" , display:"flex" , gap: "20px" ,padding:"20px 20px" }}>
  
      <div className='rounded-block question-left'>
        <div className="quiz-question"> What is WWW? </div>
        <div className='options'>
        <input className="checkbox" type="checkbox" name="" id="" />
          <div>World Wide Web</div> 
        </div>
        <div className='options'>
        <input className="checkbox" type="checkbox" name="" id="" />
          <div>World Wide Web</div> 
        </div>
        <div className='options'>
        <input className="checkbox" type="checkbox" name="" id="" />
          <div>World Wide Web</div> 
        </div>
        <div className='options'>
        <input className="checkbox" type="checkbox" name="" id="" />
          <div>World Wide Web</div> 
        </div>
        <div className="btn-group">
          <button className='btn btn-submit'>Submit</button>
          <button className='btn btn-next'>Next</button>
        </div>
      </div>
      <div className='rounded-block question-right'>
          1.here is writing answer space <br/>
          2.any image for the reference and links for any study reference<br/>
          3. question numbers to jump out to that question number. <br/>
          4. image upload after that and explanation block. <br/>
      </div>  
  </div>

  <div className='rounded-block rules'>
   1. rules and regulation for the exam .
  </div>
  </>)
}
