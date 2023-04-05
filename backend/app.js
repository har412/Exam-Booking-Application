const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors({
    origin:"*"
}))
app.get("/data", (req, res) => {
  const data = [
    {
      id: 0,
      ticker: "UPSC22",
      title: "UPSC 2022 Main Exams",
      year: "2022",
      exam_date: "2011-08-12T20:17:46.384Z",
      image:
        "https://img.freepik.com/free-photo/exams-test-student-high-school-university-student-holding-pencil-testing-exam-answer-sheet_4236-1316.jpg",
      detail1: "UPSC is a very prestigious exam",
      detail2: "Exam is conducted in 3 rounds",
      detail3: "",
      Eligibility: "Graduation",
    },
    {
      id: 1,
      ticker: "JEE Main",
      title: "JEE main 2023 Main Exams",
      year: "2023",
      exam_date: "2011-08-12T20:17:46.384Z",
      image:
        "https://images1.livehindustan.com/uploadimage/library/2022/12/16/16_9/16_9_1/jee_mains_1671177156.jpg",
      detail1: "JEE MAIN is a very prestigious exam",
      detail2: "Exam is conducted in 1 rounds",
      detail3: "",
      Eligibility: "12th",
    }
  ];
  res.json(data);
});

app.listen(8000, () => {
  console.log("running at 8080");
});
