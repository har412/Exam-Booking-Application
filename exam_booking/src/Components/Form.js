import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";

function UserData(props) {
    const [user, setUser] = useState();
    const dispatch =useDispatch();
    const [gender, setGender] = useState();
    const [age, setAge] = useState();
    const [name, setName] = useState();
    const navigate = useNavigate();

    const handleGenderChange = (e) => {
        let gender = e.target.value;
        setGender(gender);
    };
    const handleAgeChange = (e) => {
        let age = e.target.value;
        setAge(age);
    };
    const handleNameChange = (e) => {
        let name = e.target.value;
        setName(name);
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        let newUser = {
            name: name,
            age: age,
            gender: gender,
            exam:props.examId
        };
        console.log(newUser, "newUser");
        setUser((prev) => {
            if (prev) {
                return [...prev, newUser];
            } else {
                return [newUser];
            }
        });
        dispatch({type:'SET_USER',payload:newUser})
        navigate("/book")
    };

    return (
        <div className="row">
            <div className="col-lg-6 ">
                <h4>Enter Details</h4>
                <form onSubmit={handleSubmit} className="d-flex flex-column">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        className="form-control mb-3"
                        onChange={handleNameChange}
                        required
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="Enter  Age"
                        className="form-control mb-3"
                        onChange={handleAgeChange}
                        required
                    />
                    <select
                        name="gender"
                        id="gender"
                        className="form-control mb-3"
                        onChange={handleGenderChange}
                        required
                    >
                        <option value="">Select the gender</option>
                        <option value="0">Male</option>
                        <option value="1">Female</option>
                    </select>
                    <input
                        type="submit"
                        value={"Select Seat"}
                        className="btn btn-success "
                    />
                </form>
            </div>
        </div>
    );
}

export default UserData;
