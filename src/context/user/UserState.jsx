import { useState } from "react";
import userContext from "./UserContext";
const UserState = (props) =>{
    const [state , setState] = useState({
        topic_info:null,
        questions:null
    });

    const update =(name, value )=> setState(prevState => ({
        ...prevState,
        [name]: value
    })) 

    return (<userContext.Provider value={{state,update}}>
            {props.children}
        </userContext.Provider>)
}

export default UserState;