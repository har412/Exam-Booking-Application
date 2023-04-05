import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Form from './Form';
import axios from 'axios';


function ExamDetails() {
    const { examId } = useParams();
    const [apidata, setapiData] = useState([])
    //get the data from api
    useEffect(() => {
        let response = axios.get(
            "http://localhost:8000/data"
        );
        response.then((res) => {
            console.log(res.data);
            setapiData(res.data)
        });
    }, []);

    //   find the object with same id as examId
    const examData = apidata.find((object) => (object.ticker == examId))
    console.log(examData)
    // format the date
    var formattedDate;
    if (examData) {
        const dateObject = new Date(examData.exam_date);
        formattedDate = dateObject.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    }



    return (
        <div className="col-lg-8">
            <div className="row">
                <div className="col-lg-12 " >
                    <div className="card  text-dark">
                        <img className="img-fluid img-thumbnail" style={{height:'300px'}} src={examData ? examData.image:null} alt="Card image" />
                            <div className="card-img-overlay d-flex flex-column justify-content-end" >
                            <h1 className=''>
                        {examData && examData.title}
                    </h1>
                            </div>
                    </div>
                  
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12  p-3">
                    <h5>{examData && examData.detail1}</h5>
                    <h5>{examData && examData.detail2}</h5>
                    <h3>{examData && formattedDate}</h3>
                </div>
            </div>
            <Form examId={examId}/>
           
        </div>
    )
}

export default ExamDetails
