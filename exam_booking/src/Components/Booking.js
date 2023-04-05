import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const Booking = () => {
  const name = useSelector((state) => state.name);
  const age = useSelector((state) => state.age);
  const gender = useSelector((state) => state.gender);
  const exam = useSelector((state) => state.exam);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useState([]);


  // handle seat selection
  const handleSeatSelect = (seat) => {
    // check eligibility based on user's gender and age
    if (
      (gender === "1" && (seat.column === 3 || seat.column === 4)) || // can't select aisle seats if female
      (age <= 20 && (seat.row === 1 || seat.column === 6)) || // can't select column 1 and column 6 if age <= 20
      (age >= 30 && seat.row >= 9) // can't select last 6 rows if age >= 30
    ) {
      alert("Seat is not eligible for selection!");
    } else {
      setSelectedSeat(seat);
    }
  };

  useEffect(() => {
    // Retrieve user data from Local Storage when the component mounts
    const userDataFromStorage = JSON.parse(localStorage.getItem("User"));
    if (userDataFromStorage) {
      setUser(userDataFromStorage);
    }
  }, []);

  // handle submission and save data to local storage
  const handleSubmission = () => {
    if (selectedSeat) {
      setUser((...prev) => {
        return [...user, { ...selectedSeat, name: name, exam: exam }];
      });
      localStorage.setItem(
        "User",
        JSON.stringify([...user, { ...selectedSeat, name: name, exam: exam }])
      );
      alert(
        `Congrats ${name} ! Sucessfully Booked your seat  ${selectedSeat.row}-${selectedSeat.column}.`
      );
      navigate("/");
    } else {
      alert("Please select a seat!");
    }
  };

  // create seat map with eligibility checks
  const seatMap = [];
  for (let i = 1; i <= 13; i++) {
    const row = [];
    for (let j = 1; j <= 7; j++) {
      const seat = {
        row: i,
        column: j,
        eligible:
          gender === "0"
            ? !(age <= 20 && (j === 1 || j === 7)) && !(age >= 30 && i >= 9)
            :!(gender === "1" && (j === 3 || j === 5)) &&
             !(age <= 20 && (j === 1 || j === 7)) &&
              !(age >= 30 && i >= 9) ,
        occupied:
          selectedSeat && selectedSeat.row === i && selectedSeat.column === j,
      };
      row.push(seat);
    }   
    seatMap.push(row);
  }

  return (
    <div className="col-lg-8 ">
      <div className="row justify-content-center flex-column">
        <h1 className="text-center">Seat Selection</h1>
        <table
          className=" "
          style={{ borderSpacing: "15px", borderCollapse: "inherit" }}
        >
          <tbody>
            {seatMap.map((row) => (
              <tr key={row[0].row}>
                {row.map((seat) => (
                  <td
                    key={seat.column}
                    onClick={() => handleSeatSelect(seat)}
                    style={{
                      backgroundColor: seat.occupied
                        ? "grey"
                        : seat.eligible
                        ? "green"
                        : "grey",
                      width: seat.column === 4 ? "30px" : "auto",
                      background: seat.column === 4 ? "white" : "auto",
                      textAlign: "center",
                    }}
                  >
                    {seat.column !== 4 && seat.row + "-" + seat.column}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="row justify-content-center">
          <button className="btn btn-success" onClick={handleSubmission}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
