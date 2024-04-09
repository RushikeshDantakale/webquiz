import react from "react";
import { useState } from "react";
import AdminContext from "./AdminContext";
const AdminState = (props) =>{
    const s1={
        
    }
    const [state , setState] = useState({
        adminInfo : null,
        questionInfo:null,
        questions:null
    });

    const update =(name, value )=> setState({...state , [name]:value})
    

    return (
        <AdminContext.Provider value={{state,update}}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminState;