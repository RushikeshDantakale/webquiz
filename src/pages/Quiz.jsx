import React from 'react'
import Navbar from '../components/Navbar'

export default function Quiz() {
  return (<div style={{position:"relative"}}>
  
    <Navbar sub={"quiz"}/>
    <div className='rounded-block question'>
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
    </div>
  )
}
