import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Booking from "./Components/Booking";
import ExamDetails from "./Components/ExamDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";




function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let response = axios.get(
      "http://localhost:8000/data"
    );
    response.then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row ">
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path="/home"  element={<Home exams={data} />} />
            <Route exact path="/"  element={<Home exams={data} />} />
            <Route exact path="/exams/:examId"  element={<ExamDetails />} />
            <Route exact path="/book"  element={<Booking />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
