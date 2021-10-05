import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Teacher from '../Teacher/Teacher';
import './Teachers.css';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('./teacher.json')
            .then(res => res.json())
            .then(data => setTeachers(data));
    }, []);

    return (
        <div>
            {
                teachers.length === 0 ?
                    <Spinner animation="border" />
                    :
                    <div>
                        <h1 className="teacher-gallery-title">Teacher's Gallery</h1>
                        <div className="all-teachers">

                            {
                                teachers.map(teacher => <Teacher
                                    teacher={teacher}
                                ></Teacher>)
                            }
                        </div>
                    </div>


            }

        </div>
    );
};

export default Teachers;