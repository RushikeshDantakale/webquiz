import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import userContext from '../context/user/UserContext';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


export default function Quiz() {
    const [givenAnswers, setGivenAnswers] = useState([]);
    const [index, setIndex] = useState(0);
    const { questions } = useContext(userContext).state;
    const {state , update } = useContext(userContext);
    const {user} = state;

    console.log(state , 13);

    const [showModal, setShowModal] = useState(true); // State to manage modal visibility
    const [agreedToTerms, setAgreedToTerms] = useState(false); // State to track agreement to terms
    const [timerStarted, setTimerStarted] = useState(false); // State to track if timer has started
    
    const navigate = useNavigate()
    
    // Effect to start timer when terms are agreed upon
    useEffect(() => {
        if (agreedToTerms) {
            setTimerStarted(true);
        }
    }, [agreedToTerms]);

    // Function to handle agreement to terms
    const handleAgreeTerms = () => {
        setAgreedToTerms(true);
        setShowModal(false); // Close modal
    };

    useEffect(() => {
        // If the user has already given answers, load them
        if (givenAnswers[index]) {
            const selectedAnswers = givenAnswers[index];
            const checkboxes = document.querySelectorAll(`input[type="checkbox"]`);
            checkboxes.forEach((checkbox, i) => {
                checkbox.checked = selectedAnswers.includes(i);
            });
        }
    }, [index, givenAnswers]);

    const back = (e) => {
        e.preventDefault();
        if (index === 0) {
            return alert("This is the first Question!");
        }
        setGivenAnswers(prevAnswers => {
            const updatedAnswers = [...prevAnswers];
            const selectedAnswers = Array.from({ length: questions[index].choices.length }, (_, i) => {
                const checkbox = document.getElementById(`flexCheckIndeterminate-${index}-${i}`);
                return checkbox.checked ? i : null;
            });
            updatedAnswers[index] = selectedAnswers.filter(answer => answer !== null); // Filter out unchecked checkboxes
            return updatedAnswers;
        });
        setIndex(prevIndex => prevIndex - 1);
    };

    const submit = async (e) => {
        if (e !== undefined) e.preventDefault();
        if ( confirm("Do you really want to submit this quiz??")){
            update("timeOver" , true)
                // Save the current answer before submitting
                const selectedAnswers = Array.from({ length: questions[index].choices.length }, (_, i) => {
                    const checkbox = document.getElementById(`flexCheckIndeterminate-${index}-${i}`);
                    return checkbox.checked ? i : null;
                });
                console.log("inside sb1");
                setGivenAnswers(prevAnswers => {
                    const updatedAnswers = [...prevAnswers];
                    updatedAnswers[index] = selectedAnswers.filter(answer => answer !== null); // Filter out unchecked checkboxes
                    return updatedAnswers;
                });
                console.log("inside sb2");

        
                const jsonData = {
                    givenAnswers: givenAnswers, // Include the current answer
                    index,
                    topic_code: user.topic_code,
                    email: user.email
                };
                console.log("inside sb3");

        
                // Handle submission logic here
                const response = await axios.post(`${import.meta.env.VITE_SERVER}/user/submit_quiz`, jsonData);
                console.log("inside sb4");

                console.log(response, 64);
                console.log("before navigation");
                
                navigate("/user/response"); // Navigate after submission is complete
                console.log("after navigation");
        
        }else{
            update("timeOver" , false)
        }
        
       
    };
    
    

    const save = (e) => {
        e.preventDefault();
        const selectedAnswers = Array.from({ length: questions[index].choices.length }, (_, i) => {
            const checkbox = document.getElementById(`flexCheckIndeterminate-${index}-${i}`);
            return checkbox.checked ? i : null;
        });

        setGivenAnswers(prevAnswers => {
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[index] = selectedAnswers.filter(answer => answer !== null); // Filter out unchecked checkboxes
            return updatedAnswers;
        });

        if (index === questions.length - 1 && confirm("This is the last question! Do You Want To Submit Your Quiz??")) {
            return submit();
        }
        setIndex(prevIndex => prevIndex + 1);
        console.log(givenAnswers, 51);
        // Optionally, you can clear the checkboxes after saving
        const checkboxes = document.querySelectorAll(`input[type="checkbox"]`);
        checkboxes.forEach(checkbox => checkbox.checked = false);
    };

    return (
        <>
            <Modal style={{outline:"1px solid #FFA822"}} show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Terms and Conditions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Your terms and conditions content here */}
                    By clicking "Agree", you agree to the terms and conditions.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() =>{ 
                        navigate(-1)
                        setShowModal(false)}}>
                        Close
                    </Button>
                    <Button style={{backgroundColor:"#FFA822"}} variant="primary" onClick={handleAgreeTerms}>
                        Agree
                    </Button>
                </Modal.Footer>
            </Modal>

            <Navbar sub={"quiz"} />
            <div className="container-fluid">
                <div className="row py-4 px-4">
                    <div className="col-md-6 mx-auto my-4 shadow shadow-sm">
                        <div className="bg-white row rounded rounded-lg px-3 ">
                            <div className="col-md-12 my-2 mx-2 px-2 py-2">
                                <label htmlFor="colFormLabel" className=" col-form-label fs-4 ">{index + 1}.&nbsp;{questions[index].question}</label>
                            </div>
                            {questions[index].choices.map((ch, i) => (
                                <div key={i} className="d-flex col-md-12 rounded rounded-lg border border-2 py-2 px-3 mb-2 ">
                                    <div className="col-md-1">
                                        <input className="form-check-input fs-5 me-2 border border-2" type="checkbox" name={i} id={`flexCheckIndeterminate-${index}-${i}`} />
                                    </div>
                                    <label className="col-md-11 fs-5" htmlFor={`flexCheckIndeterminate-${index}-${i}`}>
                                        {ch}
                                    </label>
                                </div>
                            ))}
                            <div className="col-md-12 mt-3 mb-4">
                                <button className="btn btn-lg btn-danger me-2" onClick={(e) => back(e)}>Back</button>
                                <button className="btn btn-lg btn-success me-2" onClick={(e) => submit(e)}>Submit</button>
                                <button className="btn btn-lg btn-primary me-2" onClick={(e) => save(e)}>Save & Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
