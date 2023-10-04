import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const AdminDashboard = () => {
    const [courseTitle, setCourseTitle] = useState('');

    const handleCourseCreation = async () => {
        if(courseTitle.trim() !== '') {
            await addDoc(collection(db, "courses"), { title: courseTitle });
            setCourseTitle('');
        }
    };

    return (
        <div>
            <input value={courseTitle} onChange={e => setCourseTitle(e.target.value)} placeholder="Course Title"/>
            <button onClick={handleCourseCreation}>Create Course</button>
        </div>
    );
};

export default AdminDashboard;
