import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confPassword, setconfPassword] = useState(""); 
    
    return(
        <>
        <form className="col-m5 mx-auto my-5">
            <div className="form-group">
                <label for ="formGroup">First Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" onChange = { (e) => setfirstName(e.target.value)}/>
            </div>
            <div className="form-group ">
                <label>Last Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" onChange = { (e) => setlastName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for ="formGroup">Email</label>
                <input type="text" className="form-control" id="formGroupExampleInput" onChange = { (e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for ="formGroup">Password</label>
                <input type="password" className="form-control" id="formGroupExampleInput" onChange = { (e) => setPassword(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for ="formGroup">Confirm Password</label>
                <input type="password" className="form-control" id="formGroupExampleInput" onChange = { (e) => setconfPassword(e.target.value)}/>
            </div>
        </form>
        <div className="col-5 mx-auto">
            <h4 className="card-title">{firstName}</h4>
            <h4 className="card-title">{lastName}</h4>
            <h4 className="card-title">{email}</h4>
            <h4 className="card-title">{password}</h4>
            <h4 className="card-title">{confPassword}</h4>

        </div>
        </>
    );
};
    
export default UserForm;