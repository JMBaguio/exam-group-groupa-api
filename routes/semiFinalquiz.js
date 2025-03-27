const express = require('express')
const router = express.Router;

router.post("/exams", (req, res) => {
    const newExam = req.body;
    newExam.id = exams.length + 1; // Assign a new ID
    exams.push(newExam);
    res.status(201).json(newExam);

let exams = [
    {id:1, subject: 'Science', date: '2025-4-1'}
];

router.get('/exams', (req, res) => {
    res.json(exams);
});