import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import "../admin.css"


export default function Main() {
  return (
    <>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Total Registered Students</h3>
                        <BsFillArchiveFill className='card_icon'/>
                    </div>
                    <h1>300</h1>
                </div>
                
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Total Exams</h3>
                        <BsFillArchiveFill className='card_icon'/>
                    </div>
                    <h1>300</h1>
                </div>

                <div className='card'>
                    <div className='card-inner'>
                        <h3>Total Subjects</h3>
                        <BsFillArchiveFill className='card_icon'/>
                    </div>
                    <h1>300</h1>
                </div>

                <div className='card'>
                    <div className='card-inner'>
                        <h3>Notifications</h3>
                        <BsFillArchiveFill className='card_icon'/>
                    </div>
                    <h1>300</h1>
                </div>
            </div>
            
        <div className='main-content'>
        </div>
        <div className='charts'>

        </div>
    </>
  )
}
