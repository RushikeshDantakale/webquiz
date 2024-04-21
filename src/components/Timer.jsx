import React, { useEffect, useState, useContext } from 'react';
import userContext from '../context/user/UserContext';
import { convertSecondsToHoursAndMinutes } from '../helper/time';
import { Modal, Button } from 'react-bootstrap'; // Import modal components from react-bootstrap

export default function Timer() {
  const state = useContext(userContext).state;
  const endTime = state.topic_info[0]?.time || 0;
  const { hr, min } = convertSecondsToHoursAndMinutes(endTime);
  const [time, setTime] = useState({
    hr: hr,
    min: min,
    sec: 0 // Initialize seconds as a number
  });

  const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(prevState => {
        let newSec = prevState.sec - 1;
        let newMin = prevState.min;
        let newHr = prevState.hr;

        if (newSec < 0) {
          newSec = 59;
          newMin -= 1;
        }

        if (newMin < 0) {
          newMin = 59;
          newHr -= 1;
        }

        // Display modal when time is up
        if (newSec === 0 && newMin === 0 && newHr === 0) {
          setShowModal(true);
          clearInterval(intervalId); // Stop the timer
        }

        return {
          hr: newHr,
          min: newMin,
          sec: newSec
        };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAutoSubmit = () => {
    setShowModal(false);
    submitFunction();
  };

  const submitFunction = () => {
    // Your submit logic here
    console.log("Submit function called");
  };

  return (<>
  {/* Modal */}
  <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Time's up!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your quiz time is over. Your quiz will be automatically submitted.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAutoSubmit}>
            Submit Quiz
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    <div className='nav-outer'>
      <div className='nav-items count'>
        Email : <span className='count-inner text-black'>rushikeshdantakale37@gmail.com</span> 
      </div>
      <div className='nav-items count'>
        Time Remaining <span className='count-inner text-black'>{time.hr} : {time.min} : {time.sec}</span> 
      </div>

      
    </div>
    </>);
}
