const express = require('express')
const router = express.Router;

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

module.exports = router;