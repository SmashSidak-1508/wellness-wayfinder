import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Container, Typography, Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import html2canvas from 'html2canvas';

// Initialize pdfmake fonts
pdfMake.vfs = pdfFonts.pdfMake.vfs;

function ExerciseSchedule() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [exerciseSchedule, setExerciseSchedule] = useState([]);
    const [selectedMuscleGroups, setSelectedMuscleGroups] = useState({});

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const resultRef = useRef(null);

    const fetchExercisesForMuscleGroup = async (muscleGroup) => {
        try {
            const response = await axios.get('https://work-out-api1.p.rapidapi.com/search', {
                params: { Muscles: muscleGroup },
                headers: {
                    'X-RapidAPI-Key': '6940c49e63mshfff121a957a040dp119beajsn02bd62be6f2e',
                    'X-RapidAPI-Host': 'work-out-api1.p.rapidapi.com'
                }
            });
            console.log(response.data);
            return { muscleGroup, exercises: response.data };
        } catch (error) {
            throw new Error(`Failed to fetch exercises for ${muscleGroup}: ${error.message}`);
        }
    };

    const fetchExerciseSchedule = async () => {
        setLoading(true);
        setError(null);
        try {
            const schedulePromises = daysOfWeek.map(async (day) => {
                const muscleGroupsForDay = selectedMuscleGroups[day] || [];
                const exercisesForDay = await Promise.all(muscleGroupsForDay.map(fetchExercisesForMuscleGroup));
                return { day, exercisesForDay };
            });
            const fetchedSchedule = await Promise.all(schedulePromises);
            setExerciseSchedule(fetchedSchedule);
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchExerciseSchedule();
    };

    const handleMuscleGroupChange = (event, day) => {
        setSelectedMuscleGroups({
            ...selectedMuscleGroups,
            [day]: event.target.value
        });
    };

    const handleGeneratePDF = () => {
        html2canvas(resultRef.current).then((canvas) => {
            const imgData = canvas.toDataURL('image/jpeg', 0.5);
            const pdf = pdfMake.createPdf({
                pageSize: 'A4',
                content: [{
                    image: imgData,
                    width: 400,
                    alignment: 'center', // Center the image horizontally
                    
                }]
            });
            pdf.download('exercise_schedule.pdf');
        });
    };
    

    return (
        <Container maxWidth="md">
            <Typography variant="h3" align="center" gutterBottom>Exercise Schedule</Typography>
            <form onSubmit={handleSubmit}>
                {daysOfWeek.map((day) => (
                    <Paper key={day} style={{ marginBottom: '20px', padding: '10px' }}>
                        <Typography variant="h5" align="center" gutterBottom>{day}</Typography>
                        <FormControl fullWidth>
                            <InputLabel id={`${day}-label`}>Select Muscle Groups</InputLabel>
                            <Select
                                labelId={`${day}-label`}
                                id={`${day}-select`}
                                multiple
                                value={selectedMuscleGroups[day] || []}
                                onChange={(e) => handleMuscleGroupChange(e, day)}
                                fullWidth
                                renderValue={(selected) => selected.join(', ')}
                            >
                                <MenuItem value="Biceps">Biceps</MenuItem>
                                <MenuItem value="Triceps">Triceps</MenuItem>
                                <MenuItem value="Chest">Chest</MenuItem>
                                <MenuItem value="Back">Back</MenuItem>
                                {/* Add more muscle groups as needed */}
                            </Select>
                        </FormControl>
                    </Paper>
                ))}
                <Button variant="contained" type="submit" style={{ marginRight: '10px' }}>Generate Schedule</Button>
                <Button variant="contained" onClick={handleGeneratePDF}>Generate PDF</Button>
            </form>
            {loading && <Typography variant="body1" align="center">Loading...</Typography>}
            {error && <Typography variant="body1" align="center" color="error">{error}</Typography>}
            <div ref={resultRef}>
                {exerciseSchedule.map(({ day, exercisesForDay }, index) => (
                    <Paper key={index} style={{ marginBottom: '20px' }}>
                        <Typography variant="h5" align="center" gutterBottom>{day}</Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Muscle Group</TableCell>
                                        <TableCell>Exercises</TableCell>
                                        <TableCell>Intensity Level</TableCell>
                                        {/* <TableCell>Explanation</TableCell> */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {exercisesForDay.map(({ muscleGroup, exercises }) => (
                                        <TableRow key={muscleGroup}>
                                            <TableCell>{muscleGroup}</TableCell>
                                            <TableCell>
                                                <ul>
                                                    {exercises.slice(0, 4).map((exercise, index) => (
                                                        <li key={index}>{exercise.WorkOut}</li>
                                                    ))}
                                                </ul>
                                            </TableCell>
                                            
                                            <TableCell>
                                                <ul>
                                                    {exercises.slice(0, 4).map((exercise, index) => (
                                                        <li key={index}>{exercise.Intensity_Level}</li>
                                                    ))}
                                                </ul>
                                            </TableCell>
                                            
                                            {/* <TableCell>
                                                <ul>
                                                    {exercises.slice(0,4).map((exercise, index) => (
                                                        <li key={index}>{exercise.Explaination}</li>
                                                    ))}
                                                </ul> */}
                                            {/* </TableCell> */}

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                ))}
            </div>
        </Container>
    );
}

export default ExerciseSchedule;
