const express = require("express");
const router = express.Router();

let exams = [
    {id:1, subject: 'Science', date: '2025-4-1'}
];

router.post('/exams', (req, res) => {
    const newExam = req.body;
    newExam.id = exams.length + 1; // Assign a new ID
    exams.push(newExam);
    res.status(201).json(newExam);
});

router.put("/exams/:id" , (req,res) => {
    const examId = parseInt(req.params.id);
    const updateExam = req.body;

    let found = false;
    exams = exams.map((exam) => {
        if (exam.id == examId) {
            found = true;
            return {... exam, ...updateExam};
        }
        return exam;
    })

    if(found) {
        res.json({message:"Exam updated successfully"});
    }
    else {
        res.status(404).json({error: "Exam not found"});
    }
});

router.get('/exams', (req, res) => {
    res.json(exams);
});

module.exports = router;