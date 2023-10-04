import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const CourseDetails = ({ match }) => {
    const courseId = match.params.id;
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const fetchCourseDetails = async () => {
            const courseCollection = collection(db, 'courses');
            const courseSnapshot = await getDocs(courseCollection);
            const courseData = courseSnapshot.docs.find(doc => doc.id === courseId);
            
            if(courseData) {
                setCourse(courseData.data());
            }
        };

        fetchCourseDetails();
    }, [courseId]);

    return (
        <div>
            <h1>{course?.title}</h1>
            {/* Render other course details as needed */}
        </div>
    );
};

export default CourseDetails;
