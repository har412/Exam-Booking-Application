import React from 'react'
import {Link} from 'react-router-dom'

function Exam(props) {
    console.log(props,"In exam")
  return (
    
    <div className="row p-4 bg-secondary my-3 text-dark">
        <Link to={`/exams/${props.examDetails.ticker}`} className='text-white nav-link' >
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-4">
                  <img src={props.examDetails.image} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-8">
                  <h4>{props.examDetails.title}</h4>
                  <h4>{props.examDetails.year}</h4>
                  <p>{props.examDetails.detail1}</p>
                </div>
              </div>
            </div>
            </Link>
           </div>
          
  )
}

export default Exam
