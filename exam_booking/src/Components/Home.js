import React from "react";
import Exam from "./Exam";
import { useEffect, useState } from "react";

function Home(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Retrieve user data from Local Storage when the component mounts
    const userDataFromStorage = JSON.parse(localStorage.getItem("User"));
    if (userDataFromStorage) {
      setData(userDataFromStorage);
    }
  }, []);

  console.log(props, "in home");
  return (
    <div className="col-lg-8 p-4">
      <div className="d-flex justify-content-center flex-column align-items-center ">
        {props.exams.map((exam) => {
          return <Exam key={exam.id} examDetails={exam}></Exam>;
        })}
      </div>

      
      <div className="d-flex justify-content-center mt-4  flex-column ">
        <h1>Bookings</h1>

        <table className="table">
        <thead className="thead-dark">

        <tr>
            <th scope="col">Name</th>
            <th scope="col">Seat(ROW-COLUMN)</th>
            <th scope="col">Exam</th>
        </tr>
       
      
        </thead>
        <tbody>
        {data.map((user) => {
          return (
            <>
            <tr>
                <td>{user.name}</td>
                <td>{user.row}-{user.column}</td>
                <td>{user.exam}</td>
              <div></div>
              </tr>
            </>
          );
        })}
       
        </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
