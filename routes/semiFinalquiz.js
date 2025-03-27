const express = require('express')
const router = express.Router;

let exams = [
    {id:1, subject: 'Science', date: '2025-4-1'}
];

router.get('/exams', (req, res) => {
    res.json(exams);
});