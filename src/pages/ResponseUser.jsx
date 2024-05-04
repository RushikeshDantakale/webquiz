import React ,{ useEffect ,useState ,useContext } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios"
import userContext from '../context/user/UserContext'

export default function ResponseUser() {
    const {state} = useContext(userContext)

    const {user  } = state;
    const {email , topic_code}  = user;
    useEffect(()=>{
        const fetchResult = async () => {
        const response = await axios.post(`${import.meta.env.VITE_SERVER}/quiz_response` , {email , topic_code })
        console.log(response , 16)
        }
        fetchResult();
    } , [])

  return (<>
    <Navbar sub={"home"}/>
    <div className="container-fluid row">
    <div className="mx-auto row col-md-6 fw-bold rounded rounded-lg bg-white  p-4 my-4 ">
        <div className="text-center h-20">
            <img width="100%" height="300px" src="/congrats.svg"  />
        </div>
        <div className="text-center fs-2">Congrats ! You have submitted the quiz!!</div> 
        {/* <p className='fs-4 fw-semibold text-center'>You have got <span className='text-warning fw-bold'>{"3"}</span> out of <span className='text-warning fw-bold'>{"10"}</span> correct answers!!!</p> */}
    </div>
    </div>
  </>
  )
}
